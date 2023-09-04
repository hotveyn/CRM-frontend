<script setup lang="ts">
import { useStageNewStore } from '@/store/stages/stagesNew.ts';
import { onMounted } from 'vue';
import CardStageNew from 'components/card/order/new/CardStageNew.vue';

const stageNewStore = useStageNewStore();

onMounted(async () => {
  await stageNewStore.request();
});
</script>

<template>
  <div class="employee-new">
    <h1>Новые задачи</h1>
    <CardStageNew v-for="stage in stageNewStore.stages" :key="stage.id" :stage="stage" />
  </div>
</template>

<style scoped lang="scss">
.employee-new {
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
</style>
