<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';
import TableUser from 'components/tables/TableUser.vue';
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { useDialogService } from '@/services/dialog.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { useUsersStore } from '@/store/users.store.ts';

const messageService = useMessageService();
const { confirm } = useDialogService();
const userStore = useUsersStore();

const users = ref<IUser[]>([]);
const loading = ref(true);

const usersTable = computed(() => {
  const data: ITableUser[] = [];

  users.value.forEach((user) => {
    const departments: string[] = [];
    if (user.departments) {
      user.departments.forEach((i) => {
        departments.push(i.name);
      });
    }
    data.push({
      id: user.id,
      name: [user.last_name, user.first_name, user.patronymic_name].join(' '),
      code: user.code,
      departments: departments,
    });
  });

  return data;
});

onMounted(async () => {
  users.value = await userStore.getOrRequest();
  loading.value = false;
});

function fire(userId: number) {
  confirm(async () => {
    await userStore.fire(userId).then(() => {});
    users.value = await userStore.getOrRequest();
    messageService.success().fire();
  });
}

function change(userId: number) {
  console.log(userId);
}
</script>

<template>
  <div class="admin-users-all">
    <h1>Действующие сотрудники</h1>
    <TableUser pagination-behavior-on-filter="first" @fire="fire" @change="change" :loading="loading" :users-table="usersTable" />
  </div>
</template>

<style scoped lang="scss"></style>
