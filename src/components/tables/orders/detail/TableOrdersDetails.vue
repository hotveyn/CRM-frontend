<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { IStageDetail } from '@/interfaces/stage/IStageDetail.ts';

export interface orderStageToTableOrdersDetails {
  inOrder: number;
  departmentName: string;
  fullName: string;
  percent: number;
}
defineProps<{
  tableData: Array<orderStageToTableOrdersDetails>;
}>();
function createColumns(): DataTableColumns<IStageDetail> {
  return [
    {
      title: 'В порядке',
      key: 'inOrder',
      sorter: 'default' as const,
      defaultSortOrder: 'ascend' as const,
    },
    {
      title: 'Отдел',
      key: 'departmentName',
      sorter: 'default' as const,
    },
    {
      title: 'Сотрудник',
      key: 'fullName',
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
