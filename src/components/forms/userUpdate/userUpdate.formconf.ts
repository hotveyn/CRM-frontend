import { IUserUpdateConf } from '@/interfaces/form/user-update/IUserUpdateConf.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, ref } from 'vue';
import { IUserUpdateValues } from '@/interfaces/form/user-update/IUserUpdateValues.ts';
import { useUsersStore } from '@/store/users.store.ts';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';

export function useUserUpdateFormConf(userId: number): IUserUpdateConf {
  const rules: FormRules = {
    departments: {
      required: true,
      message: 'Выберите хотя бы 1 депортамент',
    },
  };
  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IUserUpdateValues>({
    code: '',
    lastName: '',
    firstName: '',
    patronymicName: '',
    startWorkDate: '2004-07-13',
    departments: null,
    login: '',
    password: '',
  });

  onMounted(async () => {
    const userStore = useUsersStore();
    const departmentsStore = useDepartmentsStore();
    const userToChange: IUser = userStore.findById(userId) as IUser;

    formValues.code = userToChange.code;
    formValues.lastName = userToChange.last_name;
    formValues.firstName = userToChange.first_name;
    formValues.patronymicName = userToChange.patronymic_name;
    formValues.startWorkDate = userToChange.start_work_date;
    formValues.departments = [];
    formValues.login = userToChange.login;

    userToChange.departments?.forEach((department) => {
      formValues.departments?.push(department.id);
    });

    await departmentsStore.request();
    departmentsStore.departments.forEach((department) => {
      options.value.push({
        label: department.name,
        value: department.id,
      });
    });
  });
  return {
    rules,
    formValues,
    options,
  };
}
