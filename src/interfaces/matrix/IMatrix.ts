import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IMatrix {
  percent: number,
  order_type_id: string | number,
  department_id: string | number,
  order_type: IOrderType
  department: IDepartment
}