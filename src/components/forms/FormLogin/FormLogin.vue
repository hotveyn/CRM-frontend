<script setup lang="ts">
import {FormInst, NButton, NForm, NFormItem, NInput} from "naive-ui";
import {useAuthService} from "@/services/auth.service.ts";
import { ref} from "vue";
import {useRouter} from "vue-router";
import {useFormLogin} from "components/forms/FormLogin/FormLogin.formconf.ts";

const loginFormRef = ref<FormInst | null>()
const router = useRouter();
//TODO: перенести конф

const {login} = useAuthService();

const {formValues, rules} = useFormLogin();

async function goLogin() {
  loginFormRef.value?.validate(async (errors) => {
    if (!errors && await login(formValues)) {
      await router.push('/')
    }
  })
}
</script>

<template>
  <NForm
      ref="loginFormRef"
      :model="formValues"
      :rules="rules"
      class="login-form"
  >
    <NFormItem label="Email" path="login">
      <NInput
          v-model:value="formValues.login"
          placeholder=""
      />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput
          v-model:value="formValues.password"
          type="password"
          placeholder=""
          show-password-on="click"
      />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goLogin">
      Войти
    </NButton>
  </NForm>
</template>

<style scoped>
.login-form__button {
  width: 100%;
}
</style>
