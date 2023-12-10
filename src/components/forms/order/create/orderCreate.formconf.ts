import { onMounted, reactive, Ref } from 'vue';
import { FormRules, SelectOption } from 'naive-ui';
import { ref } from 'vue';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

export interface IOrderCreateValues {
  name: string;
  date_start: string;
  date_end: string;
  price: number;
  type_id: number;
  comment?: string;
  reclamation_number?: string;
}

export interface IOrderCreateConf extends IFormConf<IOrderCreateValues> {
  options: Ref<SelectOption[]>;
  isReclamation: Ref<boolean>;
}

export function useOrderCreateFormConf(): IOrderCreateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название заказа',
    },
    date_start: {
      required: true,
      message: 'Введите дату начала',
    },
    date_end: {
      required: true,
      message: 'Введите дату сдачи',
    },
    price: {
      required: true,
      message: 'Введите длину неона',
    },
    type_id: {
      required: true,
      message: 'Выберите тип вывески',
    },
  };

  const isReclamation = ref<boolean>(false);

  const options = ref<SelectOption[]>([]);

  onMounted(async ()=>{
    const orderTypesStore = useOrderTypesStore();
    options.value = await orderTypesStore.getForSelect()
    formValues.type_id = options.value[0].value as number;
  })

  const formValues = reactive<IOrderCreateValues>({
    name: '',
    date_start: '2023-07-13',
    date_end: '2023-07-23',
    price: 1,
    type_id: NaN,
    comment: '',
    reclamation_number: '',
  });

  return {
    rules,
    isReclamation,
    options,
    formValues,
  };
}
