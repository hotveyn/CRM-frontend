<script setup lang="ts">
import TableOrdersNew from 'components/tables/orders/new/TableOrdersNew.vue';
import { onMounted, ref } from 'vue';
import { NCard, NModal, NSkeleton } from 'naive-ui';
import { useOrdersNewStore } from '@/store/orders/ordersNew.store.ts';
import { useDialogService } from '@/services/dialog.service.ts';
import { reactive } from 'vue';
import FormToWork from 'components/forms/order/towork/FormToWork.vue';
import FormOrderNewUpdate from 'components/forms/order/new-update/FormOrderNewUpdate.vue';

const dialogService = useDialogService();
const orderNewStore = useOrdersNewStore();

const isLoading = ref<boolean>(true);
const orderToWorkModal = reactive({
  isShow: false,
  id: NaN,
});
const orderChangeModal = reactive({
  isShow: false,
  id: NaN,
});

async function remove(id: number) {
  dialogService.confirm(() => {
    orderNewStore.remove(id);
  });
}

async function change(id: number) {
  orderChangeModal.isShow = true;
  orderChangeModal.id = id;
}

function toWork(id: number) {
  orderToWorkModal.isShow = true;
  orderToWorkModal.id = id;
}
function toWorkDone() {
  orderToWorkModal.isShow = false;
}
function updateDone() {
  orderChangeModal.isShow = false;
}
onMounted(async () => {
  await orderNewStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="manager-orders-new">
    <h1>new</h1>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersNew v-else :table-data="orderNewStore.orders" @remove="remove" @change="change" @to-work="toWork" />

    <NModal v-model:show="orderToWorkModal.isShow">
      <NCard style="width: 600px">
        <FormToWork :id="orderToWorkModal.id" @done="toWorkDone" />
      </NCard>
    </NModal>

    <NModal v-model:show="orderChangeModal.isShow">
      <NCard style="width: 600px">
        <FormOrderNewUpdate :id="orderChangeModal.id" @done="updateDone" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
