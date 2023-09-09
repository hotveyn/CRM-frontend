<script setup lang="ts">
import TableOrdersWork from 'components/tables/orders/work/TableOrdersWork.vue';
import { onMounted, reactive, ref } from 'vue';
import { useOrdersWorkStore } from '@/store/orders/orders-work.store.ts';
import { NCard, NModal, NSkeleton } from 'naive-ui';
import FormOrderWorkUpdate from 'components/forms/order/work-update/FormOrderWorkUpdate.vue';

const ordersWorkStore = useOrdersWorkStore();

const isLoading = ref<boolean>(true);

const orderChangeModal = reactive({
  isShow: false,
  id: NaN,
});

function change(id: number) {
  orderChangeModal.id = id;
  orderChangeModal.isShow = true;
}

function updateDone() {
  orderChangeModal.isShow = false;
}

onMounted(async () => {
  await ordersWorkStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="manager-orders-work">
    <h1>Заказы находящися в процессе производства</h1>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersWork v-else @change="change" :table-data="ordersWorkStore.orders" />
    <NModal v-model:show="orderChangeModal.isShow">
      <NCard style="width: 600px">
        <FormOrderWorkUpdate :id="orderChangeModal.id" @done="updateDone" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss"></style>
