<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-order-types-all',
    text: 'Типы вывесок',
  },
  {
    id: 2,
    name: 'admin-order-types-create',
    text: 'Добавить',
  },
];
</script>

<template>
  <div class="admin-order-types">
    <BaseNavigation :routes="routes" />
    <div class="admin-order-types__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-order-types {
  &__wrokspace {
    padding: 10px 0;
  }
}
</style>
