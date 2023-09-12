<script setup lang="ts">
import { NDataTable, DataTableColumns } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IOrderReclamation } from '@/interfaces/order/IOrderReclamation.ts';

defineProps<{
  tableData: IOrderReclamation[];
}>();

const columns = createColumns();

function createColumns(): DataTableColumns<IOrder> {
  return [
    {
      title: 'Код',
      key: 'code',
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
      title: 'Номер гарантийного талона',
      key: 'reclamation_number',
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
  <div class="table-orders-reclamation">
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
