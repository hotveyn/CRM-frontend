<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui';
import { ref } from 'vue';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';
import { useOrderTypeUpdateFormConf } from 'components/forms/order-type/update/orderTypeUpdate.formconf.ts';
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';

const props = defineProps<{
  orderType: IOrderType;
}>();

const emits = defineEmits<{
  changed: [];
}>();

const orderTypeFormRef = ref<FormInst | null>();
const orderTypesStore = useOrderTypesStore();
const { rules, formValues } = useOrderTypeUpdateFormConf(props.orderType.name);

async function goUpdate() {
  orderTypeFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await orderTypesStore.update(props.orderType.id, formValues);
    emits('changed');
  });
}
</script>

<template>
  <NForm ref="orderTypeFormRef" :rules="rules" :model="formValues" class="order-type-create-form">
    <NFormItem label="Название типа вывески" path="name">
      <NInput v-model:value="formValues.name" placeholder="НЕОН" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goUpdate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
