import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useOrdersWorkStore } from '@/store/orders/orders-work.store.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

const orderWorkStore = useOrdersWorkStore();

export interface IOrderWorkUpdateValues {
  name?: string;
  type_id?: number;
  price?: number;
  comment?: string;
  departments?: number[] | null;
}

export interface IOrderWorkUpdateConf extends IFormConf<IOrderWorkUpdateValues> {
  options: Ref<SelectOption[]>;
  optionsType: Ref<SelectOption[]>;
  isDepartmentsChange: Ref<boolean>;
}

export function useOrderWorkUpdateFormConf(id: number): IOrderWorkUpdateConf {
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
      message: 'Введите длину неона',
    },
  };

  const options = ref<SelectOption[]>([]);
  const optionsType = ref<SelectOption[]>([]);

  const isDepartmentsChange = ref<boolean>(false);

  const formValues = reactive<IOrderWorkUpdateValues>({
    name: '',
    type_id: NaN,
    price: 0,
    comment: '',
    departments: null,
  });

  onMounted(async () => {

    const orderTypesStore = useOrderTypesStore();
    optionsType.value = await orderTypesStore.getForSelect();
    formValues.type_id = optionsType.value[0].value as number;


    const order = orderWorkStore.findById(id);
    if (order) {
      formValues.name = order.name;
      formValues.type_id = order.type.id;
      formValues.price = order.price;
      formValues.comment = order.comment;
      formValues.departments = [];
      order.departments.forEach((department) => {
        formValues.departments!.push(department.id);
      });
    }

    const departmentsStore = useDepartmentsStore();
    await departmentsStore.request();
    departmentsStore.departments.forEach((department) => {
      options.value.push({
        label: department.name,
        value: department.id,
      });
    });
  });

  return {
    rules,
    options,
    isDepartmentsChange,
    formValues,
    optionsType,
  };
}
