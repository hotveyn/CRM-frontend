<script setup lang="ts">
import { useDialogService } from '@/services/dialog.service.ts';
import { useOrdersResourcesStore } from '@/store/orders/orders-resources.store.ts';
import { NDivider, NSkeleton } from 'naive-ui';
import { onMounted, ref } from 'vue';
import TableOrdersResourcesEnough from 'components/tables/orders/resources/TableOrdersResourcesEnough.vue';

const dialogService = useDialogService();
const ordersResourcesStore = useOrdersResourcesStore();
const isLoading = ref(true);

async function setNull(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setResourcesNull(id);
  });
}

async function setNotEnough(id: number) {
  dialogService.confirm(async () => {
    await ordersResourcesStore.setNotEnough(id);
  });
}

onMounted(async () => {
  await ordersResourcesStore.requestEnough();
  isLoading.value = false;
});
</script>

<template>
  <div class="storage-orders-enough">
    <NDivider title-placement="left">Заказы с достатком материалов</NDivider>
    <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
    <TableOrdersResourcesEnough v-else :table-data="ordersResourcesStore.ordersEnough" @setNull="setNull" @notEnough="setNotEnough" />
  </div>
</template>

<style scoped lang="scss"></style>
