<script setup lang="ts">
import BaseNavigation from 'components/navigation/BaseNavigation.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
defineProps<{
  routes: INavigationRoute[];
}>();
</script>

<template>
  <aside class="aside-admin">
    <div class="aside-admin__header">
      <p class="aside-admin__title">Админ</p>
    </div>
    <div class="aside-admin__body">
      <p class="aside-admin__title">Разделы:</p>
      <BaseNavigation vertical :routes="routes" />
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside-admin {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 40px auto;
  border-right: 2px solid $primary;
  &__header,
  &__body {
    padding: 10px;
  }

  &__header {
    border-bottom: 2px solid $primary;
  }
  &__title {
    margin-bottom: 10px;
    font-size: 20px;
  }
}
</style>
