import { defineStore } from 'pinia';
import { IOrderStopped } from '@/interfaces/order/IOrderStopped.ts';
import { useOrderService } from '@/services/order.service.ts';

const orderService = useOrderService();

interface State {
  orders: IOrderStopped[];
}
export const useOrdersStoppedStore = defineStore('orders-stopped', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getStop();
    },
  },
});
