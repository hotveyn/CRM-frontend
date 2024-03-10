import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules } from 'naive-ui';
import { reactive } from 'vue';

export interface IOrderTypeUpdateValues {
  name: string;
}

export function useOrderTypeUpdateFormConf(name: string): IFormConf<IOrderTypeUpdateValues> {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название типа вывески',
    },
  };

  const formValues = reactive<IOrderTypeUpdateValues>({
    name,
  });

  return {
    rules,
    formValues,
  };
}
