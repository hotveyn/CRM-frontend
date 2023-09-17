<script setup lang="ts">
import TheAside from 'components/aside/TheAside.vue';
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

const routes: INavigationRoute[] = [
  {
    id: 1,
    name: 'storage-orders',
    text: 'Заказы',
  },
];
</script>

<template>
  <div class="page-storage">
    <TheAside :routes="routes"><template #header>Кладовщик</template></TheAside>
    <div class="page-storage__workspace">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-storage {
  height: 100%;
  display: grid;
  grid-template-columns: 0.2fr 1.8fr;

  &__workspace {
    padding: 10px;
  }
}
</style>
