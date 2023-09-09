<script setup lang="ts">
import { IStage } from '@/interfaces/stage/IStage.ts';
import { NCard, NButton } from 'naive-ui';
import { useStageNewStore } from '@/store/stages/stages-new.store.ts';
import { useDialogService } from '@/services/dialog.service.ts';

defineProps<{
  stage: IStage;
}>();

const { confirm } = useDialogService();
const stageNewStore = useStageNewStore();

async function claim(id: number) {
  confirm(async () => {
    await stageNewStore.claim(id);
  });
}
</script>

<template>
  <NCard :title="stage.order.name">
    <template #header-extra>{{ stage.order.code }}</template>
    {{ stage.department.name }}
    <template #action>
      <NButton @click="claim(stage.id)" style="width: 100%" type="success">Принять в работу</NButton>
    </template>
  </NCard>
</template>

<style scoped lang="scss"></style>
