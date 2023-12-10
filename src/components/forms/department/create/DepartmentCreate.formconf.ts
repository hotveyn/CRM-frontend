import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules } from 'naive-ui';
import { reactive } from 'vue';

export interface IDepartmentCreateValues {
  name: string;
}

export function useDepartmentCreateFormConf(): IFormConf<IDepartmentCreateValues> {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название отдела',
    },
  };
  const formValues = reactive<IDepartmentCreateValues>({
    name: '',
  });

  return {
    rules,
    formValues,
  };
}
