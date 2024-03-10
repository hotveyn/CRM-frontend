<script setup lang="ts">
import { IStage } from '@/interfaces/stage/IStage.ts';
import { NCard, NButton } from 'naive-ui';
import { useStageNewStore } from '@/store/stages/stages-new.store.ts';
import { useDialogService } from '@/services/dialog.service.ts';

const props = defineProps<{
  stage: IStage;
  departmentId: number;
}>();

const emit = defineEmits<{
  claim: [];
}>();

const { confirm } = useDialogService();
const stageNewStore = useStageNewStore();

async function claim(id: number) {
  confirm(async () => {
    await stageNewStore.claim(id, props.departmentId!, () => emit('claim'));
  });
}
</script>

<template>
  <NCard :title="stage.order.name">
    <template #header-extra>{{ stage.order.code }}</template>
    <div class="card-content">
      <p v-if="stage.order.comment"><strong>Комментарий - </strong> {{ stage.order.comment }}</p>
    </div>
    <template #action>
      <NButton @click="claim(stage.id)" style="width: 100%" type="success">Принять в работу</NButton>
    </template>
  </NCard>
</template>

<style scoped lang="scss"></style>
