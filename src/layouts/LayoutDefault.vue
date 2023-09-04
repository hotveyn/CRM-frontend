<script setup lang="ts">
import TheHeader from 'components/header/TheHeader.vue';
</script>

<template>
  <div class="layout-default">
    <TheHeader />
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  height: 100%;
  display: grid;
  grid-template-rows: 0.1fr 1.9fr;
}
@media (width < 700px) {
  .main {
    padding: 15px;
  }
}
</style>
