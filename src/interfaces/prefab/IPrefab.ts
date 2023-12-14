import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';

export interface IPrefab {
  id: number;
  name: string;
  comment: string;
  price: number;
  type: IOrderType;
  type_id: number;
}
