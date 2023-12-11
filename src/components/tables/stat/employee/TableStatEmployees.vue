<script setup lang="ts">
import { NDataTable, DataTableColumns, NTag } from 'naive-ui';
import { h } from 'vue';
import { IStatEmployee } from '@/interfaces/stat/IStatEmployee.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

defineProps<{
  tableData: IStatEmployee[];
}>();
function createColumns(): DataTableColumns<IStatEmployee> {
  return [
    {
      title: 'Номер',
      key: 'code',
      sorter: 'default' as const,
    },
    {
      title: 'ФИО',
      key: 'full_name',
      sorter: 'default' as const,
    },
    {
      title: 'Завершённые этапы',
      key: 'stages',
      sorter: 'default' as const,
    },
    {
      title: 'Брак',
      key: 'stages_break',
      sorter: 'default' as const,
    },
    {
      title: 'Процент брака',
      key: 'break_percent',
      sorter: 'default' as const,
    },
    {
      title: 'Длина длина(Сборка, Пайка)',
      key: 'price',
      sorter: 'default' as const,
    },
    {
      title: 'Отделы',
      key: 'departments',
      render(row) {
        return row.departments.map((department: IDepartment) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px',
              },
              type: 'info',
              bordered: false,
            },
            {
              default: () => department.name,
            }
          );
        });
      },
    },
  ];
}
</script>

<template>
  <div class="table-stat-employee">
    <NDataTable
      :data="tableData"
      :single-line="false"
      :columns="createColumns()"
      :pagination="{
        pageSize: 30,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
