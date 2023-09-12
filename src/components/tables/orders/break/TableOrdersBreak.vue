<script setup lang="ts">
import { h } from 'vue';
import { NDataTable, DataTableColumns, NButton } from 'naive-ui';
import { IOrder } from '@/interfaces/order/IOrder.ts';

defineProps<{
  tableData: IOrder[];
}>();

const emit = defineEmits<{
  change: [id: number];
  stop: [id: number];
  restore: [id: number];
}>();

const columns = createColumns({
  change: (id: number) => emit('change', id),
  stop: (id: number) => emit('stop', id),
  restore: (id: number) => emit('restore', id),
});

function createColumns(actions: { change: (id: number) => void; stop: (id: number) => void; restore: (id: number) => void }): DataTableColumns<IOrder> {
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
      title: 'Брак',
      key: 'break.name',
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
              onClick: () => actions.restore(row.id),
            },
            {
              default: () => 'Востановить',
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
              onClick: () => actions.stop(row.id),
            },
            {
              default: () => 'Снять с произодства',
            }
          ),
        ];
      },
    },
  ];
}
</script>

<template>
  <div class="table-orders-stopped">
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
