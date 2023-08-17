<script setup lang="ts">
import AsideAdmin from 'components/aside/AsideAdmin.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

const adminRoutes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-users',
    text: 'Сотрудники',
  },
  {
    id: 2,
    name: 'admin-departments',
    text: 'Отделы',
  },
  {
    id: 3,
    name: 'admin-breaks',
    text: 'Виды брака',
  },
  {
    id: 4,
    name: 'admin-stat',
    text: 'Статистика',
  },
  {
    id: 5,
    name: 'admin-reclamations',
    text: 'Рекламации',
  },
];
</script>

<template>
  <div class="page-admin">
    <AsideAdmin :routes="adminRoutes" />
    <div class="page-admin__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-admin {
  height: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1.8fr;

  &__workspace {
    padding: 10px;
  }
}
</style>
