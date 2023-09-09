<script setup lang="ts">
import { useStageWorkStore } from '@/store/stages/stages-work.store.ts';
import { onMounted } from 'vue';
import CardStageWork from 'components/card/order/work/CardStageWork.vue';
import { NEmpty, NDivider } from 'naive-ui';

const stageWorkStore = useStageWorkStore();

onMounted(async () => {
  await stageWorkStore.request();
});
</script>

<template>
  <div class="employee-work">
    <NDivider>Текущие задачи</NDivider>
    <div v-if="!stageWorkStore.stages.length" class="employee-work__empty">
      <NEmpty size="huge" description="У вас нет ни одной задачи">
        <template #extra>Пусто</template>
      </NEmpty>
    </div>
    <div class="employee-work__cards">
      <CardStageWork v-for="stage in stageWorkStore.stages" :key="stage.id" :stage="stage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-work {
  &__empty {
    text-align: center;
    margin-top: 100px;
  }
  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 50px;
  }
}
</style>
