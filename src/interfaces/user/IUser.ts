import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IUser {
  id: number;
  code: string;
  login: string;
  last_name: string;
  first_name: string;
  patronymic_name: string;
  start_work_date: string;
  departments?: IDepartment[];
}
