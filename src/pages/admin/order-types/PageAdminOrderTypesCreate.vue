<script setup lang="ts">
import { NDivider } from 'naive-ui';
import FormOrderTypeCreate from 'components/forms/order-type/create/FormOrderTypeCreate.vue';

</script>

<template>
  <div class="admin-order-type-create">
    <NDivider>Добавить новый тип вывески</NDivider>
    <FormOrderTypeCreate />
  </div>
</template>

<style scoped lang="scss">
.admin-order-type-create {
  display: grid;
  width: 600px;
  margin: 0 auto;
}
</style>