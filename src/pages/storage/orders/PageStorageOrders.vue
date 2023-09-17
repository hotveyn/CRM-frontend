<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import BaseNavigation from 'components/navigation/BaseNavigation.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'storage-orders-new',
    text: 'Необратботанные',
  },
  {
    id: 2,
    name: 'storage-orders-enough',
    text: 'Хватило',
  },
  {
    id: 3,
    name: 'storage-orders-not-enough',
    text: 'Не хватило',
  },
];
</script>

<template>
  <div class="storage-orders">
    <BaseNavigation :routes="routes" />
    <div class="storage-orders__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.storage-orders {
  &__workspace {
    padding: 10px 0;
  }
}
</style>
