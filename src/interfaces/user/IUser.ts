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
