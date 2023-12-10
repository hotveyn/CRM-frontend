import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules } from 'naive-ui';
import { onMounted, reactive } from 'vue';
import { useOrdersCompletedStore } from '@/store/orders/orders-completed.store.ts';

export interface IOrderRateValues {
  rating: number;
}

export function useOrderRateFormConf(id: number): IFormConf<IOrderRateValues> {
  const rules: FormRules = {
    rating: {
      required: true,
      message: 'Оцените заказ',
    },
  };

  const formValues = reactive<IOrderRateValues>({
    rating: 0,
  });

  onMounted(() => {
    const ordersCompletedStore = useOrdersCompletedStore();
    const order = ordersCompletedStore.findById(id);
    if (order) {
      formValues.rating = order.rating;
    }
  });

  return {
    rules,
    formValues,
  };
}
