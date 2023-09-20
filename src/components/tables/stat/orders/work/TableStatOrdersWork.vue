<script setup lang="ts">
import { NDataTable, DataTableColumns } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';

defineProps<{
  tableData: IOrder[];
}>();

function createColumns(): DataTableColumns<IOrder> {
  return [
    {
      title: 'Код',
      key: 'code',
      minWidth: 110,
      sorter: 'default' as const,
    },
    {
      title: 'Название',
      key: 'name',
      sorter: 'default' as const,
    },
    {
      title: 'Дата начала',
      key: 'date_start',
      sorter: 'default' as const,
    },
    {
      title: 'Дата сдачи',
      key: 'date_end',
      sorter: 'default' as const,
    },
    {
      title: 'Тип',
      key: 'type',
      sorter: 'default' as const,
    },
    {
      title: 'Длина неона',
      key: 'neon_length',
      sorter: 'default' as const,
    },
    {
      title: 'Текущий этап произодства',
      key: 'current_department',
      sorter: 'default' as const,
    },
    {
      title: 'Текущий исполнитель',
      key: 'current_user',
      sorter: 'default' as const,
    },
    {
      title: 'Комментарий',
      key: 'comment',
      sorter: 'default' as const,
    },
  ];
}
</script>

<template>
  <div class="table-orders-stat-work">
    <NDataTable
      :single-line="false"
      :data="tableData"
      :columns="createColumns()"
      :pagination="{
        pageSize: 30,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
