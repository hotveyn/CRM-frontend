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
  user?: IUser;
  order: IOrder;
  break: IBreak;
  department: IDepartment;
}
