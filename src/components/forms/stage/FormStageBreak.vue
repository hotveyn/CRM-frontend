<script setup lang="ts">
import { FormInst, NForm, NFormItem, NSelect, NButton } from 'naive-ui';
import { useStageBreakFormConf } from 'components/forms/stage/stageBreak.formconf.ts';
import { ref } from 'vue';
import { useStageWorkStore } from '@/store/stages/stages-work.store.ts';

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const stagesWorkStore = useStageWorkStore();
const { rules, options, formValues } = useStageBreakFormConf(props.id);
const stageBreakFormRef = ref<FormInst | null>();

function goBreak() {
  stageBreakFormRef.value?.validate(async (errors) => {
    if (errors) return;

    const values = formValues.break_name.split(' ');
    formValues.break_id = +values[0];
    formValues.department_id = +values[1];
    await stagesWorkStore.toBreak(props.id, formValues);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="stageBreakFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Выберите брак" path="break_name">
      <NSelect :options="options" v-model:value="formValues.break_name" placeholder="" />
    </NFormItem>
    <NButton type="error" @click="goBreak">Отбраковать</NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
