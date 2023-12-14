import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useOrdersBreakStore } from '@/store/orders/orders-break.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

const ordersBreakStore = useOrdersBreakStore();

export interface IOrderNewUpdateValues {
  name: string;
  type_id?: number;
  price: number;
  comment?: string;
}

export interface IOrderNewUpdateConf extends IFormConf<IOrderNewUpdateValues> {
  options: Ref<SelectOption[]>;
}

export function useOrderBreakUpdateFormConf(id: number): IOrderNewUpdateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название заказа',
    },
    type_id: {
      required: true,
      message: 'Выбирете тип заказа',
    },
  };
  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IOrderNewUpdateValues>({
    name: '',
    type_id: undefined,
    price: 0,
    comment: '',
  });

  onMounted(async () => {
    const orderTypesStore = useOrderTypesStore();
    options.value = await orderTypesStore.getForSelect();
    formValues.type_id = options.value[0].value as number;

    const order = ordersBreakStore.findById(id);
    if (order) {
      formValues.name = order.name;
      formValues.type_id = order.type.id;
      formValues.price = order.price;
      formValues.comment = order.comment;
    }
  });

  return {
    rules,
    options,
    formValues,
  };
}
