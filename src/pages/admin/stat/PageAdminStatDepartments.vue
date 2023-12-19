<script setup lang="ts">
import { useStatDepartmentsStore } from '@/store/stat/stat-departments.store.ts';
import { computed, onMounted, ref, watch } from 'vue';
import TableStatDepartments from 'components/tables/stat/departments/TableStatDepartments.vue';
import { NSkeleton, NDivider, NDatePicker } from 'naive-ui';

const statDepartmentsStore = useStatDepartmentsStore();
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
  await statDepartmentsStore.request(start.value, end.value);
  isLoading.value = false;
});

watch(end, async () => {
  await statDepartmentsStore.request(start.value, end.value);
});
</script>

<template>
  <div class="admin-stat-departments">
    <NDivider title-placement="left">Статистика по отделам</NDivider>
    <div class="date-range" style="margin-bottom: 30px">
      <NDatePicker v-model:value="range" type="daterange" />
    </div>
    <div class="admin-stat-departments__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableStatDepartments v-else :table-data="statDepartmentsStore.stat" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-departments {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
