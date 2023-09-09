import { ILoginValues } from '@/interfaces/form/login/ILoginValues.ts';
import { api } from '@/axios';
import { useAuthStore } from '@/store/auth.store.ts';

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
