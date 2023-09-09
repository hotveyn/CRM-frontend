<script setup lang="ts">
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { h } from 'vue';
import { FilterOption } from 'naive-ui/lib/data-table/src/interface';
import { NDataTable, DataTableColumns, NButton, NTag } from 'naive-ui';

const props = defineProps<{
  tableData: ITableUser[];
  filters: FilterOption[];
}>();

const emit = defineEmits<{
  unfire: [id: number];
}>();

const columns = createColumns({
  unfire: (id: number) => {
    emit('unfire', id);
  },
});

function createColumns(actions: { unfire: (id: number) => void }): DataTableColumns<ITableUser> {
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
        return h(
          NButton,
          {
            type: 'warning',
            size: 'small',
            style: {
              marginRight: '6px',
            },
            onClick: () => actions.unfire(row.id),
          },
          {
            default: () => 'Нанять обратно',
          }
        );
      },
    },
  ];
}
</script>

<template>
  <div class="table-fired">
    <NDataTable
      :single-line="false"
      :data="tableData"
      :columns="columns"
      :pagination="{
        pageSize: 10,
      }"
      :bordered="true"
    />
  </div>
</template>

<style scoped lang="scss"></style>
