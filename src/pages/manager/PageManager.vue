<script setup lang="ts">
import TheAside from 'components/aside/TheAside.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'manager-orders',
    text: 'Заказы',
  },
];
</script>

<template>
  <div class="page-manager">
    <TheAside :routes="routes"><template #header>Менеджер</template></TheAside>
    <div class="page-manager__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-manager {
  height: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1.8fr;

  &__workspace {
    padding: 10px;
  }
}
</style>
