<script setup lang="ts">
import {ref} from "vue";
import {NButton, NForm, NFormItem, NInput, NDatePicker, FormInst} from "naive-ui";
import {useRegFormConf} from "components/forms/FormReg/FormReg.formconf.ts";
import {useAuthService} from "@/services/auth.service.ts";
import {useMessageService} from "@/services/message.service.ts";

const regFormRef = ref<FormInst | null>()

const {adminReg} = useAuthService();
const message = useMessageService();
const {rules, formValues, options} = useRegFormConf();

function goReg() {
  regFormRef.value?.validate(async (errors) => {
    if (errors) {
      message.errors().formValidation()
      return
    }
    const {success} = await adminReg(formValues);

    success ? message.success().reg() : message.errors().reg()
  })
}
</script>

<template>
<NForm
    ref="regFormRef"
    :model="formValues"
    :rules="rules"
    class="reg-form"
>
    <NFormItem label="Номер сотрудника" path="userNumber">
      <NInput
          v-model:value="formValues.userNumber"
          placeholder="Сгенерируется сам, если оставите незаполненным"
      />
    </NFormItem>
    <NFormItem label="Фамилия" path="lastName">
      <NInput
          v-model:value="formValues.lastName"
          placeholder="Иванов"
      />
    </NFormItem>
    <NFormItem label="Имя" path="firstName">
      <NInput
          v-model:value="formValues.firstName"
          placeholder="Иван"
      />
    </NFormItem>
    <NFormItem label="Отчество" path="fatherName">
      <NInput
          v-model:value="formValues.fatherName"
          placeholder="Иванович"
      />
    </NFormItem>
    <NFormItem label="Дата устройства на работу" path="timestamp">
      <NDatePicker
          style="width: 100%"
          v-model:value="formValues.timestamp"
          placeholder=""
          type="date"
      />
    </NFormItem>
    <NFormItem label="Департаменты" path="departments">
      <NSelect
          v-model:value="formValues.departments"
          placeholder="Минимум 1"
          multiple
          remote
          :options="options"
      />
    </NFormItem>
    <NFormItem label="Почта" path="email">
      <NInput
          v-model:value="formValues.email"
          placeholder=""
      />
    </NFormItem>
    <NFormItem label="Пароль" path="password">
      <NInput
          v-model:value="formValues.password"
          type="password"
          placeholder=""
          show-password-on="click"
      />
    </NFormItem>
  <NButton class="login-form__button" type="primary" @click.prevent="goReg()">
    Создать
  </NButton>
  </NForm>
</template>

<style scoped>
.reg-form {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
</style>
