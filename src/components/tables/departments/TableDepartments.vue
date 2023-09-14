<script setup lang="ts">
import { DataTableColumns, NButton, NDataTable } from 'naive-ui';
import { h } from 'vue';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

defineProps<{
  tableData: IDepartment[];
}>();

const emit = defineEmits<{
  remove: [id: number];
  change: [id: number];
}>();

const columns = createColumns({
  change: (id: number) => emit('change', id),
  remove: (id: number) => emit('remove', id),
});

function createColumns(actions: { change: (id: number) => void; remove: (id: number) => void }): DataTableColumns<IDepartment> {
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
              onClick: () => actions.change(row.id),
            },
            {
              default: () => 'Изменить',
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
  <div class="table-departments">
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
