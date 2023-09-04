<script setup lang="ts">
import { INavigationRoute } from '@/interfaces/INavigationRoute.ts';
import { NButton } from 'naive-ui';
import { onMounted, ref } from 'vue';

defineProps<{
  routes: INavigationRoute[];
  vertical?: boolean;
}>();

const buttonSize = ref<'medium' | 'small'>('medium');

onMounted(() => {
  if (window.screen.availWidth < 700) buttonSize.value = 'small';
});
</script>

<template>
  <nav class="nav">
    <ul :class="{ nav__list_vertical: vertical }" class="nav__list">
      <li v-for="route in routes" :key="route.id" class="nav__item">
        <RouterLink :to="{ name: route.name }">
          <NButton type="info" :size="buttonSize">
            {{ route.text }}
          </NButton>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  margin: 0 auto;
  z-index: 5;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  width: 90dvw;
  &__list {
    display: flex;
    gap: 20px;
    justify-content: space-between;
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

@media (width < 700px) {
  .nav {
    width: 90%;
    &__list {
      width: 100%;
      gap: 0;
    }
  }
}
</style>
