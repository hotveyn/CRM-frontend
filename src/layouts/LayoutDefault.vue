<script setup lang="ts">

import TheHeader from "components/header/TheHeader.vue";
</script>

<template>
  <TheHeader/>
<main class="main">
  <NMessageProvider>
  <slot/>
  </NMessageProvider>
</main>
</template>

<style scoped>

</style>
