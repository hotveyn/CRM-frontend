<script setup lang="ts">
import { NCard, NModal, NSkeleton, NDivider } from 'naive-ui';
import { computed, onMounted, reactive, ref } from 'vue';
import TableOrdersCompleted from 'components/tables/orders/completed/TableOrdersCompleted.vue';
import { useOrdersCompletedStore } from '@/store/orders/orders-completed.store.ts';
import TableOrdersDetails from 'components/tables/orders/detail/TableOrdersDetails.vue';
import FormOrderRate from 'components/forms/order/rate/FormOrderRate.vue';
import { IStageDetail } from '@/interfaces/stage/IStageDetail.ts';

const orderCompletedStore = useOrdersCompletedStore();

const isLoading = ref<boolean>(true);

const detailModal = reactive({
  isShow: false,
  id: NaN,
});
const rateModal = reactive({
  isShow: false,
  id: NaN,
});

const detailTableData = computed<IStageDetail[]>(() => {
  if (detailModal.id) {
    const order = orderCompletedStore.findById(detailModal.id);
    if (order) {
      return order.order_stages.map((stage) => {
        return { ...stage, full_name: `${stage.user?.last_name} ${stage.user?.first_name} ${stage.user?.patronymic_name}` };
      });
    }
  }
  return [];
});

function detail(id: number) {
  detailModal.isShow = true;
  detailModal.id = id;
}

function rate(id: number) {
  rateModal.isShow = true;
  rateModal.id = id;
}

function rateDone() {
  rateModal.isShow = false;
}

// const range = ref<[number, number]>([Date.UTC(2004, 7, 13), Date.now()]);
//
// const start = computed(() => {
//   return new Date(range.value[0]).toISOString();
// });
// const end = computed(() => {
//   return new Date(range.value[1]).toISOString();
// });
//
onMounted(async () => {
  await orderCompletedStore.request();
  isLoading.value = false;
});
//
// watch(end, async () => {
//   await orderCompletedStore.request(start.value, end.value);
// });
</script>

<template>
  <div class="admin-stat-ready">
    <NDivider title-placement="left">Выполненные заказы</NDivider>
    <!--    <div class="date-range" style="margin-bottom: 30px">-->
    <!--      <NDatePicker v-model:value="range" type="daterange" />-->
    <!--    </div>-->
    <div class="admin-stat-ready__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TableOrdersCompleted v-else :table-data="orderCompletedStore.orders" @detail="detail" @rate="rate" />
    </div>

    <NModal v-model:show="detailModal.isShow">
      <NCard style="width: 600px">
        <TableOrdersDetails :table-data="detailTableData" />
      </NCard>
    </NModal>

    <NModal v-model:show="rateModal.isShow">
      <NCard style="width: 600px">
        <FormOrderRate :id="rateModal.id" @done="rateDone()" />
      </NCard>
    </NModal>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-ready {
  display: grid;
  grid-template-columns: 1fr;

  &__stats {
    display: flex;
    gap: 50px;
  }
}
</style>
