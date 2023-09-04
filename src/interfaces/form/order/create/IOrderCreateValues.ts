import { OrderTypeEnum } from '@/enums/order/OrderType.enum.ts';

export interface IOrderCreateValues {
  name: string;
  date_start: string;
  date_end: string;
  neon_length: number;
  type: OrderTypeEnum;
  comment?: string;
  reclamation_number?: string;
}
