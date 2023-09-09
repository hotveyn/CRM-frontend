<script setup lang="ts">
import TableStatOrdersStopped from 'components/tables/stat/orders/stoped/TableStatOrdersStopped.vue';
import { useOrdersStoppedStore } from '@/store/orders/orders-stopped.store.ts';
import { NSkeleton, NStatistic } from 'naive-ui';
import { onMounted, ref } from 'vue';
import { useStatOrdersStore } from '@/store/stat/stat-orders.store.ts';

const ordersStoppedStore = useOrdersStoppedStore();
const statOrdersStore = useStatOrdersStore();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  await Promise.all([ordersStoppedStore.request(), statOrdersStore.requestStopped()]);
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-stat-stopped">
    <h1>Заказы снятые с производства</h1>
    <div v-if="!isLoading" class="admin-stat-stopped__stats">
      <NStatistic label="Снятые с производства / готовые" :value="statOrdersStore.stoppedStat.orders_stopped">
        <template #suffix>/ {{ statOrdersStore.stoppedStat.orders }} </template>
      </NStatistic>
    </div>
    <div class="admin-stat-stopped__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableStatOrdersStopped v-else :table-data="ordersStoppedStore.orders" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-stopped {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  &__stats {
    display: flex;
    gap: 50px;
  }
}
</style>
