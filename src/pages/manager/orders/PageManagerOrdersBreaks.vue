<script setup lang="ts">
import { useOrdersBreakStore } from '@/store/orders/ordersBreak.store.ts';
import { onMounted, reactive, ref } from 'vue';
import TableOrdersBreak from 'components/tables/orders/break/TableOrdersBreak.vue';
import { NCard, NModal, NSkeleton } from 'naive-ui';
import FormOrderUpdate from 'components/forms/order/new-update/FormOrderNewUpdate.vue';
import FormOrderBreakUpdate from 'components/forms/order/break-update/FormOrderBreakUpdate.vue';
import { useDialogService } from '@/services/dialog.service.ts';

const dialog = useDialogService();
const ordersBreakStore = useOrdersBreakStore();

const isLoading = ref<boolean>(true);

const orderChangeModal = reactive({
  isShow: false,
  id: NaN,
});

onMounted(async () => {
  await ordersBreakStore.request();
  isLoading.value = false;
});

async function stop(id: number) {
  dialog.confirm(async () => {
    await ordersBreakStore.stop(id);
  });
}

function change(id: number) {
  orderChangeModal.id = id;
  orderChangeModal.isShow = true;
}

async function restore(id: number) {
  await ordersBreakStore.restore(id);
}

function updateDone() {
  orderChangeModal.isShow = false;
}
</script>

<template>
  <div class="manager-orders-breaks">
    <h1>Заказы в состоянии брака</h1>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersBreak v-else :table-data="ordersBreakStore.orders" @change="change" @stop="stop" @restore="restore" />

    <NModal v-model:show="orderChangeModal.isShow">
      <NCard style="width: 600px">
        <FormOrderBreakUpdate :id="orderChangeModal.id" @done="updateDone" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
