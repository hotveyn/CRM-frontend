<script setup lang="ts">
import BaseNavigation from 'components/navigation/BaseNavigation.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
defineProps<{
  routes: INavigationRoute[];
}>();
</script>

<template>
  <aside class="aside">
    <div class="aside__header">
      <p class="aside__title"><slot name="header"></slot></p>
    </div>
    <div class="aside__body">
      <p class="aside__title">Разделы:</p>
      <BaseNavigation vertical :routes="routes" />
    </div>
  </aside>
</template>

<style scoped lang="scss">
.aside {
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
