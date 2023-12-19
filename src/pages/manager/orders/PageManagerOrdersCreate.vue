<script setup lang="ts">
import FormOrderCreate from 'components/forms/order/create/FormOrderCreate.vue';
import { NDivider, NTabPane, NTabs } from 'naive-ui';
import FormOrderPrefabCreate from 'components/forms/order/prefab-create/FormOrderPrefabCreate.vue';

</script>

<template>
  <div class="manager-orders-create">
    <NDivider title-placement="center"> Добавить заказ</NDivider>
    <NTabs type="card" animated>
      <NTabPane  placement="left" size="small" name="new" tab="Новый">
        <FormOrderCreate />
      </NTabPane>
      <NTabPane  placement="left" size="small" name="prefab" tab="Из шаблона">
        <FormOrderPrefabCreate />
      </NTabPane>
    </NTabs>
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
