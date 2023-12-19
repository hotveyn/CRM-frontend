import { defineStore } from 'pinia';
import { useAuthService } from '@/services/auth.service.ts';
import { IUserAuth } from '@/interfaces/IUserAuth.ts';
import jwtDecode from 'jwt-decode';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';
import { useMessageService } from '@/services/message.service.ts';
import { router } from '@/router/router.ts';
import { ILoginValues } from 'components/forms/login/FormLogin.formconf.ts';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';

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

const userService = useUserService();
const authService = useAuthService();
const message = useMessageService();

interface State {
  user: IUserAuth | null;
  profile?: IUser;
  token: string | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      token: getLocalStorageToken(),
      profile: undefined,
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
      this.profile = undefined;
      await router.push({ name: 'login' });
    },
    async login(formValues: ILoginValues) {
        const res = await authService.login(formValues)
        if (!res) {
          message.auth.failedLogin()
          return
        }
        this.setToken(res.data.token);
        message.auth.login();
        this.profile = await userService.getProfile();
        return true;
    },
    async getProfile() {
      this.profile = await userService.getProfile();
    },
  },
});
