<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'manager-orders-new',
    text: 'Новые заказы',
  },
  {
    id: 2,
    name: 'manager-orders-create',
    text: 'Добавить',
  },
  {
    id: 3,
    name: 'manager-orders-breaks',
    text: 'Бракованные',
  },
  {
    id: 4,
    name: 'manager-orders-stopped',
    text: 'Остановленные',
  },
  {
    id: 4,
    name: 'manager-orders-work',
    text: 'В работе',
  },
];
</script>

<template>
  <div class="manager-orders">
    <BaseNavigation :routes="routes" />
    <div class="manager-orders__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.manager-orders {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
