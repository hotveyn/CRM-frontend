import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IRegValues {
  login: string;
  password: string;
  code: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
  startWorkDate: number | null;
  departments: IDepartment[] | null;
}
