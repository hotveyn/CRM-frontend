<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthService } from '@/services/auth.service.ts';
import { NButton } from 'naive-ui';

const router = useRouter();

const { logout } = useAuthService();

async function goLogout() {
  logout();
  await router.push('/login');
}
</script>

<template>
  <NButton @click="goLogout()" type="error">Выйти</NButton>
</template>

<style scoped lang="scss">
.asd {
  font-size: adpval(20, 50);
}
</style>
