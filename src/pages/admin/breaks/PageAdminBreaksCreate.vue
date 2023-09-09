<script setup lang="ts">
import FormBreakCreate from 'components/forms/break/create/FormBreakCreate.vue';
import { NDivider } from 'naive-ui';
</script>

<template>
  <div class="admin-break-create">
    <NDivider>Добавить новый вид брака и закрепить его за отделом</NDivider>
    <FormBreakCreate />
  </div>
</template>

<style scoped lang="scss">
.admin-break-create {
  display: grid;
  width: 600px;
  margin: 0 auto;
}
</style>
