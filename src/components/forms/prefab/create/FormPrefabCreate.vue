<script setup lang="ts">
import { FormInst, NButton, NForm, NFormItem, NInput, NInputNumber, NSelect } from 'naive-ui';
import { ref } from 'vue';
import { usePrefabStore } from '@/store/prefab.store.ts';
import { usePrefabCreateFormConf } from 'components/forms/prefab/create/prefabCreate.formconf.ts';

const prefabFormRef = ref<FormInst | null>();
const prefabsStore = usePrefabStore();
const { rules, formValues, options } = usePrefabCreateFormConf();

async function goCreate() {
  prefabFormRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await prefabsStore.create(formValues);
  });
}
</script>

<template>
  <NForm ref="prefabFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Название шаблона" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Стоимость шаблона" path="price">
      <NInputNumber :min="0.1" v-model:value="formValues.price" placeholder="" :precision="2" />
    </NFormItem>
    <NFormItem label="Тип шаблона" path="type_id">
      <NSelect v-model:value="formValues.type_id" remote :options="options" />
    </NFormItem>
    <NFormItem label="Комментарий к шаблону">
      <NInput v-model:value="formValues.comment" type="textarea" placeholder="" />
    </NFormItem>
    <NButton type="primary" @click.prevent="goCreate()"> Создать </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
