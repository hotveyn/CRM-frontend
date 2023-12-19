<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { NSkeleton, NDivider, NDatePicker } from 'naive-ui';
import TableStatEmployees from 'components/tables/stat/employee/TableStatEmployees.vue';
import { useStatEmployeesStore } from '@/store/stat/stat-employees.store.ts';

const statEmployeesStore = useStatEmployeesStore();
const isLoading = ref<boolean>(true);

const dateNowMinusOneMonth = Date.now() - 2678400000;

const range = ref<[number, number]>([dateNowMinusOneMonth, Date.now()]);

const start = computed(() => {
  return new Date(range.value[0]).toISOString();
});
const end = computed(() => {
  return new Date(range.value[1]).toISOString();
});

onMounted(async () => {
  await statEmployeesStore.request(start.value, end.value);
  isLoading.value = false;
});

watch(end, async () => {
  await statEmployeesStore.request(start.value, end.value);
});
</script>

<template>
  <div class="admin-stat-employees">
    <NDivider title-placement="left">Статистика по сотрудникам</NDivider>
    <div class="date-range" style="margin-bottom: 30px">
      <NDatePicker v-model:value="range" type="daterange" />
    </div>
    <div class="admin-stat-employees__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableStatEmployees v-else :table-data="statEmployeesStore.stat" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-employees {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
