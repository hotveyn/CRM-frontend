import { IOrder } from '@/interfaces/order/IOrder.ts';

export interface IOrderReclamation extends IOrder {
  reclamation_number: number;
}
