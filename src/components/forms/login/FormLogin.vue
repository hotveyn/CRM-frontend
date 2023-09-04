<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui';
import { ref } from 'vue';
import { useFormLogin } from 'components/forms/login/FormLogin.formconf.ts';
import { useAuthStore } from '@/store/auth.store.ts';
import { useRouter } from 'vue-router';

const loginFormRef = ref<FormInst | null>();
const router = useRouter();
const authStore = useAuthStore();
const { formValues, rules } = useFormLogin();

async function goLogin() {
  loginFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    if (await authStore.login(formValues)) {
      await router.push({ name: 'home' });
    }
  });
}
</script>

<template>
  <NForm ref="loginFormRef" :model="formValues" :rules="rules" class="login-form">
    <NFormItem label="Email" path="login">
      <NInput v-model:value="formValues.login" placeholder="username" />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput v-model:value="formValues.password" type="password" placeholder="******" show-password-on="click" />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goLogin"> Войти </NButton>
  </NForm>
</template>

<style scoped>
.login-form__button {
  width: 100%;
}
</style>
