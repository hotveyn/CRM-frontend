import { defineStore } from 'pinia';
import { useOrderService } from '@/services/order.service.ts';
import { IOrderBreak } from '@/interfaces/order/IOrderBreak.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';

const orderService = useOrderService();
const message = useMessageService();
interface State {
  orders: IOrderBreak[];
}

export const useOrdersBreakStore = defineStore('orders-break', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getBreak();
    },
    async stop(id: number) {
      orderService
        .setStop(id)
        .then(() => {
          message.order.stopped();
          this.orders = this.orders.filter((order) => order.id !== id);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    findById(id: number) {
      return this.orders.find((order) => order.id === id);
    },
    async restore(id: number) {
      orderService
        .restore(id)
        .then(() => {
          message.order.restore();
          this.orders = this.orders.filter((order) => order.id !== id);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    async update(id: number, formValues: IOrderNewUpdateValues) {
      orderService
        .update(id, formValues)
        .then(() => {
          message.order.updated();

          const order = this.findById(id);
          if (order) {
            order.name = formValues.name;
            order.type = formValues.type;
            order.neon_length = formValues.neon_length;
            order.comment = formValues.comment;
          }
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
