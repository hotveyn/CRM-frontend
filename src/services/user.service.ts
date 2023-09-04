import { IResponse } from '@/interfaces/axios/IResponse.ts';
import { IUser } from '@/interfaces/user/IUser.ts';
import { api } from '@/axios';
import { IRegValues } from '@/interfaces/form/reg/IRegValues.ts';
import { IUserUpdateValues } from '@/interfaces/form/user-update/IUserUpdateValues.ts';

export function useUserService() {
  async function getAll(): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.get('user');
    return res.data;
  }
  async function getAllFired(): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.get('user/fired');
    return res.data;
  }
  async function fire(userId: number): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.patch(`user/${userId}/fire`);
    return res.data;
  }
  async function unfire(userId: number): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.patch(`user/${userId}/unfire`);
    return res.data;
  }
  async function employeeReg(formValues: IRegValues) {
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

    return await api.post('auth/reg-employee', payload);
  }

  async function update(userId: number, formValues: IUserUpdateValues) {
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

    return await api.patch(`user/${userId}`, payload);
  }

  return {
    getAll,
    getAllFired,
    employeeReg,
    fire,
    update,
    unfire,
  };
}
