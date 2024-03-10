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
          <NButton type="default" :size="buttonSize">
            {{ route.text }}
          </NButton>
        </RouterLink>
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

  &__item {
    * {
      width: 100%;
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
    &__list {
      width: 90dvw;
      gap: 0;
      left: calc(50% - 45dvw);
      justify-content: space-between;
    }
  }
}
</style>
