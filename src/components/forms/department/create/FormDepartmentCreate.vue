<script setup lang="ts">
import { useDepartmentCreateFormConf } from 'components/forms/department/create/DepartmentCreate.formconf.ts';
import { NForm, NFormItem, NInput, FormInst, NButton } from 'naive-ui';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';

const departmentStore = useDepartmentsStore();
const departmentCreateFormRef = ref<FormInst | null>();
const { rules, formValues } = useDepartmentCreateFormConf();

function goCreate() {
  departmentCreateFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await departmentStore.create(formValues);
  });
}
</script>

<template>
  <NForm ref="departmentCreateFormRef" :model="formValues" :rules="rules" class="department-create-form">
    <NFormItem label="Название отдела" path="name">
      <NInput v-model:value="formValues.name" placeholder="Пайка" />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goCreate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
