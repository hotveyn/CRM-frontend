import { defineStore } from 'pinia';
import { IOrderWork } from '@/interfaces/order/IOrderWork.ts';
import { useOrderService } from '@/services/order.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IOrderWorkUpdateValues } from '@/interfaces/form/order/work-update/IOrderWorkUpdateValues.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';

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
        .then(() => {
          message.order.updated();
          const departmentsStore = useDepartmentsStore();
          for (const i in this.orders) {
            if (this.orders[i].id === id) {
              this.orders[i].name = formValues.name;
              this.orders[i].comment = formValues.comment;
              this.orders[i].type = formValues.type;
              this.orders[i].neon_length = formValues.neon_length;

              if (formValues.departments?.length) {
                //change departments
                this.orders[i].departments = [];
                formValues.departments.forEach((departmentId) => {
                  const department = departmentsStore.findById(departmentId);
                  if (department) this.orders[i].departments.push(department);
                });

                //change current_departments
                const current_department = departmentsStore.findById(formValues.departments[0]);
                if (current_department) this.orders[i].current_department = current_department;
              }
            }
          }
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
