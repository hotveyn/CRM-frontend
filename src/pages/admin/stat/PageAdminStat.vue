<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-stat-departments',
    text: 'Отделы',
  },
  {
    id: 2,
    name: 'admin-stat-completed',
    text: 'Готовые заказы',
  },
  {
    id: 3,
    name: 'admin-stat-work',
    text: 'Заказы в работе',
  },
  {
    id: 4,
    name: 'admin-stat-stopped',
    text: 'Заказы снятые с производства ',
  },
  {
    id: 5,
    name: 'admin-stat-reclamations',
    text: 'Рекламации',
  },
  {
    id: 6,
    name: 'admin-stat-employees',
    text: 'Сотрудники',
  },
];
</script>

<template>
  <div class="admin-stat">
    <BaseNavigation :routes="routes" />
    <div class="admin-stat__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
