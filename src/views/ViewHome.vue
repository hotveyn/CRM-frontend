<script setup lang="ts">
import {supabase} from "@/lib/supabase.client.ts";
import {useMessage} from 'naive-ui'
import {useRouter} from "vue-router";

const message = useMessage();
const router = useRouter();
async function logout(){
  const { error } = await supabase.auth.signOut()
  if(error){
    message.error('Произошла ошибка')
    return
  }

  message.success('Вы вышли из аккаунта')
  await router.push('/login')
}
</script>

<template>
  <NButton @click="logout()" type="error">Выйти</NButton>
</template>

<style scoped lang="scss">
.asd {
  font-size: adpval(20, 50);
}
</style>
