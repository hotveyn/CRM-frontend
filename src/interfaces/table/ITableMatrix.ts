import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';
import { IMatrix } from '@/interfaces/matrix/IMatrix.ts';

export interface ITableMatrix {
  order_type: IOrderType
  [key: string]: IMatrix | IOrderType
}