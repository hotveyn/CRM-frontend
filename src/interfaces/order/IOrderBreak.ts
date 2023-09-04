import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IBreak } from '@/interfaces/break/IBreak.ts';

export interface IOrderBreak extends IOrder {
  break: IBreak;
}
