<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { useBreakUpdateFormConf } from 'components/forms/break/update/BreakUpdate.formconf.ts';
import { ref } from 'vue';
import { useBreaksStore } from '@/store/breaks.store.ts';

const props = defineProps<{
  id: number;
}>();

const emits = defineEmits<{
  changed: [];
}>();

const breaksStore = useBreaksStore();
const breakCreateFormRef = ref<FormInst | null>();
const { rules, options, formValues } = useBreakUpdateFormConf(props.id);

function goUpdate() {
  breakCreateFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await breaksStore.update(props.id, formValues);
    emits('changed');
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
    <NButton type="primary" @click.prevent="goUpdate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
