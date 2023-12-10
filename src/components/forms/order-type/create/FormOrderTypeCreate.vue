<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput } from 'naive-ui';

import { ref } from 'vue';
import { useOrderTypeCreateFormConf } from 'components/forms/order-type/create/orderTypeCreate.formconf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

const orderTypeFormRef = ref<FormInst | null>();
const orderTypesStore = useOrderTypesStore();
const {rules, formValues} = useOrderTypeCreateFormConf();

async function goCreate() {
  orderTypeFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await orderTypesStore.create(formValues)
  });
}
</script>

<template>
 <NForm ref="orderTypeFormRef" :rules="rules" :model="formValues" class="order-type-create-form">
    <NFormItem label="Название типа вывески" path="name">
      <NInput v-model:value="formValues.name" placeholder="НЕОН"/>
    </NFormItem>
    <NButton type="primary" @click.prevent="goCreate()"> Создать </NButton>
 </NForm>
</template>

<style scoped lang="scss">

</style>