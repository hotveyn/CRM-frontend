import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';

export interface IOrderWorkUpdateValues {
  name: string;
  type: OrderTypeEnum;
  neon_length: number;
  comment?: string;
  departments?: number[] | null;
}
