import { defineStore } from 'pinia';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';
import { useMessageService } from '@/services/message.service.ts';

const userService = useUserService();
const message = useMessageService();
interface State {
  users: IUser[];
  touched: boolean;
}

export const useFiredUsersStore = defineStore('fired-employees', {
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
    async request() {
      this.users = await userService.getAllFired();
      this.touched = true;
    },
    async unfire(userId: number) {
      userService
        .unfire(userId)
        .then(() => {
          message.user.unfire();
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });

      this.users = this.users.filter((user: IUser) => {
        return user.id !== userId;
      });
    },
  },
});
