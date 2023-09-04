<script setup lang="ts">
import { useStageWorkStore } from '@/store/stages/stagesWork.ts';
import { onMounted } from 'vue';
import CardStageWork from 'components/card/order/work/CardStageWork.vue';

const stageWorkStore = useStageWorkStore();

onMounted(async () => {
  await stageWorkStore.request();
});
</script>

<template>
  <div class="employee-work">
    <h1>Текущие задачи</h1>
    <CardStageWork v-for="stage in stageWorkStore.stages" :key="stage.id" :stage="stage" />
  </div>
</template>

<style scoped lang="scss">
.employee-work {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 50px;
}
</style>
