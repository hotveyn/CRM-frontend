<script setup lang="ts">
import { ref } from 'vue';
import { FormInst, NForm, NFormItem, NButton, NSelect } from 'naive-ui';
import { useOrderToBreakFormConf } from 'components/forms/order/to-break/orderToBreak.formconf.ts';
import { useOrderService } from '@/services/order.service.ts';

const orderService = useOrderService();
const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const orderToBreakFormRef = ref<FormInst | null>();

const { stagesOptions, breakOptions, rules, formValues } = useOrderToBreakFormConf(props.id);

function goBreak() {
  orderToBreakFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await orderService.markOrderAsBreak(props.id, {
      stageId: formValues.stageId as number,
      breakId: formValues.breakId as number
    });
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderToBreakFormRef" :rules="rules" :model="formValues">
    {{ formValues.stageId }}
    {{ formValues.breakId }}
    <NFormItem label="Стадия заказа" path="stageId">
      <NSelect v-model:value="formValues.stageId" remote :options="stagesOptions" />
    </NFormItem>
    <NFormItem label="Брак" path="breakId">
      <NSelect v-model:value="formValues.breakId" remote :options="breakOptions" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goBreak()"> Изменить </NButton>
  </NForm>
</template>

<style scoped lang="scss">
.dynamic-input {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 1.5fr;
  gap: 20px;
  //display: flex;
}
</style>
