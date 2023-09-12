<script setup lang="ts">
import { useOrderCreateFormConf } from 'components/forms/order/create/orderCreate.formconf.ts';
import { ref } from 'vue';
import { FormInst, NButton, NDatePicker, NFormItem, NForm, NInput, NInputNumber, NSelect, NSwitch } from 'naive-ui';
import { useOrdersNewStore } from '@/store/orders/orders-new.store.ts';

const emit = defineEmits<{
  done: [];
}>();

const orderNewStore = useOrdersNewStore();
const { rules, formValues, options, isReclamation } = useOrderCreateFormConf();

const orderCreateFormRef = ref<FormInst | null>();

function goCreate() {
  orderCreateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await orderNewStore.create(formValues);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderCreateFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Название заказа" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Длина неона" path="neon_length">
      <NInputNumber :min="1" v-model:value="formValues.neon_length" placeholder="" :precision="2"/>
    </NFormItem>
    <NFormItem label="Дата начала" path="date_start">
      <NDatePicker value-format="yyyy-MM-dd" v-model:formatted-value="formValues.date_start" style="width: 100%" placeholder="" type="date" />
    </NFormItem>
    <NFormItem label="Дата сдачи" path="date_end">
      <NDatePicker value-format="yyyy-MM-dd" v-model:formatted-value="formValues.date_end" style="width: 100%" placeholder="" type="date" />
    </NFormItem>
    <NFormItem label="Тип вывески" path="type">
      <NSelect v-model:value="formValues.type" remote :options="options" />
    </NFormItem>
    <NFormItem label="Ваш комментарий к заказу">
      <NInput v-model:value="formValues.comment" type="textarea" placeholder="" />
    </NFormItem>
    <NFormItem label="Гарантийный заказ?">
      <NSwitch v-model:value="isReclamation" />
    </NFormItem>
    <NFormItem v-show="isReclamation" label="Номер гарантийного талона" path="departments">
      <NInput v-model:value="formValues.reclamation_number" placeholder="" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goCreate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
