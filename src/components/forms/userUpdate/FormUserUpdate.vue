<script setup lang="ts">
import { useUserUpdateFormConf } from './userUpdate.formconf.ts';
import { FormInst, NButton, NDatePicker, NForm, NFormItem, NInput, NSelect } from 'naive-ui';
import { useUsersStore } from '@/store/users.store.ts';
import { ref } from 'vue';

const props = defineProps<{
  userId: number;
}>();
const emit = defineEmits<{
  changed: [];
}>();
const userUpdateRef = ref<FormInst | null>();
const userStore = useUsersStore();
const { rules, formValues, options } = useUserUpdateFormConf(props.userId);

async function goChange() {
  userUpdateRef.value?.validate(async (errors) => {
    if (errors) {
      return;
    }

    await userStore.update(props.userId, formValues);
    emit('changed');
  });
}
</script>

<template>
  <NForm ref="userUpdateRef" :model="formValues" :rules="rules" class="reg-form">
    <NFormItem label="Номер сотрудника" path="code">
      <NInput v-model:value="formValues.code" placeholder="Сгенерируется сам, если оставите незаполненным" />
    </NFormItem>
    <NFormItem label="Фамилия" path="lastName">
      <NInput v-model:value="formValues.lastName" placeholder="Иванов" />
    </NFormItem>
    <NFormItem label="Имя" path="firstName">
      <NInput v-model:value="formValues.firstName" placeholder="Иван" />
    </NFormItem>
    <NFormItem label="Отчество" path="patronymicName">
      <NInput v-model:value="formValues.patronymicName" placeholder="Иванович" />
    </NFormItem>
    <NFormItem label="Дата устройства на работу" path="startWorkDate">
      <NDatePicker value-format="yyyy-MM-dd" v-model:formatted-value="formValues.startWorkDate" style="width: 100%" placeholder="" type="date" />
    </NFormItem>
    <NFormItem label="Департаменты" path="departments">
      <NSelect v-model:value="formValues.departments" placeholder="Минимум 1" multiple remote :options="options" />
    </NFormItem>
    <NFormItem label="Логин" path="login">
      <NInput v-model:value="formValues.login" placeholder="" />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput v-model:value="formValues.password" type="password" placeholder="Текущий пароль захеширован и не покажется" show-password-on="click" />
    </NFormItem>
    <NButton class="login-form__button" type="primary" @click.prevent="goChange()"> Сохранить </NButton>
  </NForm>
</template>

<style scoped lang="scss"></style>
