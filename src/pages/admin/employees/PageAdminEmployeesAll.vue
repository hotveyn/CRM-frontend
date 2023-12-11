<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { NModal, NCard, NSkeleton, NDivider } from 'naive-ui';
import TableUser from 'components/tables/user/TableUser.vue';
import { useDialogService } from '@/services/dialog.service.ts';
import { useUsersStore } from '@/store/users.store.ts';
import FormUserUpdate from 'components/forms/userUpdate/FormUserUpdate.vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

const { confirm } = useDialogService();
const departmentsStore = useDepartmentsStore();
const usersStore = useUsersStore();

const userChangeModal = reactive({
  isShow: false,
  id: NaN,
});
const isLoading = ref(true);

const usersTableData = computed(() => {
  return usersStore.users.map((user) => {
    const departments: string[] = [];
    if (user.departments) {
      user.departments.forEach((i) => {
        departments.push(i.name);
      });
    }
    return {
      id: user.id,
      name: [user.last_name, user.first_name, user.patronymic_name].join(' '),
      role: translateRole(user.role),
      code: user.code,
      departments: departments,
    };
  });
});
function translateRole(role: string) {
  switch (role){
    case "manager":
      return "Менеджер"
    case "employee":
      return "Работник"
    case "storage":
      return "Кладовщик"
    case "admin":
      return "Админ"
  }
}
const departmentsFilterOptions = computed(() => {
  return departmentsStore.departments.map((department: IDepartment) => {
    return {
      label: department.name,
      value: department.name,
    };
  });
});

function fire(userId: number) {
  confirm(async () => {
    await usersStore.fire(userId);
  });
}

function change(userId: number) {
  userChangeModal.id = userId;
  userChangeModal.isShow = true;
}
function changed() {
  userChangeModal.isShow = false;
}

onMounted(async () => {
  await usersStore.request();
  await departmentsStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-users-all">
    <NDivider title-placement="left">Действующие сотрудники</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableUser v-else pagination-behavior-on-filter="first" @fire="fire" @change="change" :table-data="usersTableData" :filters="departmentsFilterOptions" />
    <NModal v-model:show="userChangeModal.isShow">
      <NCard style="width: 600px">
        <FormUserUpdate :user-id="userChangeModal.id" @changed="changed()" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
