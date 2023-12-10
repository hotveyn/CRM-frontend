import { reactive } from 'vue';
import { FormRules } from 'naive-ui';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

export interface ILoginValues {
  login: string;
  password: string;
}

export function useFormLogin(): IFormConf<ILoginValues> {
  const rules: FormRules = {
    login: {
      required: true,
      message: 'Введите свой email',
    },
    password: {
      required: true,
      message: 'Введите свой пароль',
    },
  };

  const formValues = reactive<ILoginValues>({
    login: '',
    password: '',
  });

  return {
    rules,
    formValues,
  };
}
