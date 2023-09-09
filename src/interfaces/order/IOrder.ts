import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';
import { OrderStatusEnum } from '@/enums/order/OrderStatus.enum.ts';
import { IStage } from '@/interfaces/stage/IStage.ts';

export interface IOrder {
  id: number;
  name: string;
  date_start: string;
  date_end: string;
  comment?: string;
  neon_length: number;
  type: OrderTypeEnum;
  status: OrderStatusEnum;
  order_stages: IStage[];
  code: string;
  rating: number;
}
