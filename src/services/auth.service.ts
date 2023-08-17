import { IRegValues } from '@/interfaces/form/reg/IRegValues.ts';
import { ILoginValues } from '@/interfaces/form/login/ILoginValues.ts';
import { api } from '@/axios';
import { useAuthStore } from '@/store/auth.store.ts';

export function useAuthService() {
  async function employeeReg(formValues: IRegValues) {
    const payload = {
      login: formValues.login,
      password: formValues.password,
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      patronymic_name: formValues.patronymicName,
      start_work_date: formValues.startWorkDate,
      code: formValues.code,
      departments: formValues.departments,
    };

    return await api.post('auth/reg-employee', payload);
  }

  function logout() {
    const userStore = useAuthStore();
    userStore.removeToken();
  }

  async function login(formValues: ILoginValues) {
    return await api.post('auth/login', formValues);
  }
  return {
    employeeReg,
    logout,
    login,
  };
}
