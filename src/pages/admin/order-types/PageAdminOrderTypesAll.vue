<script setup lang="ts">
import { NCard, NModal, NSkeleton, NDivider } from 'naive-ui';
import { onMounted, reactive, ref } from 'vue';
import { useDialogService } from '@/services/dialog.service.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';
import TableOrderTypes from 'components/tables/order-types/TableOrderTypes.vue';
import FormOrderTypeUpdate from 'components/forms/order-type/update/FormOrderTypeUpdate.vue';
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';

const dialogService = useDialogService();
const orderTypesStore = useOrderTypesStore();

const orderTypeChangeModal = reactive({
  isShow: false,
  orderType: {
    id: NaN,
    name: '',
  },
});

function change(orderType: IOrderType) {
  orderTypeChangeModal.isShow = true;
  orderTypeChangeModal.orderType = orderType;
}

function changed() {
  orderTypeChangeModal.isShow = false;
}

function remove(id: number) {
  dialogService.confirm(() => {
    orderTypesStore.remove(id);
  });
}

const isLoading = ref<boolean>(true);

onMounted(async () => {
  await orderTypesStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-order-types-all">
    <NDivider title-placement="left">Все типы вывесок</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrderTypes v-else :table-data="orderTypesStore.orderTypes" @change="change" @remove="remove" />
    <NModal v-model:show="orderTypeChangeModal.isShow">
      <NCard style="width: 600px">
        <FormOrderTypeUpdate :order-type="orderTypeChangeModal.orderType" @changed="changed" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
