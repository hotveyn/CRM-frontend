import { api } from '@/axios';
import { useAuthStore } from '@/store/auth.store.ts';
import { ILoginValues } from 'components/forms/login/FormLogin.formconf.ts';

export function useAuthService() {
  return {
    logout() {
      const userStore = useAuthStore();
      userStore.removeToken();
    },
    async login(formValues: ILoginValues) {
      return await api.post('auth/login', formValues);
    },
  };
}
