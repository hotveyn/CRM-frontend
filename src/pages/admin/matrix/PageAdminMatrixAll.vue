<script setup lang="ts">
import TableMatrix from 'components/tables/matrix/TableMatrix.vue';
import { useMatrixStore } from '@/store/matrix.store.ts';
import { onMounted, ref, h } from 'vue';
import { DataTableColumns, NSkeleton, NDivider, NInputNumber, NButton } from 'naive-ui';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { ITableMatrix } from '@/interfaces/table/ITableMatrix.ts';
import { IMatrix } from '@/interfaces/matrix/IMatrix.ts';

const matrixStore = useMatrixStore();
const departmentsStore = useDepartmentsStore();

const tableData = ref<ITableMatrix[]>([]);
const isLoading = ref(true);

const departmentsColumns = ref<DataTableColumns<ITableMatrix>>([]);

async function save() {
  await matrixStore.update(tableData.value);
}

onMounted(async () => {
  await matrixStore.requestSerialized();
  await departmentsStore.request();
  tableData.value = matrixStore.getCopy();
  departmentsColumns.value = departmentsStore.departments.map((department) => {
    return {
      title: department.name,
      key: `${department.id}.percent`,
      sorter: 'default' as const,
      render(row, index) {
        return h(NInputNumber, {
          value: (row[department.id] as IMatrix).percent,
          min: 0,
          precision: 2,
          max: 100.00,
          onUpdateValue(v) {
            if (v) {
              (tableData.value[index][department.id] as IMatrix).percent = v;
            }
          },
        });
      },
    };

  });

  isLoading.value = false;
});

</script>

<template>
  <div class="admin-matrix-all">
    <NDivider title-placement="left">Матрица оплаты</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <template v-else>
      <TableMatrix :table-data="tableData" :department-columns="departmentsColumns" />
      <NButton class="admin-matrix-all__save-button" :disabled="!tableData.length" type="primary"
               @click.prevent="save()"> Сохранить
      </NButton>
    </template>
  </div>
</template>

<style scoped lang="scss">
.admin-matrix-all {
  &__save-button {
    margin-top: 20px;
  }
}
</style>