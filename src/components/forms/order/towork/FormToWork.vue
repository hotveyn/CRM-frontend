<script setup lang="ts">
import { useToWorkFormConf } from 'components/forms/order/towork/toWork.formconf.ts';
import { FormInst, NFormItem, NButton, NForm, NSelect } from 'naive-ui';
import { ref } from 'vue';
import { useOrdersNewStore } from '@/store/orders/ordersNew.store.ts';

const ordersNewStore = useOrdersNewStore();
const { rules, options, formValues } = useToWorkFormConf();

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const toWorkFormRef = ref<FormInst | null>();

function goToWork() {
  toWorkFormRef.value?.validate(async (errors) => {
    if (errors) return;

    await ordersNewStore.toWork(props.id, formValues.departments!);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="toWorkFormRef" :model="formValues" :rules="rules">
    <NFormItem label="Отделы в порядке их работы" path="departments">
      <NSelect v-model:value="formValues.departments" placeholder="Порядок важен!" multiple remote :options="options" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goToWork">Отправить в работу</NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
