<script setup lang="ts">
import { onMounted } from 'vue';
import { useStatSelfStore } from '@/store/stat/stat-self.store.ts';
import { NCollapse, NCollapseItem, NStatistic, NSpace, NEmpty } from 'naive-ui';

const statSelfStore = useStatSelfStore();

onMounted(async () => {
  await statSelfStore.request();
});
</script>

<template>
  <div class="employee-stat">
    <h1>Ваша статистика за месяц под отделам</h1>
    <div class="employee-stat__empty" v-if="!statSelfStore.stat.size">
      <NEmpty size="huge" description="Статистика пуста. Порабы выполнить какой-нибудь заказ!">
        <template #extra>Пусто</template>
      </NEmpty>
    </div>
    <NCollapse class="employee-stat__stats">
      <NCollapseItem v-for="[key, value] in statSelfStore.stat" :key="key" :title="key">
        <NSpace justify="space-between">
          <NStatistic label="Готовые заказы" :value="value.stages" />
          <NStatistic label="Брак" :value="value.break_stages" />
          <NStatistic label="Длина неона" :value="value.neon_length" />
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
