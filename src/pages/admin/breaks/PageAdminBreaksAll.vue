<script setup lang="ts">
import { NCard, NModal, NSkeleton } from 'naive-ui';
import { useDialogService } from '@/services/dialog.service.ts';
import { onMounted, reactive, ref } from 'vue';
import TableBreak from 'components/tables/breaks/TableBreak.vue';
import { useBreaksStore } from '@/store/breaks.store.ts';
import FormBreakUpdate from 'components/forms/break/update/FormBreakUpdate.vue';

const dialogService = useDialogService();
const breakStore = useBreaksStore();

const breakChangeModal = reactive({
  isShow: false,
  id: NaN,
});

const isLoading = ref<boolean>(true);

function change(id: number) {
  breakChangeModal.isShow = true;
  breakChangeModal.id = id;
}
function changed() {
  breakChangeModal.isShow = false;
}
function remove(id: number) {
  dialogService.confirm(() => {
    breakStore.remove(id);
  });
}

onMounted(async () => {
  await breakStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-departments-all">
    <h2>Все виды браков</h2>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableBreak v-else :table-data="breakStore.breaks" @change="change" @remove="remove" />
    <NModal v-model:show="breakChangeModal.isShow">
      <NCard style="width: 600px">
        <FormBreakUpdate :id="breakChangeModal.id" @changed="changed" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
