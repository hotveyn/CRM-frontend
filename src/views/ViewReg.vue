<script setup lang="ts">
import FormReg from "components/forms/FormReg/FormReg.vue";
</script>

<template>
<section class="reg">
  <div class="reg__content">
  <h1 class="reg__title">Зарагестрируй</h1>
    <FormReg class="reg__form"/>
  </div>
</section>
</template>

<style scoped lang="scss">
.куп {
  min-height: 100dvh;
  min-width: 100dvw;
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

