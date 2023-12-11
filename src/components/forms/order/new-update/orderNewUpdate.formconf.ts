import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useOrdersNewStore } from '@/store/orders/orders-new.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

const ordersNewStore = useOrdersNewStore();

export interface IOrderNewUpdateValues {
  name: string;
  price: number;
  type_id: number;
  comment?: string;
}

export interface IOrderNewUpdateConf extends IFormConf<IOrderNewUpdateValues> {
  options: Ref<SelectOption[]>;
  isPossible: { possible: boolean, why: string };
}

export function useOrderNewUpdateFormConf(id: number): IOrderNewUpdateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название заказа',
    },
    type: {
      required: true,
      message: 'Выбирете тип заказа',
    },
    price: {
      required: true,
      message: 'Введите цену вывески',
    },
  };
  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IOrderNewUpdateValues>({
    name: '',
    type_id: NaN,
    price: NaN,
    comment: '',
  });

  const isPossible = reactive({ possible: true, why: '' });

  onMounted(async () => {
    const orderTypesStore = useOrderTypesStore();
    options.value = await orderTypesStore.getForSelect();
    if (!options.value[0]) {
      isPossible.possible = false;
      isPossible.why = 'Нужен хотя бы один тип вывески';
      return;
    }
    formValues.type_id = options.value[0].value as number;

    const order = ordersNewStore.findById(id);
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
    isPossible,
  };
}
