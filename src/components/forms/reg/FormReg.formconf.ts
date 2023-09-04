import { onMounted, reactive, ref } from 'vue';
import { useDepartmentsService } from '@/services/departments.service.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { IRegValues } from '@/interfaces/form/reg/IRegValues.ts';
import { IRegConf } from '@/interfaces/form/reg/IRegConf.ts';

export function useRegFormConf(): IRegConf {
  const { getDepartments } = useDepartmentsService();
  const rules: FormRules = {
    code: {
      required: false,
      message: 'Введите номер пользователя',
    },
    lastName: {
      required: true,
      message: 'Введите фамилию пользователя',
    },
    firstName: {
      required: true,
      message: 'Введите имя пользователя',
    },
    patronymicName: {
      required: true,
      message: 'Введите отчество пользователя',
    },
    startWorkDate: {
      required: true,
      message: 'Введите дату устройства на работу',
    },
    departments: {
      required: true,
      message: 'Выберите хотя бы 1 депортамент',
    },
    login: {
      required: true,
      message: 'Введите email пользователя',
    },
    password: {
      required: true,
      message: 'Введите пароль пользователя',
    },
  };
  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IRegValues>({
    code: '',
    lastName: '',
    firstName: '',
    patronymicName: '',
    startWorkDate: null,
    departments: null,
    login: '',
    password: '',
  });

  //TODO: from department store
  onMounted(async () => {
    const res = await getDepartments();
    if (res) {
      res.forEach((department) => {
        options.value.push({
          label: department.name,
          value: department.id,
        });
      });
    }
  });

  return {
    rules,
    formValues,
    options,
  };
}
