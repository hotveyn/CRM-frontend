<script setup lang="ts">
import FormOrderCreate from 'components/forms/order/create/FormOrderCreate.vue';
import { NDivider } from 'naive-ui';
</script>

<template>
  <div class="manager-orders-create">
    <NDivider title-placement="center"> Добавить новый заказ </NDivider>
    <FormOrderCreate />
  </div>
</template>

<style scoped lang="scss">
.manager-orders-create {
  display: grid;
  gap: 20px;
  width: 600px;
  margin: 0 auto;
}
</style>
