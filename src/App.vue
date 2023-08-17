<script setup lang="ts">
import LayoutDefault from '@/layouts/LayoutDefault.vue';
</script>

<template>
  <NDialogProvider>
    <NMessageProvider>
      <LayoutDefault>
        <RouterView />
      </LayoutDefault>
    </NMessageProvider>
  </NDialogProvider>
</template>

<style scoped></style>
