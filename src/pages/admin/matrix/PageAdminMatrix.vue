<script setup lang="ts">
import BaseNavigation from 'components/navigation/BaseNavigation.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-matrix-all',
    text: 'Матрицы',
  },
];
</script>

<template>
  <div class="admin-matrix">
    <BaseNavigation :routes="routes" />
    <div class="admin-matrix__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
