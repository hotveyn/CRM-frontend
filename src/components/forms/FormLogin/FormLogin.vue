<script setup lang="ts">
import {FormInst, NButton, NForm, NFormItem, NInput} from "naive-ui";
import {useAuthService} from "@/services/auth.service.ts";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useFormLogin} from "components/forms/FormLogin/FormLogin.formconf.ts";
import {useMessageService} from "@/services/message.service.ts";

const loginFormRef = ref<FormInst | null>()
const router = useRouter();

const {login} = useAuthService();
const message = useMessageService();
const {formValues, rules} = useFormLogin();

async function goLogin() {
  loginFormRef.value?.validate(async (errors) => {
    if (errors) {
      message.errors().formValidation()
      return
    }
    const {success} = await login(formValues)

    if (success) {
      message.success().login()
      await router.push('/')
      return
    }

    message.errors().login()
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
    <NFormItem label="Email" path="email">
      <NInput
          v-model:value="formValues.email"
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
