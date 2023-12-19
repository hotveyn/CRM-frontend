import { defineStore } from 'pinia';
import { useOrderService } from '@/services/order.service.ts';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IOrderCreateValues } from 'components/forms/order/create/orderCreate.formconf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';
import { IOrderNewUpdateValues } from 'components/forms/order/new-update/orderNewUpdate.formconf.ts';
import { IToWorkValues } from 'components/forms/order/towork/toWork.formconf.ts';
import { IOrderPrefabCreateValues } from 'components/forms/order/prefab-create/orderPrefabCreate.formconf.ts';

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
    async toWork(id: number, departments: IToWorkValues[]) {
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
        .then(async () => {
          message.order.updated();

          const order = this.findById(id);
          const orderTypesStore = useOrderTypesStore();
          const orderType = await orderTypesStore.findById(formValues.type_id!);
          if (order) {
            order.name = formValues.name;
            order.type = orderType!;
            order.price = formValues.price;
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
    async createByPrefab(formValues: IOrderPrefabCreateValues) {
      orderService
        .createByPrefab(formValues)
        .then((res) => {
          message.order.created();

          this.orders.push(res);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
