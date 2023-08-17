<script setup lang="ts">
import { DataTableColumns, NButton, NTag } from 'naive-ui';
import { h, onMounted, ref } from 'vue';
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { FilterOption } from 'naive-ui/lib/data-table/src/interface';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

defineProps<{
  usersTable: ITableUser[];
  loading: boolean;
}>();

const emit = defineEmits<{
  fire: [id: number];
  change: [id: number];
}>();

const departmentsFilterOptions = ref<FilterOption[] | undefined>([]);
const columns = ref<DataTableColumns<ITableUser>>();

onMounted(async () => {
  const departmentsStore = useDepartmentsStore();
  const departments = await departmentsStore.getOrRequest();
  departmentsFilterOptions.value = departments.map((department: IDepartment) => {
    return {
      label: department.name,
      value: department.name,
    };
  });
  columns.value = createColumns({
    fire: (id: number) => {
      emit('fire', id);
    },
    change: (id: number) => {
      emit('change', id);
    },
  });
});

function createColumns(actions: { fire: (id: number) => void; change: (id: number) => void }): DataTableColumns<ITableUser> {
  return [
    {
      title: 'ID',
      key: 'id',
      sorter: 'default',
    },
    {
      title: 'Номер',
      key: 'code',
      sorter: 'default',
    },
    {
      title: 'ФИО',
      key: 'name',
      sorter: 'default',
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
      filterOptions: departmentsFilterOptions.value,
      filter(value, row) {
        return row.departments.indexOf(value as string) !== -1;
      },
    },
    {
      title: 'Действия',
      key: 'actios',
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
    <NDataTable :single-line="false" :loading="loading" :data="usersTable" :columns="columns" :pagination="true" :bordered="true" />
  </div>
</template>

<style scoped lang="scss"></style>
