<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui';
import { useAuthService } from '@/services/auth.service.ts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFormLogin } from 'components/forms/FormLogin/FormLogin.formconf.ts';
import { useMessageService } from '@/services/message.service.ts';
import { useAuthStore } from '@/store/auth.store.ts';

const loginFormRef = ref<FormInst | null>();
const router = useRouter();

const { login } = useAuthService();
const message = useMessageService();
const userStore = useAuthStore();
const { formValues, rules } = useFormLogin();

async function goLogin() {
  loginFormRef.value?.validate(async (errors) => {
    if (errors) {
      message.errors().formValidation();
      return;
    }

    login(formValues)
      .then((res) => {
        userStore.setToken(res.data.token);
        message.success().login();
        router.push('/');
      })
      .catch((e) => {
        message.errors().custom(e.response.data.message);
      });
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
