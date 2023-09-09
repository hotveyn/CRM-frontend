<script setup lang="ts">
import TableDepartments from 'components/tables/departments/TableDepartments.vue';
import { onMounted, reactive, ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { useDialogService } from '@/services/dialog.service.ts';
import { NCard, NModal, NSkeleton, NDivider } from 'naive-ui';
import FormDepartmentUpdate from 'components/forms/department/update/FormDepartmentUpdate.vue';

const dialogService = useDialogService();
const departmentsStore = useDepartmentsStore();

const departmentChangeModal = reactive({
  isShow: false,
  id: NaN,
});

const isLoading = ref<boolean>(true);

onMounted(async () => {
  await departmentsStore.request();
  isLoading.value = false;
});

function change(id: number) {
  departmentChangeModal.isShow = true;
  departmentChangeModal.id = id;
}
function changed() {
  departmentChangeModal.isShow = false;
}
function remove(id: number) {
  dialogService.confirm(() => {
    departmentsStore.remove(id);
  });
}
</script>

<template>
  <div class="admin-departments-all">
    <NDivider title-placement="left">Все отделы</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableDepartments v-else :table-data="departmentsStore.departments" @change="change" @remove="remove" />
    <NModal v-model:show="departmentChangeModal.isShow">
      <NCard style="width: 600px">
        <FormDepartmentUpdate :id="departmentChangeModal.id" @changed="changed()" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
