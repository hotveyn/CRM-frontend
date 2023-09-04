<script setup lang="ts">
import FormDepartmentCreate from 'components/forms/department/create/FormDepartmentCreate.vue';
</script>

<template>
  <div class="admin-department-create">
    <h1>Добавить новый отдел</h1>
    <FormDepartmentCreate />
  </div>
</template>

<style scoped lang="scss">
.admin-department-create {
  display: grid;
  gap: 50px;
  width: 600px;
  margin: 0 auto;
}
</style>
