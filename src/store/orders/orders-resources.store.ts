import { defineStore } from 'pinia';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { useOrderService } from '@/services/order.service.ts';
import { useMessageService } from '@/services/message.service.ts';

const orderService = useOrderService();
const message = useMessageService();
interface State {
  ordersNew: IOrder[];
  ordersEnough: IOrder[];
  ordersNotEnough: IOrder[];
}

export const useOrdersResourcesStore = defineStore('order-resources', {
  state: (): State => {
    return {
      ordersNew: [],
      ordersEnough: [],
      ordersNotEnough: [],
    };
  },
  actions: {
    async requestNew() {
      this.ordersNew = await orderService.getAllNewResources();
    },
    async requestEnough() {
      this.ordersEnough = await orderService.getAllEnoughResources();
    },
    async requestNotEnough() {
      this.ordersNotEnough = await orderService.getAllNotEnoughResources();
    },
    async setEnough(id: number) {
      orderService.setResourcesEnough(id).then(() => {
        message.order.resourcesEnough();

        this.ordersNew = this.ordersNew.filter((order) => order.id !== id);

        this.ordersNotEnough = this.ordersNotEnough.filter((order) => order.id !== id);
      });
    },
    async setNotEnough(id: number) {
      orderService.setResourcesNotEnough(id).then(() => {
        message.order.resourcesNotEnough();

        this.ordersNew = this.ordersNew.filter((order) => order.id !== id);

        this.ordersEnough = this.ordersEnough.filter((order) => order.id !== id);
      });
    },
    async setResourcesNull(id: number) {
      orderService.setResourcesNull(id).then(() => {
        message.order.resourcesNull();

        this.ordersNotEnough = this.ordersNotEnough.filter((order) => order.id !== id);

        this.ordersEnough = this.ordersEnough.filter((order) => order.id !== id);
      });
    },
  },
});
