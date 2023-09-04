<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import TableFired from 'components/tables/fired/TableFired.vue';
import { useDialogService } from '@/services/dialog.service.ts';
import { useFiredUsersStore } from '@/store/firedUsers.store.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { NSkeleton } from 'naive-ui';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

const { confirm } = useDialogService();
const departmentsStore = useDepartmentsStore();
const firedUsersStore = useFiredUsersStore();

const isLoading = ref(true);

const firedTableData = computed(() => {
  return firedUsersStore.users.map((user) => {
    const departments: string[] = [];
    if (user.departments) {
      user.departments.forEach((i) => {
        departments.push(i.name);
      });
    }
    return {
      id: user.id,
      name: [user.last_name, user.first_name, user.patronymic_name].join(' '),
      code: user.code,
      departments: departments,
    };
  });
});
const departmentsFilterOptions = computed(() => {
  return departmentsStore.departments.map((department: IDepartment) => {
    return {
      label: department.name,
      value: department.name,
    };
  });
});

function unfire(userId: number) {
  confirm(async () => {
    await firedUsersStore.unfire(userId);
  });
}

onMounted(async () => {
  await firedUsersStore.request();
  await departmentsStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-users-fired">
    <h1>Уволенные сотрудники</h1>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableFired v-else :table-data="firedTableData" @unfire="unfire" :filters="departmentsFilterOptions" />
  </div>
</template>

<style scoped lang="scss"></style>
