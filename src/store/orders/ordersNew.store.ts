import { defineStore } from 'pinia';
import { useOrderService } from '@/services/order.service.ts';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';
import { IOrderCreateValues } from '@/interfaces/form/order/create/IOrderCreateValues.ts';

const orderService = useOrderService();
const message = useMessageService();
interface State {
  orders: IOrder[];
}

export const useOrdersNewStore = defineStore('orders-new', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getNew();
    },
    async remove(id: number) {
      orderService
        .remove(id)
        .then(() => {
          message.order.removed();
          this.orders = this.orders.filter((order) => {
            return order.id !== id;
          });
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    async toWork(id: number, departments: number[]) {
      orderService
        .setWork(id, departments)
        .then(() => {
          message.order.toWork();
          this.orders = this.orders.filter((order) => {
            return order.id !== id;
          });
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    findById(id: number) {
      return this.orders.find((order) => order.id === id);
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
    async create(formValues: IOrderCreateValues) {
      orderService
        .create(formValues)
        .then((res) => {
          message.order.created();

          this.orders.push(res);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
