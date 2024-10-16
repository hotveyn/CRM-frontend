<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { DataTableColumns, NDatePicker, NDivider, NSkeleton } from 'naive-ui';
import { IDepartmentPayment } from '@/interfaces/stat/IStatPayment.ts';
import { useStatPaymentStore } from '@/store/stat/stat-payment.store.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import TablePayment from 'components/tables/stat/payment/TablePayment.vue';

const departmentsColumns = ref<DataTableColumns<IDepartmentPayment>>([]);
const statPaymentStore = useStatPaymentStore();
const departmentsStore = useDepartmentsStore();
const isLoading = ref(true);

const dateNowMinusOneMonth = Date.now() - 2678400000;

const range = ref<[number, number]>([dateNowMinusOneMonth, Date.now()]);

const start = computed(() => {
  const date = new Date(range.value[0])
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return date.toISOString();
});
const end = computed(() => {
  const date = new Date(range.value[1])
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return date.toISOString();
});

onMounted(async () => {
  await statPaymentStore.request(start.value, end.value);
  await departmentsStore.request();

  departmentsColumns.value = departmentsStore.departments.map((department) => {
    return {
      title: department.name,
      key: `${department.id}.sum`,
      sorter: 'default' as const,
    };
  });

  isLoading.value = false;
});

watch(end, async () => {
  await statPaymentStore.request(start.value, end.value);
});
</script>

<template>
  <div class="admin-stat-payment">
    <NDivider title-placement="left">Оплата</NDivider>
    <div class="date-range" style="margin-bottom: 30px">
      <NDatePicker v-model:value="range" type="daterange" />
    </div>
    <div class="admin-stat-payment__table">
      <NSkeleton v-if="isLoading" :width="'100%'" height="52px" :sharp="false" text size="medium" :repeat="5" />
      <TablePayment v-else :table-data="statPaymentStore.stat" :department-columns="departmentsColumns" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin-stat-payment {
  display: grid;
  grid-template-columns: 1fr;
}
</style>