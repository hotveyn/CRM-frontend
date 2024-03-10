<script setup lang="ts">
import { FormInst, NButton, NDatePicker, NFormItem, NForm, NSelect } from 'naive-ui';
import { useOrderPrefabCreateFormConf } from 'components/forms/order/prefab-create/orderPrefabCreate.formconf.ts';
import { ref } from 'vue';
import { useOrdersNewStore } from '@/store/orders/orders-new.store.ts';

const orderNewStore = useOrdersNewStore();
const { rules, formValues, options } = useOrderPrefabCreateFormConf();

const orderPrefabCreateFormRef = ref<FormInst | null>();

function goCreate() {
  orderPrefabCreateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await orderNewStore.createByPrefab(formValues);
  });
}
</script>

<template>
  <NForm ref="orderPrefabCreateFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Шаблон" path="prefab_id">
      <NSelect v-model:value="formValues.prefab_id" remote :options="options" />
    </NFormItem>
    <NFormItem label="Дата начала" path="date_start">
      <NDatePicker value-format="yyyy-MM-dd" v-model:formatted-value="formValues.date_start" style="width: 100%" placeholder="" type="date" />
    </NFormItem>
    <NFormItem label="Дата сдачи" path="date_end">
      <NDatePicker value-format="yyyy-MM-dd" v-model:formatted-value="formValues.date_end" style="width: 100%" placeholder="" type="date" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goCreate()"> Создать</NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
