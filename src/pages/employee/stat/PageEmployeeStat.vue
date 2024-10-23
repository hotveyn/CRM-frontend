<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { NCollapse, NCollapseItem, NDatePicker, NDivider, NEmpty, NTable, NButton, NCard } from 'naive-ui';
import { useStatService } from '@/services/stat.service.ts';
import { useUserService } from '@/services/user.service.ts';
import { IUserV2, UsersEnum } from '@/interfaces/user/IUser.ts';
import { IStatDetailed } from '@/interfaces/stat/IStatPayment.ts';
import dayjs from 'dayjs';

const userService = useUserService();
const statService = useStatService();

const usersLoading = ref<boolean>(false);
const usersStatLoading = reactive<{ [userId: number]: boolean }>({});
const range = ref<[number, number]>([Date.now() - 2678400000, Date.now()]);

const users = ref<IUserV2[]>([]);
const usersStats = reactive<{
  [userId: number]: IStatDetailed;
}>({});

const start = computed(() => {
  const date = new Date(range.value[0]);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(1);
  return date.toISOString();
});
const end = computed(() => {
  const date = new Date(range.value[1]);
  date.setHours(23);
  date.setMinutes(59);
  date.setSeconds(59);
  return date.toISOString();
});

onMounted(async () => {
  await requestUsers();
});
watch([start, end], async () => {
  await requestUsers();
});

async function requestUsers() {
  usersLoading.value = true;
  users.value = await userService
    .getUsers({ role: UsersEnum.EMPLOYEE, offset: 0, limit: 100, orderBy: 'lastName', orderDirection: 'desc' })
    .then((res) => res.data)
    .finally(() => {
      usersLoading.value = false;
    });
}
async function requestUserStat(userId: number) {
  usersStatLoading[userId] = true;
  usersStats[userId] = await statService.getUserDetailedStat(userId, start.value, end.value).finally(() => {
    delete usersStatLoading[userId];
  });
}

async function handleCollapseClick(event: { name: number | string; expanded: boolean }) {
  if (event.expanded) await requestUserStat(+event.name);
}


function calculateSum(array: Array<{ name: string, sum: number }>){
  return array.reduce((acc: number, curVal: { name: string, sum: number }) => {
    return acc + curVal.sum;
  }, 0)
}
</script>

<template>
  <div class="employee-stat">
    <NDivider>Статистика</NDivider>
    <div class="date-range" style="margin-bottom: 30px">
      <NDatePicker format="dd.MM.YYYY" size="small" v-model:value="range" type="daterange" />
    </div>
    <template v-if="usersLoading"> Загрузка </template>
    <template v-else>
      <div class="employee-stat__empty" v-if="!users.length">
        <NEmpty size="huge" description="Статистика пуста">
          <template #extra>Пусто</template>
        </NEmpty>
      </div>
      <NCollapse @item-header-click="handleCollapseClick" class="employee-stat__stats">
        <NCollapseItem :name="user.id" v-for="user in users" :key="user.id" :title="`${user.lastName} ${user.firstName} ${user.patronymicName}`">
          <template v-if="!usersStatLoading[user.id] && usersStats[user.id]">
            <NDivider title-placement="left">Отделы</NDivider>
            <div style="display: flex; gap: 20px; flex-wrap: wrap" class="employee-stat-departments">
              <NButton type="info" strong secondary size="medium" :key="index" v-for="(departmentName, index) in usersStats[user.id].departmentsNames">{{ departmentName }}</NButton>
            </div>
            <template v-if="usersStats[user.id].departmentsPayments.length">
              <NDivider title-placement="left">Оплата</NDivider>
              <NTable :bordered="false" :single-line="false">
                <thead>
                  <tr>
                    <th>Отдел</th>
                    <th>Оплата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr :key="departmentsPayment.id" v-for="departmentsPayment in usersStats[user.id].departmentsPayments">
                    <td>{{ departmentsPayment.name }}</td>
                    <td>{{ departmentsPayment.sum }}</td>
                  </tr>
                  <tr>
                    <td>Итого</td>
                    <td>
                      {{
                        calculateSum(usersStats[user.id].departmentsPayments)
                      }}
                    </td>
                  </tr>
                </tbody>
              </NTable>
            </template>
            <template v-if="usersStats[user.id].completedStages.length">
              <NDivider title-placement="left">Завершенные этапы</NDivider>
              <div style="display: grid; gap: 15px" class="employee-stat-cards">
                <NCard :key="completedStage.id" v-for="completedStage in usersStats[user.id].completedStages" :title="completedStage.order.name">
                  <strong>Номер заказа</strong> - {{ completedStage.order.code }}<br />
                  <strong>Тип вывески</strong> - {{ completedStage.order.type.name }}<br />
                  <strong>Цена вывески</strong> - {{ completedStage.order.price }}<br />
                  <strong>Отдел</strong> - {{ completedStage.department ? completedStage.department.name : '' }}<br />
                  <strong>Процент за работу</strong> - {{ completedStage.percent }}<br />
                  <strong>Оплата</strong> - {{ Math.floor(completedStage.order.price * (completedStage.percent / 100)) }}<br />
                  <strong>Дата завершения</strong> - {{ dayjs(completedStage.readyDate).format('DD MMMM YYYY') }}<br />
                  <strong>Брак</strong> - {{ completedStage.break ? completedStage.break.name : 'Без брака' }}
                </NCard>
              </div>
            </template>
          </template>
        </NCollapseItem>
      </NCollapse>
    </template>
  </div>
</template>

<style lang="scss">
.employee-stat-departments {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.n-date-panel.n-date-panel--daterange {
  grid-template-areas:
    'left-calendar divider '
    'right-calendar divider'
    'footer footer'
    'action action';
}
.employee-stat {
  &__stats {
    margin-top: 20px;
  }
}
</style>
