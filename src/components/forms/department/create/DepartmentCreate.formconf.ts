import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IDepartmentCreateValues } from '@/interfaces/form/department/IDepartmentCreateValues.ts';
import { FormRules } from 'naive-ui';
import { reactive } from 'vue';

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
