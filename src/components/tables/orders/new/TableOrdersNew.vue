<script setup lang="ts">
import { h } from 'vue';
import { NDataTable, DataTableColumns, NButton } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';

defineProps<{
  tableData: IOrder[];
}>();

const emit = defineEmits<{
  change: [id: number];
  remove: [id: number];
  toWork: [id: number];
}>();

const columns = createColumns({
  change: (id: number) => emit('change', id),
  remove: (id: number) => emit('remove', id),
  toWork: (id: number) => emit('toWork', id),
});

function createColumns(actions: { change: (id: number) => void; remove: (id: number) => void; toWork: (id: number) => void }): DataTableColumns<IOrder> {
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
              type: 'default',
              size: 'small',
              style: {
                marginRight: '6px',
              },
              onClick: () => actions.change(row.id),
            },
            {
              default: () => 'Изменить',
            }
          ),
          h(
            NButton,
            {
              type: 'primary',
              size: 'small',
              style: {
                marginRight: '6px',
              },
              onClick: () => actions.toWork(row.id),
            },
            {
              default: () => 'В работу',
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
              onClick: () => actions.remove(row.id),
            },
            {
              default: () => 'Удалить',
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
