import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IOrderWork extends IOrder {
  current_department: IDepartment;
  departments: IDepartment[];
}
