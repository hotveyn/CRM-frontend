<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';

defineProps<{
  routes: INavigationRoute[];
  vertical?: boolean;
}>();
</script>

<template>
  <nav class="nav">
    <ul :class="{ nav__list_vertical: vertical }" class="nav__list">
      <li v-for="route in routes" :key="route.id" class="nav__item">
        <RouterLink :to="{ name: route.name }" class="nav__link">{{ route.text }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  &__list {
    display: flex;
    gap: 20px;
    &_vertical {
      flex-direction: column;
    }
  }

  &__link {
    text-decoration: none;
    padding: 3px 5px;
    border-radius: 4px;
    border: 2px solid $primary;
    color: black;
  }
}
</style>
