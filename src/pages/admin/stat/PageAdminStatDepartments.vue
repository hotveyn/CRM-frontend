<script setup lang="ts">
import { useStatDepartmentsStore } from '@/store/stat/stat-departments.store.ts';
import { onMounted, ref } from 'vue';
import TableStatDepartments from 'components/tables/stat/departments/TableStatDepartments.vue';
import { NSkeleton } from 'naive-ui';

const statDepartmentsStore = useStatDepartmentsStore();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  await statDepartmentsStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-stat-departments">
    <h1>Статистика по отделам</h1>
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
  gap: 30px;
}
</style>
