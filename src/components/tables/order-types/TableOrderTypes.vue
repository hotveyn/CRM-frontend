<script setup lang="ts">
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';
import { DataTableColumns, NButton, NDataTable } from 'naive-ui';
import { IBreak } from '@/interfaces/break/IBreak.ts';
import { h } from 'vue';

defineProps<{
  tableData: IOrderType[];
}>();

const emit = defineEmits<{
  change: [orderType: IOrderType];
  remove: [id: number];
}>();

const columns = createColumns({
  change: (orderType : IOrderType) => {
    emit('change', orderType);
  },
  remove: (id: number) => {
    emit('remove', id);
  },
});

function createColumns(actions: {
  change: (orderType : IOrderType) => void;
  remove: (id: number) => void
}): DataTableColumns<IBreak> {
  return [
    {
      title: 'Название',
      key: 'name',
      sorter: 'default' as const,
    },
    {
      title: 'Действия',
      key: 'actions',
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
              onClick: () => actions.change({ id: row.id, name: row.name }),
            },
            {
              default: () => 'Изменить',
            },
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
            },
          ),
        ];
      },
    },
  ];
}

</script>

<template>
  <NDataTable
    :single-line="false"
    :data="tableData"
    :columns="columns"
    :pagination="{
      pageSize: 30,
    }"
    :bordered="true"
  />
</template>

<style scoped lang="scss">

</style>