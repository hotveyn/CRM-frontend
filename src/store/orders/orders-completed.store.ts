import { defineStore } from 'pinia';
import { useOrderService } from '@/services/order.service.ts';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { useMessageService } from '@/services/message.service.ts';

const orderService = useOrderService();
const message = useMessageService();

interface State {
  orders: IOrder[];
}

export const useOrdersCompletedStore = defineStore('orders-completed', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getCompleted();
    },
    findById(id: number) {
      return this.orders.find((order) => order.id === id);
    },
    async setRating(id: number, rating: number) {
      await orderService
        .setRating(id, rating)
        .then(() => {
          message.order.rated();

          for (const i in this.orders) {
            if (this.orders[i].id === id) {
              this.orders[i].rating = rating;
              break;
            }
          }
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
