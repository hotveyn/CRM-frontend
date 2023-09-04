import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, ref } from 'vue';
import { IOrderNewUpdateConf } from '@/interfaces/form/order/update/IOrderNewUpdateConf.ts';
import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';
import { useOrdersBreakStore } from '@/store/orders/ordersBreak.store.ts';

const ordersBreakStore = useOrdersBreakStore();

export function useOrderBreakUpdateFormConf(id: number): IOrderNewUpdateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название заказа',
    },
    type: {
      required: true,
      message: 'Выбирете тип заказа',
    },
    neon_length: {
      required: true,
      message: 'Введите длину неона',
    },
  };
  const options = ref<SelectOption[]>([
    {
      label: OrderTypeEnum.NEON1,
      value: OrderTypeEnum.NEON1,
    },
    {
      label: OrderTypeEnum.NEON2,
      value: OrderTypeEnum.NEON2,
    },
    {
      label: OrderTypeEnum.NEON_SMART,
      value: OrderTypeEnum.NEON_SMART,
    },
    {
      label: OrderTypeEnum.NEON2_STREET,
      value: OrderTypeEnum.NEON2_STREET,
    },
  ]);

  const formValues = reactive<IOrderNewUpdateValues>({
    name: '',
    type: OrderTypeEnum.NEON1,
    neon_length: 0,
    comment: '',
  });

  onMounted(async () => {
    const order = ordersBreakStore.findById(id);
    if (order) {
      formValues.name = order.name;
      formValues.type = order.type;
      formValues.neon_length = order.neon_length;
      formValues.comment = order.comment;
    }
  });

  return {
    rules,
    options,
    formValues,
  };
}
