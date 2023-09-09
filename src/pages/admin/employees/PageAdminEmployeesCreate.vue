<script setup lang="ts">
import FormReg from 'components/forms/reg/FormReg.vue';
import { NDivider } from 'naive-ui';
</script>

<template>
  <div class="users-create">
    <NDivider>Добавить нового сотрудника</NDivider>
    <FormReg />
  </div>
</template>

<style scoped lang="scss">
.users-create {
  display: grid;
  width: 600px;
  margin: 0 auto;
}
</style>
