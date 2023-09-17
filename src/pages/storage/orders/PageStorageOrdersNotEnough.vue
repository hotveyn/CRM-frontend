<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { useOrdersResourcesStore } from '@/store/orders/orders-resources.store.ts';
import { NDivider, NSkeleton } from 'naive-ui';
import { onMounted, ref } from 'vue';
import TableOrdersResourcesNotEnough from 'components/tables/orders/resources/TableOrdersResourcesNotEnough.vue';

const dialogService = useDialogService();
const ordersResourcesStore = useOrdersResourcesStore();
const isLoading = ref(true);

async function setNull(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setResourcesNull(id);
  });
}

async function setEnough(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setEnough(id);
  });
}

onMounted(async () => {
  await ordersResourcesStore.requestNotEnough();
  isLoading.value = false;
});
</script>

<template>
  <div class="storage-orders-not-enough">
    <NDivider title-placement="left">Заказы с недостатком материалов</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersResourcesNotEnough v-else :table-data="ordersResourcesStore.ordersNotEnough" @setNull="setNull" @enough="setEnough" />
  </div>
</template>

<style scoped lang="scss"></style>
