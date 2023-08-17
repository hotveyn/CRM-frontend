import { defineStore } from 'pinia';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';
import { useUsersStore } from '@/store/users.store.ts';

const userService = useUserService();
interface State {
  users: IUser[];
  touched: boolean;
}

export const useFiredUsersStore = defineStore('fired-users', {
  state: (): State => {
    return {
      users: [],
      touched: false,
    };
  },

  actions: {
    async getOrRequest() {
      if (!this.touched) {
        this.users = await userService.getAllFired();
        this.touched = true;
      }
      return this.users;
    },

    async unfire(userId: number) {
      const usersStore = useUsersStore();

      this.users = this.users.filter((user: IUser) => {
        if (user.id === userId) {
          usersStore.users.push(user);
          userService.unfire(userId);
          return false;
        }
        return true;
      });
    },
  },
});
