import { defineStore } from 'pinia';
import { IOrderReclamation } from '@/interfaces/order/IOrderReclamation.ts';
import { useOrderService } from '@/services/order.service.ts';

const orderService = useOrderService();

interface State {
  orders: IOrderReclamation[];
}
export const useOrdersReclamationStore = defineStore('order-reclamation', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getCompletedReclamations();
    },
  },
});
