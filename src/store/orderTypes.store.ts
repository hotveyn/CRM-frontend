import { useOrderTypeService } from '@/services/order-type.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';
import { defineStore } from 'pinia';
import { IOrderTypeCreateValues } from 'components/forms/order-type/create/orderTypeCreate.formconf.ts';
import { SelectOption } from 'naive-ui';

const orderTypesService = useOrderTypeService();
const message = useMessageService();

interface State {
  orderTypes: IOrderType[];
}

export const useOrderTypesStore = defineStore('TableOrderTypes', {
  state: (): State => {
    return {
      orderTypes: [],
    };
  },
  actions: {
    async request() {
      this.orderTypes = await orderTypesService.getAll();
    },
    async getForSelect(): Promise<SelectOption[]> {
      await this.request();
      return this.orderTypes.map((orderType) => {
        return {
          label: orderType.name,
          value: orderType.id,
        };
      });
    },
    async create(formValues: IOrderTypeCreateValues) {
      await orderTypesService
        .create(formValues)
        .then(() => {
          message.orderType.created();
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    async update(id: number, formValues: IOrderTypeCreateValues) {
      console.log('store', id, formValues);
      await orderTypesService
        .update(id, formValues)
        .then(() => {
          message.orderType.updated();
          const index = this.orderTypes.findIndex((orderType) => {
            return orderType.id === id;
          });

          if (index !== -1) {
            this.orderTypes[index].name = formValues.name;
          }
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    async findById(id: number): Promise<IOrderType | undefined> {
      await this.request()
      return this.orderTypes.find((orderType) => orderType.id === id);
    },
    async remove(id: number) {
      await orderTypesService
        .remove(id)
        .then(() => {
          message.orderType.removed();
          this.orderTypes = this.orderTypes.filter((orderType) => {
            return orderType.id !== id;
          });
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },

  },
  getters:{
    selected(): SelectOption[] {
      return this.orderTypes.map((orderType) => {
        return {
          label: orderType.name,
          value: orderType.id,
        };
      });
    }
  }
});