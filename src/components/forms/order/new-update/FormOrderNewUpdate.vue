<script setup lang="ts">
import { useOrderNewUpdateFormConf } from 'components/forms/order/new-update/orderNewUpdate.formconf.ts';
import { ref } from 'vue';
import { FormInst, NForm, NInput, NFormItem, NInputNumber, NButton, NSelect } from 'naive-ui';
import { useOrdersNewStore } from '@/store/orders/ordersNew.store.ts';

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const orderNewStore = useOrdersNewStore();

const orderUpdateFormRef = ref<FormInst | null>();

const { options, rules, formValues } = useOrderNewUpdateFormConf(props.id);

function goUpdate() {
  orderUpdateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await orderNewStore.update(props.id, formValues);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderUpdateFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Название заказа" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Длина неона" path="neon_length">
      <NInputNumber v-model:value="formValues.neon_length" placeholder="" />
    </NFormItem>
    <NFormItem label="Тип вывески" path="type">
      <NSelect v-model:value="formValues.type" remote :options="options" />
    </NFormItem>
    <NFormItem label="Ваш комментарий к заказу">
      <NInput v-model:value="formValues.comment" type="textarea" placeholder="" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goUpdate()"> Изменить </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
