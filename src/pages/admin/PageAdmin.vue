<script setup lang="ts">
import TheAside from 'components/aside/TheAside.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'admin-employees',
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
    name: 'admin-order-types',
    text: 'Типы вывесок',
  },
  {
    id: 5,
    name: 'admin-stat',
    text: 'Статистика',
  },
];
</script>

<template>
  <div class="page-admin">
    <TheAside :routes="routes"><template #header>Админ</template></TheAside>
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
