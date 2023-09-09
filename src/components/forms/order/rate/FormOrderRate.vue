<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NRate } from 'naive-ui';
import { useOrderRateFormConf } from 'components/forms/order/rate/orderRate.formconf.ts';
import { ref } from 'vue';
import { useOrdersCompletedStore } from '@/store/orders/orders-completed.store.ts';

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const { rules, formValues } = useOrderRateFormConf(props.id);
const ordersCompletedStore = useOrdersCompletedStore();
const orderRateFormRef = ref<FormInst | null>();

function goRate() {
  orderRateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await ordersCompletedStore.setRating(props.id, formValues.rating * 2);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderRateFormRef" :rules="rules" :model="formValues">
    <NFormItem path="rating" label="Оценка">
      <NRate v-model:value="formValues.rating" size="large" allow-half />
    </NFormItem>
    <NButton type="primary" @click.prevent="goRate()">Оценить</NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
