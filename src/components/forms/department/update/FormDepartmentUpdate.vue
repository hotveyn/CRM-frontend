<script setup lang="ts">
import { useDepartmentUpdateFormConf } from 'components/forms/department/update/DepartmentUpdate.formconf.ts';
import { FormInst, NButton, NFormItem, NForm, NInput } from 'naive-ui';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';

const props = defineProps<{
  id: number;
}>();

defineEmits<{
  changed: [];
}>();

const departmentUpdateRef = ref<FormInst | null>();
const departmentStore = useDepartmentsStore();
const { rules, formValues } = useDepartmentUpdateFormConf(props.id);

function goChange() {
  departmentUpdateRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await departmentStore.update(props.id, formValues);
  });
}
</script>

<template>
  <NForm ref="departmentUpdateRef" :model="formValues" :rules="rules" class="department-update-form">
    <NFormItem label="Название отдела" path="name">
      <NInput v-model:value="formValues.name" placeholder="Пайка" />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goChange"> Сохранить </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
