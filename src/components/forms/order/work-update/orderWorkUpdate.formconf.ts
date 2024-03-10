import { FormRules, SelectOption, FormItemRule } from 'naive-ui';
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
  departments?: { percent?: number; department_id?: number }[];
}

export interface IOrderWorkUpdateConf extends IFormConf<IOrderWorkUpdateValues> {
  options: Ref<SelectOption[]>;
  optionsType: Ref<SelectOption[]>;
  isDepartmentsChange: Ref<boolean>;
  dynamicInputRule: FormItemRule;
  onCreateInp(): { department_id?: number; percent?: number };
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

  const dynamicInputRule: FormItemRule = {
    trigger: 'input',
    validator(_: unknown, value: string) {
      console.log(value);
      if (!value) return new Error('Сделайте выбор');
      return true;
    },
  };

  const options = ref<SelectOption[]>([]);
  const optionsType = ref<SelectOption[]>([]);

  const isDepartmentsChange = ref<boolean>(false);

  const formValues = reactive<IOrderWorkUpdateValues>({
    name: '',
    type_id: undefined,
    price: 0,
    comment: '',
    departments: [
      {
        department_id: undefined,
        percent: undefined,
      },
    ],
  });

  onMounted(async () => {
    const orderTypesStore = useOrderTypesStore();
    const departmentsStore = useDepartmentsStore();
    await Promise.all([orderTypesStore.request(), departmentsStore.request()]);
    optionsType.value = orderTypesStore.selected;
    console.log(optionsType.value);
    console.log(departmentsStore.departments);

    const order = orderWorkStore.findById(id);
    if (order) {
      formValues.name = order.name;
      formValues.price = order.price;
      formValues.comment = order.comment;
      if (order.type) {
        formValues.type_id = order.type.id;
      }

      formValues.departments = order.order_stages.map((order_stage) => {
        return {
          department_id: +order_stage.department_id!,
          percent: order_stage.percent,
        };
      });
    }

    departmentsStore.departments.forEach((department) => {
      options.value.push({
        label: department.name,
        value: department.id,
      });
    });
  });

  function onCreateInp() {
    return {
      department_id: undefined,
      percent: undefined,
    };
  }

  return {
    rules,
    options,
    isDepartmentsChange,
    formValues,
    dynamicInputRule,
    optionsType,
    onCreateInp,
  };
}
