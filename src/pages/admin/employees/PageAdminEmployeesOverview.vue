<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { useStatService } from '@/services/stat.service.ts';
import { NDatePicker, NDivider, NTable } from 'naive-ui';
import { IStatDetailed } from '@/interfaces/stat/IStatPayment.ts';
import dayjs from 'dayjs';

const dateNowMinusOneMonth = Date.now() - 2678400000;
const range = ref<[number, number]>([dateNowMinusOneMonth, Date.now()]);
const start = computed(() => {
  const date = new Date(range.value[0])
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(1)
  return date.toISOString();
});
const end = computed(() => {
  const date = new Date(range.value[1])
  date.setHours(23)
  date.setMinutes(59)
  date.setSeconds(59)
  return date.toISOString();
});

const stat = ref<IStatDetailed>({name: '', code: '', departmentsNames: [], departmentsPayments: [], completedStages:[]});
const loading = ref(true);
const statService = useStatService();
const route = useRoute();

onMounted(async ()=>{
  await request()
});

watch([start, end], async () => {
  await request()
});

async function request(){
  const userId = Number(route.params.id)
  if(userId && !isNaN(userId))
    stat.value = await statService.getUserDetailedStat(userId, start.value, end.value).finally(()=>{loading.value = false});
}
</script>

<template>
<div class="admin-users-overview">
  <div v-if="!loading" class="data">
    <div class="date-range" style="margin-bottom: 30px">
      <NDatePicker v-model:value="range" type="daterange" />
    </div>
    <NDivider title-placement="center">Статистика работника: {{stat && stat.name}}</NDivider>
    <NDivider title-placement="left">Отделы</NDivider>
    <div class="departments">
      <div class="department" :key="index" v-for="(departmentName, index) in stat.departmentsNames">
        <p class="department__name">{{departmentName}}</p>
      </div>
    </div>
    <NDivider title-placement="left">Оплата</NDivider>
    <NTable :bordered="false" :single-line="false">
      <thead>
      <tr>
        <th>Отдел</th>
        <th>Оплата</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="departmentsPayment.id"  v-for="departmentsPayment in stat.departmentsPayments">
        <td>{{ departmentsPayment.name }}</td>
        <td>{{ departmentsPayment.sum }}</td>
      </tr>
      </tbody>
    </NTable>
    <NDivider title-placement="left">Завершенные этапы</NDivider>
    <NTable :bordered="false" :single-line="false">
      <thead>
      <tr>
        <th>Номер заказа</th>
        <th>Имя заказа</th>
        <th>Тип вывески</th>
        <th>Цена вывески</th>
        <th>Отдел</th>
        <th>Процент за работу</th>
        <th>Оплата</th>
        <th>Дата завершения</th>
        <th>Брак</th>
      </tr>
      </thead>
      <tbody>
        <tr :key="completedStage.id"  v-for="completedStage in stat.completedStages">
          <td>{{ completedStage.order.code }}</td>
          <td>{{ completedStage.order.name }}</td>
          <td>{{ completedStage.order.type.name }}</td>
          <td>{{ completedStage.order.price }}</td>
          <td>{{ completedStage.department ? completedStage.department.name : ''}}</td>
          <td>{{ completedStage.percent }}</td>
          <td>{{ Math.floor(completedStage.order.price * (completedStage.percent / 100)) }}</td>
          <td>{{ dayjs(completedStage.readyDate).format('DD MMMM YYYY') }}</td>
          <td>{{ completedStage.break ? completedStage.break.name : '' }}</td>
        </tr>
      </tbody>
    </NTable>
  </div>
</div>
</template>

<style scoped lang="scss">
.departments{
  display: flex;
  align-items: center;
  gap: 10px;

  .department{
    padding: 35px;
    background-color: aliceblue;
    border: 2px solid #8fbce5;
    border-radius: 5px;

    &__name{
      font-size: 25px;
      color: #137edf;
    }
  }
}
</style>