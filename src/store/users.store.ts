import { defineStore } from 'pinia';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';
import { useFiredUsersStore } from '@/store/firedUsers.store.ts';

const userService = useUserService();
interface State {
  users: IUser[];
  touched: boolean;
}

export const useUsersStore = defineStore('users', {
  state: (): State => {
    return {
      users: [],
      touched: false,
    };
  },
  actions: {
    async getOrRequest() {
      if (!this.touched) {
        this.users = await userService.getAll();
        this.touched = true;
      }
      return this.users;
    },

    async fire(userId: number) {
      const firedUsersStore = useFiredUsersStore();

      this.users = this.users.filter((user: IUser) => {
        if (user.id === userId) {
          firedUsersStore.users.push(user);
          userService.fire(userId);
          return false;
        }
        return true;
      });
    },
  },
});
