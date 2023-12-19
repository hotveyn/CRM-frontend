<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { IStageDetail } from '@/interfaces/stage/IStageDetail.ts';

defineProps<{
  tableData: IStageDetail[];
}>();
function createColumns(): DataTableColumns<IStageDetail> {
  return [
    {
      title: 'В порядке',
      key: 'in_order',
      sorter: 'default' as const,
      defaultSortOrder: 'ascend' as const,
    },
    {
      title: 'Отдел',
      key: 'department.name',
      sorter: 'default' as const,
    },
    {
      title: 'Сотрудник',
      key: 'full_name',
      sorter: 'default' as const,
    },
    {
      title: 'Процент',
      key: 'percent',
      sorter: 'default' as const,
    },
  ];
}
</script>

<template>
  <NDataTable :single-line="false" :data="tableData" :columns="createColumns()" :bordered="true" />
</template>

<style scoped lang="scss"></style>
