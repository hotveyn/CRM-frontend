import { UserRoleEnum } from '@/enums/user-role.enum.ts';

export interface IUserAuth {
  id: number;
  login: string;
  role: UserRoleEnum;
}
