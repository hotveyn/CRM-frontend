<script setup lang="ts">
import { onMounted } from 'vue';
import { useStatSelfStore } from '@/store/stat/stat-self.store.ts';
import { NCollapse, NCollapseItem, NStatistic, NSpace, NEmpty, NDivider } from 'naive-ui';

const statSelfStore = useStatSelfStore();

onMounted(async () => {
  await statSelfStore.request();
});
</script>

<template>
  <div class="employee-stat">
    <NDivider>Статистика за месяц</NDivider>
    <div class="employee-stat__empty" v-if="!statSelfStore.stat.length">
      <NEmpty size="huge" description="Статистика пуста. Порабы выполнить какой-нибудь заказ!">
        <template #extra>Пусто</template>
      </NEmpty>
    </div>
    <NCollapse class="employee-stat__stats">
      <NCollapseItem v-for="stat in statSelfStore.sortedStat" :key="stat.id" :title="stat.name">
        <NSpace justify="space-between">
          <NStatistic label="Готовые заказы" :value="stat.stages" />
          <NStatistic label="Валюта" :value="stat.money" />
<!--          <NStatistic label="Стоимость" :value="value.neon_length" />-->
        </NSpace>
      </NCollapseItem>
    </NCollapse>
  </div>
</template>

<style scoped lang="scss">
.employee-stat {
  &__stats {
    margin-top: 20px;
  }
}
</style>
