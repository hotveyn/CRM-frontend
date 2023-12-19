import { IResponse } from '@/interfaces/axios/IResponse.ts';
import { IUser } from '@/interfaces/user/IUser.ts';
import { api } from '@/axios';
import {IRegValues} from "components/forms/reg/FormReg.formconf.ts";
import {IUserUpdateValues} from "components/forms/userUpdate/userUpdate.formconf.ts";

export function useUserService() {
  return {
    async getAll() {
      const res: IResponse<IUser[]> = await api.get('user');
      return res.data as IUser[];
    },
    async getProfile() {
      const res: IResponse<IUser> = await api.get('user/profile');
      return res.data as IUser;
    },
    async getAllFired() {
      const res: IResponse<IUser[]> = await api.get('user/fired');
      return res.data as IUser[];
    },
    async employeeReg(formValues: IRegValues) {
      const payload = {
        login: formValues.login,
        password: formValues.password,
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        patronymic_name: formValues.patronymicName,
        start_work_date: formValues.startWorkDate,
        code: formValues.code,
        role: formValues.role,
        departments: formValues.departments,
      };

      const res = await api.post('auth/reg', payload);

      return res.data as IUser;
    },
    async fire(userId: number) {
      const res: IResponse<IUser[]> = await api.patch(`user/${userId}/fire`);
      return res.data as IUser[];
    },
    async update(userId: number, formValues: IUserUpdateValues) {
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

      const res = await api.patch(`user/${userId}`, payload);

      return res.data as IUser;
    },
    async unfire(userId: number) {
      const res: IResponse<IUser[]> = await api.patch(`user/${userId}/unfire`);
      return res.data as IUser[];
    },
  };
}
