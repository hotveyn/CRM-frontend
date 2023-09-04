<script setup lang="ts">
import FormLogin from 'components/forms/login/FormLogin.vue';
</script>

<template>
  <section class="login">
    <div class="login__content">
      <h1 class="login__title">Войдите в свой аккаунт</h1>
      <FormLogin class="login__form" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.login {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 28px;
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
}
</style>
