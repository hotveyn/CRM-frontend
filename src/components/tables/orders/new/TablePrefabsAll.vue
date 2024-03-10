<script setup lang="ts">
import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { DataTableColumns, NButton, NDataTable } from 'naive-ui';
import { h } from 'vue';

defineProps<{
  tableData: IPrefab[];
}>();

const emit = defineEmits<{
  change: [prefab: IPrefab];
  remove: [id: number];
}>();

const columns = createColumns({
  change: (prefab: IPrefab) => emit('change', prefab),
  remove: (id: number) => emit('remove', id),
});

function createColumns(actions: { change: (prefab: IPrefab) => void; remove: (id: number) => void }): DataTableColumns<IPrefab> {
  return [
    {
      title: 'Название',
      key: 'name',
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
      render(row: IPrefab) {
        return [
          h(
            NButton,
            {
              type: 'default',
              size: 'small',
              style: {
                marginRight: '6px',
                width: '100%',
                maxWidth: '100px',
              },
              onClick: () => actions.change(row),
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
                marginTop: '6px',
                width: '100%',
                maxWidth: '100px',
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
  <div class="table-prefabs-all">
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
