<script setup lang="ts">
import { ref } from 'vue';
import { FormInst, NForm, NInput, NFormItem, NInputNumber, NButton, NSwitch, NSelect, NDynamicInput } from 'naive-ui';
import { useOrdersWorkStore } from '@/store/orders/orders-work.store.ts';
import { useOrderWorkUpdateFormConf } from 'components/forms/order/work-update/orderWorkUpdate.formconf.ts';

const props = defineProps<{
  id: number;
}>();

const emit = defineEmits<{
  done: [];
}>();

const orderWorkStore = useOrdersWorkStore();

const orderUpdateFormRef = ref<FormInst | null>();

const { options, rules, isDepartmentsChange, formValues, optionsType, onCreateInp, dynamicInputRule } = useOrderWorkUpdateFormConf(props.id);

function goUpdate() {
  orderUpdateFormRef.value?.validate(async (errors) => {
    if (errors) return;

    if (!isDepartmentsChange.value) delete formValues.departments;

    await orderWorkStore.update(props.id, formValues);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="orderUpdateFormRef" :rules="rules" :model="formValues">
    <NFormItem label="Название заказа" path="name">
      <NInput v-model:value="formValues.name" placeholder="" />
    </NFormItem>
    <NFormItem label="Стоимость" path="price">
      <NInputNumber v-model:value="formValues.price" placeholder="" :precision="2" />
    </NFormItem>
    <NFormItem label="Тип вывески" path="type_id">
      <NSelect v-model:value="formValues.type_id" remote :options="optionsType" />
    </NFormItem>
    <NFormItem label="Ваш комментарий к заказу">
      <NInput v-model:value="formValues.comment" type="textarea" placeholder="" />
    </NFormItem>
    <NFormItem label="Поменять ли этапы работы? Если вы их поменяете процесс работы начнётся занова с первого этапа!">
      <NSwitch v-model:value="isDepartmentsChange" />
    </NFormItem>
    <NDynamicInput :min="1" v-model:value="formValues.departments" :on-create="onCreateInp" show-sort-button v-if="isDepartmentsChange" #="{ index }">
      <div class="dynamic-input">
        <NFormItem :show-label="false" ignore-path-change :path="`departments[${index}].department_id`" :rule="dynamicInputRule">
          <NSelect v-model:value="formValues.departments![index].department_id" placeholder="Выберите отдел" remote :options="options" />
        </NFormItem>
        <NFormItem :show-label="false">
          <NInputNumber v-model:value="formValues.departments![index].percent" :min="0" :max="100" :precision="2" placeholder="Проценты за работу" style="width: 100%" />
        </NFormItem>
      </div>
    </NDynamicInput>
    <NButton type="primary" @click.prevent="goUpdate()"> Изменить </NButton>
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
