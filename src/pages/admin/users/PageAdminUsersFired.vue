<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { IUser } from '@/interfaces/user/IUser.ts';
import TableFired from 'components/tables/TableFired.vue';
import { useMessageService } from '@/services/message.service.ts';
import { useDialogService } from '@/services/dialog.service.ts';
import { ITableUser } from '@/interfaces/table/ITableUser.ts';
import { useFiredUsersStore } from '@/store/firedUsers.store.ts';

const messageService = useMessageService();
const { confirm } = useDialogService();
const firedUsersStore = useFiredUsersStore();

const firedUsers = ref<IUser[]>([]);
const loading = ref(true);

const firedTable = computed(() => {
  const data: ITableUser[] = [];

  firedUsers.value.forEach((user) => {
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
  firedUsers.value = await firedUsersStore.getOrRequest();
  loading.value = false;
});

function unfire(userId: number) {
  confirm(async () => {
    await firedUsersStore.unfire(userId);
    firedUsers.value = await firedUsersStore.getOrRequest();
    messageService.success().unfire();
  });
}
</script>

<template>
  <div class="admin-users-fired">
    <h1>Уволенные сотрудники</h1>
    <TableFired :fired-table="firedTable" :loading="loading" @unfire="unfire" />
  </div>
</template>

<style scoped lang="scss"></style>
