<script setup lang="ts">
import { h } from 'vue';
import { NDataTable, DataTableColumns, NButton } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';

defineProps<{
  tableData: IOrder[];
}>();

const emit = defineEmits<{
  enough: [id: number];
  notEnough: [id: number];
}>();

const columns = createColumns({
  enough: (id: number) => emit('enough', id),
  notEnough: (id: number) => emit('notEnough', id),
});

function createColumns(actions: { enough: (id: number) => void; notEnough: (id: number) => void }): DataTableColumns<IOrder> {
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
      key: 'type.name',
      sorter: 'default' as const,
    },
    {
      title: 'Стоимость',
      key: 'price',
      sorter: 'default' as const,
    },
    {
      title: 'Комментарий',
      key: 'comment',
      sorter: 'default' as const,
    },
    {
      title: 'Действия',
      key: 'actions',
      width: 110,
      render(row) {
        return [
          h(
            NButton,
            {
              type: 'primary',
              size: 'small',
              style: {
                marginRight: '6px',
              },
              onClick: () => actions.enough(row.id),
            },
            {
              default: () => 'Достаточно',
            }
          ),
          h(
            NButton,
            {
              type: 'error',
              size: 'small',
              style: {
                marginRight: '6px',
              },
              onClick: () => actions.notEnough(row.id),
            },
            {
              default: () => 'Не хватает',
            }
          ),
        ];
      },
    },
  ];
}
</script>

<template>
  <div class="table-orders-new">
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
