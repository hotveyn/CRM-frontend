import { IUser } from '@/interfaces/user/IUser.ts';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { IBreak } from '@/interfaces/break/IBreak.ts';

export interface IStage {
  id: number;
  user_id?: number;
  department_id?: number;
  break_id?: number;
  is_active: boolean;
  in_order: number;
  percent: number;
  user?: IUser;
  order: IOrder;
  break: IBreak;
  department: IDepartment;
}

export interface IStageV2 {
  id: number;
  userId: number | null;
  orderId: number;
  departmentId: number | null;
  breakId: number | null;
  isActive: boolean | null;
  inOrder: number;
  createdAt: Date;
  updatedAt: Date;
  readyDate: Date | null;
  percent: number;
}
