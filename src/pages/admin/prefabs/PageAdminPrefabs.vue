<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-prefabs-all',
    text: 'Все шаблоны',
  },
  {
    id: 2,
    name: 'admin-prefabs-create',
    text: 'Создать шаблон',
  },
];
</script>

<template>
  <div class="admin-prefabs">
    <BaseNavigation :routes="routes" />
    <div class="admin-prefabs__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-prefabs {
  &__wrokspace {
    padding: 10px 0;
  }
}
</style>
