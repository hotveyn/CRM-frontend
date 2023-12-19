<script setup lang="ts">
import { DataTableColumns, NDataTable } from 'naive-ui';
import { IDepartmentPayment, IStatPayment } from '@/interfaces/stat/IStatPayment.ts';

const props = defineProps<{
  tableData: IStatPayment[],
  departmentColumns: DataTableColumns<IDepartmentPayment>
}>();

const columns = createColumns()

function createColumns(): DataTableColumns<IDepartmentPayment> {
  return [
    {
      title: '',
      key: 'employee_name',
    },
    ...props.departmentColumns,
    {
      title: 'Сумма',
      key: 'sum',
      sorter: 'default' as const
    },
  ];
}

</script>

<template>
  <NDataTable
    :single-line="false"
    :data="tableData"
    :columns="columns"
    :bordered="true"
  />
</template>

<style scoped lang="scss">

</style>