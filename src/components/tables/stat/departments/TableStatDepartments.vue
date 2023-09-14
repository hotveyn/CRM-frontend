<script setup lang="ts">
import { NDataTable, DataTableColumns } from 'naive-ui';
import { IStatDepartment } from '@/interfaces/stat/IStatDepartment.ts';
defineProps<{
  tableData: IStatDepartment[];
}>();

const columns = createColumns();

function createColumns(): DataTableColumns<IStatDepartment> {
  return [
    {
      title: 'Отдел',
      key: 'department_name',
      sorter: 'default' as const,
    },
    {
      title: 'Завершённые этапы',
      key: 'stages',
      sorter: 'default' as const,
    },
    {
      title: 'Количество брака',
      key: 'stages_break',
      sorter: 'default' as const,
    },
    {
      title: 'Процент брака',
      key: 'break_percent',
      sorter: 'default' as const,
    },
    {
      title: 'Общая длина неона',
      key: 'neon_length',
      sorter: 'default' as const,
    },
  ];
}
</script>

<template>
  <div class="table-fired">
    <NDataTable
      :single-line="false"
      :data="tableData"
      :columns="columns"
      :pagination="{
        pageSize: 30,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
