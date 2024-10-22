import { IUser } from '@/interfaces/user/IUser.ts';
import { IStage } from '@/interfaces/stage/IStage.ts';

export interface IDepartment {
  id: number;
  name: string;
  users?: IUser[];
  orderStages: IStage[];
}


export interface IDepartmentV2 {
  id: number;
  name: string;
}
