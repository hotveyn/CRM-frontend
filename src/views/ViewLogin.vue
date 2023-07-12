<script setup lang="ts">
import {computed, onMounted, reactive, ref} from "vue";
import {supabase} from "@/lib/supabase.client.ts";
import {FormInst, NButton, NForm, NFormItem, NInput, useMessage} from 'naive-ui'
import {useRouter} from "vue-router";

const loginFormRef = ref<FormInst | null>()
const rules = {
  login: {
    required: true,
    message: "Введите свой email"
  },
  password: {
    required: true,
    message: "Введите свой пароль"
  },
}
const message = useMessage()
const router = useRouter()
const formValues = ref({
  login: '',
  password: ''
})

async function goLogin() {
  loginFormRef.value?.validate(async (errors) => {
    if (!errors) {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: formValues.value.login,
        password: formValues.value.password,
      })
      if (error) {
        message.error("Ошибка авторизации", {duration: 5000})
        return
      }
      message.success("Вы успешно авторизованны", {duration: 5000})
      await router.push('/')
    }
  })

}
</script>

<template>
<section class="login">
  <div class="login__content">
  <h1 class="login__title">Войдите в свой аккаунт</h1>
  <NForm
      ref="loginFormRef"
      :model="formValues"
      :rules="rules"
      class="login__form"
  >
    <NFormItem label="Email" path="login">
      <NInput
          v-model:value="formValues.login"
      />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput
          v-model:value="formValues.password"
          type="password"
          show-password-on="click"
      />
    </NFormItem>
          <NButton class="login__button" type="primary" @click.prevent="goLogin">
            Войти
          </NButton>
  </NForm>
  </div>
</section>
</template>

<style scoped lang="scss">
.login {
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
  align-items: center;
  justify-content: center;

  &__login {
    font-size: 40px;
  }

  &__content {
    margin-top: 20px;
    width: 100%;
    background-color: white;
    border: 2px solid $primary;
    border-radius: 5px;
    padding: 20px;
    max-width: 400px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  &__button{
    width: 100%;
  }

}
</style>
