<script setup lang="ts">
import { NDataTable, DataTableColumns, NButton, NTag } from 'naive-ui';
import { h } from 'vue';
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { FilterOption } from 'naive-ui/lib/data-table/src/interface';

const props = defineProps<{
  tableData: ITableUser[];
  filters: FilterOption[];
}>();

const emit = defineEmits<{
  fire: [id: number];
  change: [id: number];
}>();

const columns = createColumns({
  fire: (id: number) => {
    emit('fire', id);
  },
  change: (id: number) => {
    emit('change', id);
  },
});
function createColumns(actions: { fire: (id: number) => void; change: (id: number) => void }): DataTableColumns<ITableUser> {
  return [
    {
      title: 'Номер',
      key: 'code',
      sorter: 'default' as const,
    },
    {
      title: 'ФИО',
      key: 'name',
      sorter: 'default' as const,
    },
    {
      title: 'Роль',
      key: 'role',
      sorter: 'default' as const,
    },
    {
      title: 'Отделы',
      key: 'departments',
      render(row) {
        return row.departments.map((department) => {
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
              default: () => department,
            }
          );
        });
      },
      filterOptions: props.filters,
      filter(value, row) {
        return row.departments.indexOf(value as string) !== -1;
      },
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
              onClick: () => actions.fire(row.id),
            },
            {
              default: () => 'Уволить',
            }
          ),
        ];
      },
    },
  ];
}
</script>

<template>
  <div class="table-user">
    <NDataTable
      :data="tableData"
      :single-line="false"
      :columns="columns"
      :pagination="{
        pageSize: 30,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
