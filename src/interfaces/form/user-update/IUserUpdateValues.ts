// import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IUserUpdateValues {
  login: string;
  password: string;
  code: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
  startWorkDate: string;
  departments?: number[] | null;
}
