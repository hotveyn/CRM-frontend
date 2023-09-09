<script setup lang="ts">
import FormDepartmentCreate from 'components/forms/department/create/FormDepartmentCreate.vue';
import { NDivider } from 'naive-ui';
</script>

<template>
  <div class="admin-department-create">
    <NDivider>Добавить новый отдел</NDivider>
    <FormDepartmentCreate />
  </div>
</template>

<style scoped lang="scss">
.admin-department-create {
  display: grid;
  width: 600px;
  margin: 0 auto;
}
</style>
