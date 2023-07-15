<script setup lang="ts">
import {useAuthService} from "@/services/auth.service.ts";
import {useRouter} from "vue-router";

let {logout} = useAuthService();
const router = useRouter()

async function goLogout() {
  if (await logout()) {
    await router.push('/login')
  }
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
