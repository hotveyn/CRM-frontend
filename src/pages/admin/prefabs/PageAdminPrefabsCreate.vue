<script setup lang="ts">
import { NDivider } from 'naive-ui';
import FormPrefabCreate from 'components/forms/prefab/create/FormPrefabCreate.vue';
</script>

<template>
  <div class="admin-prefab-create">
    <NDivider>Добавить новый шаблон</NDivider>
    <FormPrefabCreate />
  </div>
</template>

<style scoped lang="scss">
.admin-prefab-create {
  display: grid;
  width: 600px;
  margin: 0 auto;
}
</style>
