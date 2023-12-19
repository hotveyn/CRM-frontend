<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { useAuthStore } from '@/store/auth.store.ts';
import { NButton } from 'naive-ui';
import { computed, onMounted } from 'vue';

const dialog = useDialogService();
const authStore = useAuthStore();

const headerText = computed(() => {
  if (authStore.profile) {
    const { first_name, last_name, patronymic_name } = authStore.profile;
    return `${last_name} ${first_name} ${patronymic_name}`;
  }
  return 'NeonBro';
});

function logout() {
  dialog.confirm(async () => {
    await authStore.logout();
  });
}

onMounted(async ()=>{
  await authStore.getProfile();
})
</script>

<template>
  <header class="header">
    <h1 style="transition: all .2s;">{{ headerText }}</h1>
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
