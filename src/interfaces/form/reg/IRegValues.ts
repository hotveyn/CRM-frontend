import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';

export interface IRegValues {
  login: string;
  password: string;
  code: string;
  lastName: string;
  firstName: string;
  patronymicName: string;
  role: UserRoleEnum;
  startWorkDate: string | null;
  departments: number[] | null;
}
