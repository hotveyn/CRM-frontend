import { OrderStatusEnum } from '@/enums/order/OrderStatus.enum.ts';
import { IStage } from '@/interfaces/stage/IStage.ts';
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';

export interface IOrder {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  comment?: string;
  price: number;
  type_id: number;
  type: IOrderType;
  status: OrderStatusEnum;
  order_stages: IStage[];
  code: string;
  rating: number;
}
export interface IOrderV2 {
  id: number;
  name: string;
  dateStart: string;
  dateEnd: string;
  comment?: string;
  price: number;
  typeId: number;
  status: OrderStatusEnum;
  code: string;
  rating: number;
}
