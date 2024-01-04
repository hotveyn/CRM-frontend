<script setup lang="ts">
import { IStage } from '@/interfaces/stage/IStage.ts';
import { NCard, NButton, NSpace, NModal } from 'naive-ui';
import { useStageWorkStore } from '@/store/stages/stages-work.store.ts';
import { computed, reactive } from 'vue';
import { useDialogService } from '@/services/dialog.service.ts';
import FormStageBreak from 'components/forms/stage/FormStageBreak.vue';
import IconRollback from 'components/icons/IconRollback.vue';

const props = defineProps<{
  stage: IStage;
}>();

const { confirm } = useDialogService();
const stageWorkStore = useStageWorkStore();

const stageBreakModal = reactive({
  isShow: false,
  id: NaN,
});

const isWithBreak = computed(() => {
  return props.stage.break;
});

function setBreak(id: number) {
  stageBreakModal.isShow = true;
  stageBreakModal.id = id;
}

function setStop(id: number) {
  confirm(async () => {
    await stageWorkStore.setStop(id);
  });
}

function setBreakDone() {
  stageBreakModal.isShow = false;
}

function ready(id: number) {
  confirm(async () => {
    await stageWorkStore.ready(id);
  });
}

function unclaim(id: number) {
  confirm(async () => {
    await stageWorkStore.unclaim(id);
  });
}
</script>

<template>
  <NCard :title="`${stage.order.name} ${stage.order.code}`">
    <template #header-extra>
      <IconRollback @click="unclaim(stage.id)"/>
    </template>
    <div class="card-content">
      <p v-if="stage.department"><strong>Отдел - </strong> {{ stage.department.name }}</p>
      <p v-if="stage.order.comment"><strong>Комментарий - </strong> {{ stage.order.comment }}</p>
      <p v-if="isWithBreak"><strong>Брак - </strong> {{ stage.break.name }}</p>
    </div>
    <template #action>
      <NSpace vertical>
        <NButton @click="ready(stage.id)" style="width: 100%" type="success">Готово</NButton>
        <NButton v-if="isWithBreak" @click="setStop(stage.id)" style="width: 100%" type="error">Снять с производства</NButton>
        <NButton v-else @click="setBreak(stage.id)" style="width: 100%" type="error" ghost>Отметить брак</NButton>
      </NSpace>
    </template>

    <NModal v-model:show="stageBreakModal.isShow">
      <NCard style="width: 600px">
        <FormStageBreak :id="stageBreakModal.id" @done="setBreakDone" />
      </NCard>
    </NModal>
  </NCard>
</template>

<style scoped lang="scss"></style>
