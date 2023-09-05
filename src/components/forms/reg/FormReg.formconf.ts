import { onMounted, reactive, ref } from 'vue';
import { useDepartmentsService } from '@/services/departments.service.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { IRegValues } from '@/interfaces/form/reg/IRegValues.ts';
import { IRegConf } from '@/interfaces/form/reg/IRegConf.ts';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';

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
    role: {
      required: true,
      message: 'Выберите роль',
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
  const optionsRoles = ref<SelectOption[]>([
    {
      label: 'Работник',
      value: UserRoleEnum.EMPLOYEE,
    },
    {
      label: 'Менеджер',
      value: UserRoleEnum.MANAGER,
    },
  ]);

  const formValues = reactive<IRegValues>({
    code: '',
    lastName: '',
    firstName: '',
    patronymicName: '',
    startWorkDate: null,
    departments: null,
    role: UserRoleEnum.EMPLOYEE,
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
    optionsRoles,
  };
}
