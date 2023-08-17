import { defineStore } from 'pinia';
import { IUserAuth } from '@/interfaces/IUserAuth.ts';
import jwtDecode from 'jwt-decode';
import { UserRoleEnum } from '@/enums/user-role.enum.ts';

// init
function getLocalStorageToken() {
  return localStorage.getItem('token');
}
function getDecodeLocalStorageToken(): IUserAuth | null {
  const token = localStorage.getItem('token');
  if (token) {
    return jwtDecode(token) as IUserAuth;
  }
  return null;
}

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
  },
});
