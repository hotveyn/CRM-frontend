<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import NavigationEmployee from 'components/navigation/employee/NavigationEmployee.vue';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'employee-new',
    text: 'Новые задачи',
  },
  {
    id: 2,
    name: 'employee-work',
    text: 'Ваши задачи',
  },
  {
    id: 3,
    name: 'employee-stat',
    text: 'Статистика',
  },
];
</script>

<template>
  <div class="page-employee">
    <NavigationEmployee class="page-employee__nav" :routes="routes" />
    <div class="page-employee__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-employee {
  &__workspace {
    margin-top: 20px;
  }
}
</style>
