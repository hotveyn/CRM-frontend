<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { useBreakCreateFormConf } from 'components/forms/break/create/BreakCreate.formconf.ts';
import { ref } from 'vue';
import { useBreaksStore } from '@/store/breaks.store.ts';

const breakCreateFormRef = ref<FormInst | null>();
const breaksStore = useBreaksStore();
const { rules, formValues, options } = useBreakCreateFormConf();

async function goCreate() {
  breakCreateFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await breaksStore.create(formValues);
  });
}
</script>

<template>
  <NForm ref="breakCreateFormRef" :rules="rules" :model="formValues" class="break-create-form">
    <NFormItem label="Название брака" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Ответственный отдел" path="department_id">
      <NSelect v-model:value="formValues.department_id" placeholder="" :options="options" remote />
    </NFormItem>
    <NButton type="primary" @click.prevent="goCreate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
