import { reactive } from 'vue';
import { IOrderCreateValues } from '@/interfaces/form/order/create/IOrderCreateValues.ts';
import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { ref } from 'vue';
import { IOrderCreateConf } from '@/interfaces/form/order/create/IOrderCreateConf.ts';

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
    neon_length: {
      required: true,
      message: 'Введите длину неона',
    },
    type: {
      required: true,
      message: 'Введите тип вывески',
    },
  };

  const isReclamation = ref<boolean>(false);

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

  const formValues = reactive<IOrderCreateValues>({
    name: '',
    date_start: '2023-07-13',
    date_end: '2023-07-23',
    neon_length: 1,
    type: OrderTypeEnum.NEON1,
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
