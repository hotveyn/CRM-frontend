<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { usePrefabStore } from '@/store/prefab.store.ts';
import { onMounted, reactive, ref } from 'vue';
import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { NCard, NDivider, NModal, NSkeleton } from 'naive-ui';
import TablePrefabsAll from 'components/tables/orders/new/TablePrefabsAll.vue';
import FormPrefabUpdate from 'components/forms/prefab/update/FormPrefabUpdate.vue';

const dialogService = useDialogService();
const prefabStore = usePrefabStore();

const prefabChangeModal = reactive({
  isShow: false,
  prefab: {
    id: NaN,
    name: '',
    comment: '',
    price: 1,
    type_id: 1,
    type: {
      id: 1,
      name: 'default',
    },
  } as IPrefab,
});

const isLoading = ref<boolean>(true);

function change(prefab: IPrefab) {
  prefabChangeModal.isShow = true;
  prefabChangeModal.prefab = prefab;
}

function changed() {
  prefabChangeModal.isShow = false;
}

function remove(id: number) {
  dialogService.confirm(() => {
    prefabStore.remove(id);
  });
}
onMounted(async () => {
  await prefabStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-order-types-all">
    <NDivider title-placement="left">Все типы вывесок</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TablePrefabsAll v-else :table-data="prefabStore.prefabs" @change="change" @remove="remove" />
    <NModal v-model:show="prefabChangeModal.isShow">
      <NCard style="width: 600px">
        <FormPrefabUpdate :prefab="prefabChangeModal.prefab" @changed="changed" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
