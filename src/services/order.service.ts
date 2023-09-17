import { api } from '@/axios';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';
import { IOrderCreateValues } from '@/interfaces/form/order/create/IOrderCreateValues.ts';
import { IOrderBreak } from '@/interfaces/order/IOrderBreak.ts';
import { IOrderStopped } from '@/interfaces/order/IOrderStopped.ts';
import { IOrderWork } from '@/interfaces/order/IOrderWork.ts';
import { IOrderWorkUpdateValues } from '@/interfaces/form/order/work-update/IOrderWorkUpdateValues.ts';
import { IOrderReclamation } from '@/interfaces/order/IOrderReclamation.ts';

export function useOrderService() {
  return {
    async getAllNewResources() {
      const res = await api.get('order/resources/new');

      return res.data as IOrder[];
    },
    async getAllEnoughResources() {
      const res = await api.get('order/resources/enough');

      return res.data as IOrderWork[];
    },
    async getAllNotEnoughResources() {
      const res = await api.get('order/resources/not-enough');

      return res.data as IOrderStopped[];
    },
    async getNew() {
      const res = await api.get('order/new');

      return res.data as IOrder[];
    },
    async getWork() {
      const res = await api.get('order/in-work');

      return res.data as IOrderWork[];
    },
    async getStop() {
      const res = await api.get('order/stop');

      return res.data as IOrderStopped[];
    },
    async getCompleted() {
      const res = await api.get('order/completed');

      return res.data as IOrder[];
    },
    async getBreak() {
      const res = await api.get('order/break');

      return res.data as IOrderBreak[];
    },
    async setWork(id: number, departments: number[]) {
      const res = await api.patch(`order/${id}/set-work`, { departments: departments });

      return res.data as IOrder;
    },
    async setStop(id: number) {
      const res = await api.patch(`order/${id}/stop`);

      return res.data as IOrder;
    },
    async setResourcesEnough(id: number) {
      const res = await api.patch(`order/${id}/resources/enough`);

      return res.data as IOrder;
    },
    async setResourcesNull(id: number) {
      const res = await api.patch(`order/${id}/resources/null`);

      return res.data as IOrder;
    },
    async setResourcesNotEnough(id: number) {
      const res = await api.patch(`order/${id}/resources/not-enough`);

      return res.data as IOrder;
    },
    async update(id: number, formValues: IOrderNewUpdateValues | IOrderWorkUpdateValues) {
      const res = await api.patch(`order/${id}`, formValues);

      return res.data as IOrder;
    },
    async restore(id: number) {
      const res = await api.patch(`order/${id}/restore`);

      return res.data as IOrder;
    },
    async remove(id: number) {
      const res = await api.delete(`order/${id}`);

      return res.data as IOrder[];
    },
    async create(formValues: IOrderCreateValues) {
      const res = await api.post(`order`, formValues);

      return res.data as IOrder;
    },
    async setRating(id: number, rating: number) {
      const res = await api.patch(`order/${id}/set-rating`, { rating });

      return res.data as IOrder[];
    },
    async getCompletedReclamations() {
      const res = await api.get('order/completed-reclamations');

      return res.data as IOrderReclamation[];
    },
  };
}
