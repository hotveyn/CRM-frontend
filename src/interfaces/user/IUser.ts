import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';

export interface IUser {
  id: number;
  code: string;
  password: string;
  login: string;
  last_name: string;
  first_name: string;
  role: UserRoleEnum;
  patronymic_name: string;
  start_work_date: string;
  departments?: IDepartment[];
}
export interface IUserV2 {
  id: number;
  code: string;
  password: string;
  login: string;
  lastName: string;
  firstName: string;
  role: UserRoleEnum;
  patronymicName: string;
  startWorkDate: string;
}

export enum UsersEnum {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  FIRED = 'FIRED',
  STORAGE = 'STORAGE',
}
