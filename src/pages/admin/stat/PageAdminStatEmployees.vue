<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { NSkeleton, NDivider } from 'naive-ui';
import TableStatEmployees from 'components/tables/stat/employee/TableStatEmployees.vue';
import { useStatEmployeesStore } from '@/store/stat/stat-employees.store.ts';

const statEmployeesStore = useStatEmployeesStore();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  await statEmployeesStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-stat-employees">
    <NDivider title-placement="left">Статистика по сотрудникам</NDivider>
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
