<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { useAuthStore } from '@/store/auth.store.ts';
import { NButton } from 'naive-ui';

const dialog = useDialogService();
const authStore = useAuthStore();

function logout() {
  dialog.confirm(async () => {
    await authStore.logout();
  });
}
</script>

<template>
  <header class="header">
    <h1>NeonBro</h1>
    <NButton v-if="authStore.isAuthenticated" type="error" ghost @click="logout" size="small">Выйти</NButton>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 30px;
  height: 100%;
  border-bottom: 2px solid $primary;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (width < 700px) {
  .header {
    padding: 15px 10px;
  }
}
</style>
