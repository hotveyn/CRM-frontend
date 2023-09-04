import { api } from '@/axios';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';
import { IOrderCreateValues } from '@/interfaces/form/order/create/IOrderCreateValues.ts';
import { IOrderBreak } from '@/interfaces/order/IOrderBreak.ts';
import { IOrderStopped } from '@/interfaces/order/IOrderStopped.ts';
import { IOrderWork } from '@/interfaces/order/IOrderWork.ts';
import { IOrderWorkUpdateValues } from '@/interfaces/form/order/work-update/IOrderWorkUpdateValues.ts';

export function useOrderService() {
  async function getNew() {
    const res = await api.get('order/new');

    return res.data as IOrder[];
  }
  async function getStop() {
    const res = await api.get('order/stop');

    return res.data as IOrderStopped[];
  }
  async function getWork() {
    const res = await api.get('order/in-work');

    return res.data as IOrderWork[];
  }
  async function getCompleted() {
    const res = await api.get('order/completed');

    return res.data as IOrder[];
  }

  async function getBreak() {
    const res = await api.get('order/break');

    return res.data as IOrderBreak[];
  }

  async function setWork(id: number, departments: number[]) {
    const res = await api.patch(`order/${id}/set-work`, { departments: departments });

    return res.data as IOrder;
  }

  async function setStop(id: number) {
    const res = await api.patch(`order/${id}/stop`);

    return res.data as IOrder;
  }
  async function remove(id: number) {
    const res = await api.delete(`order/${id}`);

    return res.data as IOrder[];
  }

  async function update(id: number, formValues: IOrderNewUpdateValues | IOrderWorkUpdateValues) {
    const res = await api.patch(`order/${id}`, formValues);

    return res.data as IOrder;
  }

  async function restore(id: number) {
    const res = await api.patch(`order/${id}/restore`);

    return res.data as IOrder;
  }
  async function create(formValues: IOrderCreateValues) {
    const res = await api.post(`order`, formValues);

    return res.data as IOrder;
  }

  return {
    getNew,
    getWork,
    getStop,
    getCompleted,
    getBreak,
    setWork,
    setStop,
    update,
    restore,
    remove,
    create,
  };
}
