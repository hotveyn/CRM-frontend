<script setup lang="ts">
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { h, onMounted, ref } from 'vue';
import { FilterOption } from 'naive-ui/lib/data-table/src/interface';
import { DataTableColumns, NButton, NTag } from 'naive-ui';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

defineProps<{
  firedTable: ITableUser[];
  loading: boolean;
}>();

const emit = defineEmits<{
  unfire: [id: number];
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
    unfire: (id: number) => {
      emit('unfire', id);
    },
  });
});

function createColumns(actions: { unfire: (id: number) => void }): DataTableColumns<ITableUser> {
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
    <NDataTable :single-line="false" :loading="loading" :data="firedTable" :columns="columns" :pagination="true" :bordered="true" />
  </div>
</template>

<style scoped lang="scss"></style>
