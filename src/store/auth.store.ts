import { defineStore } from 'pinia';
import { useAuthService } from '@/services/auth.service.ts';
import { IUserAuth } from '@/interfaces/IUserAuth.ts';
import jwtDecode from 'jwt-decode';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';
import { ILoginValues } from '@/interfaces/form/login/ILoginValues.ts';
import { useMessageService } from '@/services/message.service.ts';
import axios from 'axios';
import { router } from '@/router/router.ts';

// init
function getLocalStorageToken() {
  return localStorage.getItem('token');
}
function getDecodeLocalStorageToken(): IUserAuth | null {
  const token = localStorage.getItem('token');
  try {
    if (token) {
      return jwtDecode(token) as IUserAuth;
    }
  } catch (e) {
    return null;
  }
  return null;
}

const authService = useAuthService();
const message = useMessageService();
interface State {
  user: IUserAuth | null;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      token: getLocalStorageToken(),
      user: getDecodeLocalStorageToken(),
    };
  },

  getters: {
    isAuthenticated: (state) => !!state.token,
    userRole: (state): UserRoleEnum | undefined => {
      if (!state.user) return;
      return state.user.role;
    },
  },
  actions: {
    removeToken() {
      this.token = null;
      localStorage.removeItem('token');
      this.user = null;
    },

    setToken(newToken: string) {
      this.token = newToken;
      localStorage.setItem('token', newToken);
      this.user = jwtDecode(newToken) as IUserAuth;
    },
    async logout() {
      this.removeToken();
      message.auth.logout();
      await router.push({ name: 'login' });
    },
    async login(formValues: ILoginValues) {
      try {
        const res = await authService.login(formValues);
        this.setToken(res.data.token);
        message.auth.login();
        return true;
      } catch (e) {
        if (axios.isAxiosError(e)) message.error.custom(e.response!.data.message);
        return false;
      }
    },
  },
});
