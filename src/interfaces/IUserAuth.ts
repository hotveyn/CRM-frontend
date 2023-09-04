import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';

export interface IUserAuth {
  id: number;
  login: string;
  role: UserRoleEnum;
}
