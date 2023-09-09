<script setup lang="ts">
import { useStageNewStore } from '@/store/stages/stages-new.store.ts';
import { onMounted } from 'vue';
import { NEmpty, NDivider } from 'naive-ui';
import CardStageNew from 'components/card/order/new/CardStageNew.vue';

const stageNewStore = useStageNewStore();

onMounted(async () => {
  await stageNewStore.request();
});
</script>

<template>
  <div class="employee-new">
    <NDivider>Новые задачи</NDivider>
    <div v-if="!stageNewStore.stages.length" class="employee-new__empty">
      <NEmpty size="huge" description="Новых задач пока что нет">
        <template #extra>Пусто</template>
      </NEmpty>
    </div>
    <div class="employee-new__cards">
      <CardStageNew v-for="stage in stageNewStore.stages" :key="stage.id" :stage="stage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-new {
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
