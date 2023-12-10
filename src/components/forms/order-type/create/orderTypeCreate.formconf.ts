import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules } from 'naive-ui';
import { reactive } from 'vue';

export interface IOrderTypeCreateValues {
  name: string;
}

export function useOrderTypeCreateFormConf(): IFormConf<IOrderTypeCreateValues>{
  const rules: FormRules ={
    name: {
      required: true,
      message: 'Введите название типа вывески',
    }
  }

  const formValues = reactive<IOrderTypeCreateValues>({
    name: ''
  })

  return {
    rules,
    formValues
  }
}