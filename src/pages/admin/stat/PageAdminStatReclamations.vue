<script setup lang="ts">
import TableStatOrdersStopped from 'components/tables/stat/orders/stoped/TableStatOrdersStopped.vue';
import { NSkeleton, NStatistic } from 'naive-ui';
import { useStatOrdersStore } from '@/store/stat/stat-orders.store.ts';
import { onMounted, ref } from 'vue';
import { useOrdersReclamationStore } from '@/store/orders/orders-reclamation.store.ts';

const orderReclamationsStore = useOrdersReclamationStore();
const statOrdersStore = useStatOrdersStore();
const isLoading = ref<boolean>(true);

onMounted(async () => {
  await Promise.all([orderReclamationsStore.request(), statOrdersStore.requestReclamation()]);
  isLoading.value = false;
});
</script>

<template>
  <div class="admin-stat-reclamation">
    <h1>Заказы сделанные по гарантии</h1>
    <div v-if="!isLoading" class="admin-stat-reclamation__stats">
      <NStatistic label="Гарантийные / обычные" :value="statOrdersStore.reclamationStat.reclamations">
        <template #suffix>/ {{ statOrdersStore.reclamationStat.orders }} </template>
      </NStatistic>
      <NStatistic label="Процент гарантийных заказов " :value="statOrdersStore.reclamationStat.reclamations_percent" />
    </div>
    <div class="admin-stat-stopped__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableStatOrdersStopped v-else :table-data="orderReclamationsStore.orders" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-reclamation {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  &__stats {
    display: flex;
    gap: 50px;
  }
}
</style>
