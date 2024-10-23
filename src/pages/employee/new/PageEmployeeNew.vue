<script setup lang="ts">
import { useStageNewStore } from '@/store/stages/stages-new.store.ts';
import { onMounted, ref, watch } from 'vue';
import { NEmpty, NDivider, NTabs, NTabPane, NInput } from 'naive-ui';
import CardStageNew from 'components/card/order/new/CardStageNew.vue';
import { IDepartment } from '@/interfaces/department/IDepartment';

const stageNewStore = useStageNewStore();
const currentTab = ref<number | undefined>(stageNewStore.departments[0] ? stageNewStore.departments[0].id : undefined);
const searchText = ref<string>('');

const searchedStages = ref<IDepartment[]>([]);

onMounted(async () => {
  await stageNewStore.request();
  searchedStages.value = stageNewStore.getStagesWithSearch(searchText.value);
  currentTab.value = searchedStages.value[0] ? searchedStages.value[0].id : undefined;
});

function claim() {
  if (searchText.value) searchText.value = '';

  currentTab.value = searchedStages.value[0] ? searchedStages.value[0].id : undefined;
}

watch(searchText, (newValue: string) => {
  searchedStages.value = stageNewStore.getStagesWithSearch(newValue);
  currentTab.value = searchedStages.value[0] ? searchedStages.value[0].id : undefined;
});
</script>

<template>
  <div class="employee-new">
    <NDivider>Новые задачи</NDivider>
    <NInput class="employee-new__search-bar" v-model:value="searchText" type="text" placeholder="Поиск по номеру" />
    <div v-if="!stageNewStore.departments.length" class="employee-new__empty">
      <NEmpty size="huge" description="Новых задач пока что нет">
        <template #extra>Пусто</template>
      </NEmpty>
    </div>
    <div v-else class="employee-new__cards">
      <NTabs type="card" animated v-model:value="currentTab">
        <NTabPane placement="left" size="small" v-for="department in searchedStages" :key="department.id" :name="department.id" :tab="department.name">
          <CardStageNew @claim="claim" v-for="stage in department.orderStages" :key="stage!.id" :stage="stage" :department-id="department.id" style="margin-bottom: 20px" />
        </NTabPane>
      </NTabs>
    </div>
  </div>
</template>

<style scoped lang="scss">
.employee-new {
  &__empty {
    text-align: center;
    margin-top: 100px;
  }

  &__search-bar {
    margin-bottom: 24px;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 50px;
  }
}
</style>
