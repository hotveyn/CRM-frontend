<script setup lang="ts">
import dayjs from 'dayjs';
import { NCard, NModal, NDivider, NDataTable, NButton } from 'naive-ui';
import { computed, h, onMounted, reactive, ref } from 'vue';
import { asd } from '@/store/orders/orders-completed.store.ts';
import TableOrdersDetails from 'components/tables/orders/detail/TableOrdersDetails.vue';
import FormOrderRate from 'components/forms/order/rate/FormOrderRate.vue';
import { IStageDetail } from '@/interfaces/stage/IStageDetail.ts';
import { OrderScalarFieldEnum, OrderStatusV2Enum } from '@/enums/order/OrderStatus.enum';
import { IOrderV2 } from '@/interfaces/order/IOrder.ts';
import FormOrderToBreak from 'components/forms/order/to-break/FormOrderToBreak.vue';

const columns = [
  {
    title: 'Код',
    key: 'code',
    sorter: 'default' as const,
  },
  {
    title: 'Название',
    key: 'name',
    sorter: 'default' as const,
  },
  {
    title: 'Дата начала',
    key: 'dateStart',
    sorter: 'default' as const,
    render: (row: IOrderV2) => {
      return dayjs(row.dateStart).format('DD MMMM YYYY');
    },
  },
  {
    title: 'Дата сдачи',
    key: 'dateEnd',
    sorter: 'default' as const,
    render: (row: IOrderV2) => {
      return dayjs(row.dateEnd).format('DD MMMM YYYY');
    },
  },
  {
    title: 'Тип',
    key: 'type.name',
  },
  {
    title: 'Стоимость',
    key: 'price',
    sorter: 'default' as const,
  },
  {
    title: 'Оценка',
    key: 'rating',
    sorter: 'default' as const,
  },
  {
    title: 'Комментарий',
    key: 'comment',
    sorter: 'default' as const,
  },
  {
    title: 'Действия',
    key: 'actions',
    width: 110,
    render(row: { id: number }) {
      return [
        h(
          NButton,
          {
            type: 'default',
            size: 'small',
            style: {
              marginRight: '6px',
              width: '100%',
              maxWidth: '100px',
            },
            onClick: () => detail(row.id),
          },
          {
            default: () => 'Детали',
          }
        ),
        h(
          NButton,
          {
            type: 'primary',
            size: 'small',
            style: {
              marginRight: '6px',
              marginTop: '6px',
              width: '100%',
              maxWidth: '100px',
            },
            onClick: () => rate(row.id),
          },
          {
            default: () => 'Оценить',
          }
        ),
        h(
          NButton,
          {
            type: 'error',
            size: 'small',
            style: {
              marginRight: '6px',
              marginTop: '6px',
              width: '100%',
              maxWidth: '100px',
            },
            onClick: () => doBreak(row.id),
          },
          {
            default: () => 'Брак',
          }
        ),
      ];
    },
  },
];
const { count, orders, request, findById } = asd();
const isLoading = ref<boolean>(true);
const computedPageCount = computed(() => Math.floor(count.value / 30));

const paginationReactive = reactive({
  page: 1,
  pageSize: 30,
  pageCount: computedPageCount,
});

const sorter = {
  orderDirection: undefined,
  orderBy: undefined,
} as {
  orderBy?: OrderScalarFieldEnum;
  orderDirection?: 'asc' | 'desc';
};
const detailModal = reactive({
  isShow: false,
  id: NaN,
});
const rateModal = reactive({
  isShow: false,
  id: NaN,
});
const breakModal = reactive({
  isShow: false,
  id: NaN,
});
const detailTableData = computed<IStageDetail[]>(() => {
  if (detailModal.id) {
    const order = findById(detailModal.id);
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

function doBreak(id: number) {
  breakModal.isShow = true;
  breakModal.id = id;
}
function breakDone() {
  breakModal.isShow = false;
}

onMounted(async () => {
  isLoading.value = true;
  await request({
    limit: paginationReactive.pageSize,
    offset: (paginationReactive.page - 1) * paginationReactive.pageSize,
    status: OrderStatusV2Enum.READY,
  }).finally(() => {
    isLoading.value = false;
  });
});

async function handleSorterChange(newSorter?: { columnKey: OrderScalarFieldEnum; order: 'ascend' | 'descend' }) {
  console.log(newSorter);
  if (newSorter?.order) {
    sorter.orderDirection = newSorter.order === 'ascend' ? 'asc' : 'desc';
    sorter.orderBy = newSorter.columnKey;
    isLoading.value = true;
    await request({
      limit: paginationReactive.pageSize,
      offset: (paginationReactive.page - 1) * paginationReactive.pageSize,
      status: OrderStatusV2Enum.READY,
      orderDirection: sorter.orderDirection,
      orderBy: sorter.orderBy,
    }).finally(() => {
      isLoading.value = false;
    });
  } else {
    sorter.orderDirection = undefined;
    sorter.orderBy = undefined;
    isLoading.value = true;
    await request({
      limit: paginationReactive.pageSize,
      offset: (paginationReactive.page - 1) * paginationReactive.pageSize,
      status: OrderStatusV2Enum.READY,
    }).finally(() => {
      isLoading.value = false;
    });
  }
}

async function handlePageChange(page: number) {
  paginationReactive.page = page;
  isLoading.value = true;
  await request({
    limit: paginationReactive.pageSize,
    offset: (paginationReactive.page - 1) * paginationReactive.pageSize,
    status: OrderStatusV2Enum.READY,
    orderDirection: sorter.orderDirection,
    orderBy: sorter.orderBy,
  }).finally(() => {
    isLoading.value = false;
  });
}
</script>

<template>
  <div class="admin-stat-ready">
    <NDivider title-placement="left">Выполненные заказы</NDivider>
    <div class="admin-stat-ready__table">
      <div class="table-orders-ready">
        <NDataTable
          remote
          :loading="isLoading"
          :single-line="false"
          :data="orders"
          :columns="columns"
          :pagination="paginationReactive"
          @update:sorter="handleSorterChange"
          @update:page="handlePageChange"
          :bordered="true"
        />
      </div>
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

    <NModal v-model:show="breakModal.isShow">
      <NCard style="width: 600px">
        <FormOrderToBreak :id="breakModal.id" @done="breakDone()" />
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
