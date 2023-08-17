import { IUser } from '@/interfaces/user/IUser.ts';

export interface IDepartment {
  id: number;
  name: string;
  users?: IUser[];
}
