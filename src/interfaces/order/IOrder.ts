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
  type: IOrderType;
  status: OrderStatusEnum;
  order_stages: IStage[];
  code: string;
  rating: number;
}
