<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-departments-all',
    text: 'Отделы',
  },
  {
    id: 2,
    name: 'admin-departments-create',
    text: 'Добавить',
  },
];
</script>

<template>
  <div class="admin-departments">
    <BaseNavigation :routes="routes" />
    <div class="admin-departments__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-departments {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
