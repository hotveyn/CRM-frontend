<script setup lang="ts">
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import { NDialogProvider, NMessageProvider } from 'naive-ui';
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
