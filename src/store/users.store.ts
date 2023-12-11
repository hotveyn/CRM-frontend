import { defineStore } from 'pinia';
import { IUser } from '@/interfaces/user/IUser.ts';
import { useUserService } from '@/services/user.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import {IUserUpdateValues} from "components/forms/userUpdate/userUpdate.formconf.ts";
import {IRegValues} from "components/forms/reg/FormReg.formconf.ts";

const userService = useUserService();
const message = useMessageService();

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
    async request() {
      this.users = await userService.getAll();
      this.touched = true;
    },
    async fire(userId: number) {
      userService
        .fire(userId)
        .then(() => {
          message.user.fire();
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });

      this.users = this.users.filter((user: IUser) => {
        return user.id !== userId;
      });
    },
    async employeeReg(user: IRegValues) {
      userService
        .employeeReg(user)
        .then(() => {
          message.user.reg();
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    async update(userId: number, formValues: IUserUpdateValues) {
      userService
        .update(userId, formValues)
        .then(() => {
          message.user.updated();

          const departmentsStore = useDepartmentsStore();
          for (const i in this.users) {
            if (this.users[i].id === userId) {
              this.users[i].code = formValues.code;
              this.users[i].code = formValues.code;
              this.users[i].last_name = formValues.lastName;
              this.users[i].first_name = formValues.firstName;
              this.users[i].patronymic_name = formValues.patronymicName;
              this.users[i].start_work_date = formValues.startWorkDate;
              this.users[i].departments = [];

              formValues.departments?.forEach((departmentId) => {
                const department = departmentsStore.findById(departmentId);
                console.log(departmentId, department);
                if (department) this.users[i].departments?.push(department);
              });

              break;
            }
          }
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    findById(id: number): IUser | undefined {
      return this.users.find((user) => {
        return user.id === id;
      });
    },
  },
});
