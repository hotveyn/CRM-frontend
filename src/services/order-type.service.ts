import { api } from '@/axios';
import { IOrderType } from '@/interfaces/order-type/IOrderType.ts';
import { IOrderTypeCreateValues } from 'components/forms/order-type/create/orderTypeCreate.formconf.ts';

export function useOrderTypeService() {
  return {
    async getAll() {
      const res = await api.get('order-type');

      return res.data as Array<IOrderType>;
    },
    async getOne(id: number) {
      const res = await api.get(`order-type/${id}`);

      return res.data as IOrderType;
    },
    async create(data: IOrderTypeCreateValues) {
      const res = await api.post('order-type', data);

      return res.data as IOrderType;
    },
    async update(id: number, data: IOrderTypeCreateValues) {
      const res = await api.patch(`order-type/${id}`, data);

      return res.data as IOrderType;
    },
    async remove(id: number) {
      const res = await api.delete(`order-type/${id}`);

      return res.data as IOrderType;
    },
  };
}