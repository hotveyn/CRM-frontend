import { defineStore } from 'pinia';
import { IOrderWork } from '@/interfaces/order/IOrderWork.ts';
import { useOrderService } from '@/services/order.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { AxiosError } from 'axios';
import { IOrderWorkUpdateValues } from 'components/forms/order/work-update/orderWorkUpdate.formconf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

const orderService = useOrderService();
const message = useMessageService();

interface State {
  orders: IOrderWork[];
}

export const useOrdersWorkStore = defineStore('orders-work', {
  state: (): State => {
    return {
      orders: [],
    };
  },
  actions: {
    async request() {
      this.orders = await orderService.getWork();
    },
    findById(id: number) {
      return this.orders.find((order) => order.id === id);
    },
    async update(id: number, formValues: IOrderWorkUpdateValues) {
      orderService
        .update(id, formValues)
        .then(async () => {
          message.order.updated();
          const departmentsStore = useDepartmentsStore();
          const order = this.findById(id);
          if (order) {
            if (formValues.name) order.name = formValues.name;
            order.comment = formValues.comment;

            if (formValues.type_id) {
              const orderTypesStore = useOrderTypesStore();
              const orderType = await orderTypesStore.findById(formValues.type_id);
              if (orderType) {
                order.type = orderType;
              }
            }

            if (formValues.departments && formValues.departments.length) {
              //change current_departments
              const current_department = departmentsStore.findById(formValues.departments[0].department_id!);
              if (current_department) order.current_department = current_department.name;
            }
          }
        })
        .catch((e) => {
          if (e instanceof AxiosError) message.error.custom(e.response!.data.message);
        });
    },
  },
});
