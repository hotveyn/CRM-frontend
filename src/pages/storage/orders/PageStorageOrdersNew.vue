<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { useOrdersResourcesStore } from '@/store/orders/orders-resources.store.ts';
import { NDivider, NSkeleton } from 'naive-ui';
import { onMounted, ref } from 'vue';
import TableOrdersResourcesNew from 'components/tables/orders/resources/TableOrdersResourcesNew.vue';

const dialogService = useDialogService();
const ordersResourcesStore = useOrdersResourcesStore();
const isLoading = ref(true);

async function setEnough(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setEnough(id);
  });
}

async function setNotEnough(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setNotEnough(id);
  });
}

onMounted(async () => {
  await ordersResourcesStore.requestNew();
  isLoading.value = false;
});
</script>

<template>
  <div class="storage-orders-new">
    <NDivider title-placement="left">Заказы с неустановленным достатком материалов</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersResourcesNew v-else :table-data="ordersResourcesStore.ordersNew" @enough="setEnough" @notEnough="setNotEnough" />
  </div>
</template>

<style scoped lang="scss"></style>
