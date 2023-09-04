import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';

export interface IOrderNewUpdateValues {
  name: string;
  type: OrderTypeEnum;
  neon_length: number;
  comment?: string;
}
