<script setup lang="ts">
import { useOrdersWorkStore } from '@/store/orders/orders-work.store.ts';
import TableStatOrdersWork from 'components/tables/stat/orders/work/TableStatOrdersWork.vue';
import { NSkeleton, NDivider } from 'naive-ui';
import { onMounted, ref } from 'vue';

const ordersWorkStore = useOrdersWorkStore();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  await ordersWorkStore.request();
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-stat-work">
    <NDivider title-placement="left">Вывески находящиеся в процессе создания</NDivider>
    <div class="admin-stat-work__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableStatOrdersWork v-else :table-data="ordersWorkStore.orders" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-work {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
