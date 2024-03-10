<script setup lang="ts">
import { useToWorkFormConf } from 'components/forms/order/towork/toWork.formconf.ts';
import { FormInst, NFormItem, NButton, NForm, NSelect, NDynamicInput, NInputNumber } from 'naive-ui';
import { useOrdersNewStore } from '@/store/orders/orders-new.store.ts';
import { ref } from 'vue';

const ordersNewStore = useOrdersNewStore();
const { dynamicInputRule, model, onCreateInp, options } = useToWorkFormConf();

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

    await ordersNewStore.toWork(props.id, model.value.dynamicInputValue!);
    emit('done');
  });
}
</script>

<template>
  <NForm ref="toWorkFormRef" :model="model">
    <NDynamicInput :min="1" v-model:value="model.dynamicInputValue" :on-create="onCreateInp" show-sort-button #="{ index }">
      <div class="dynamic-input">
        <NFormItem :show-label="false" ignore-path-change :path="`dynamicInputValue[${index}].department_id`" :rule="dynamicInputRule">
          <NSelect v-model:value="model.dynamicInputValue[index].department_id" placeholder="Выберите отдел" remote :options="options" />
        </NFormItem>
        <NFormItem :show-label="false">
          <NInputNumber v-model:value="model.dynamicInputValue[index].percent" :min="0" :max="100" :precision="2" placeholder="Проценты за работу" style="width: 100%" />
        </NFormItem>
      </div>
    </NDynamicInput>
    <NButton type="primary" @click.prevent="goToWork">Отправить в работу</NButton>
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
