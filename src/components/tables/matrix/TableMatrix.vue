<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { ITableMatrix } from '@/interfaces/table/ITableMatrix.ts';

const props = defineProps<{
  tableData: ITableMatrix[];
  departmentColumns: DataTableColumns<ITableMatrix>;
}>();

const columns = createColumns();

function createColumns(): DataTableColumns<ITableMatrix> {
  return [
    {
      title: 'Тип вывески',
      key: 'order_type.name',
      sorter: 'default' as const,
    },
    ...props.departmentColumns,
    {
      title: 'Сумма',
      key: 'sum',
      sorter: 'default' as const,
    },
  ];
}
</script>

<template>
  <NDataTable :single-line="false" :data="tableData" :columns="columns" :bordered="true" />
</template>

<style scoped lang="scss"></style>
