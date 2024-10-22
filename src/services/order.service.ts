import { api } from '@/axios';
import { IOrder } from '@/interfaces/order/IOrder.ts';
import { IOrderBreak } from '@/interfaces/order/IOrderBreak.ts';
import { IOrderStopped } from '@/interfaces/order/IOrderStopped.ts';
import { IOrderWork } from '@/interfaces/order/IOrderWork.ts';
import { IOrderReclamation } from '@/interfaces/order/IOrderReclamation.ts';
import { IOrderNewUpdateValues } from 'components/forms/order/new-update/orderNewUpdate.formconf.ts';
import { IOrderWorkUpdateValues } from 'components/forms/order/work-update/orderWorkUpdate.formconf.ts';
import { IOrderCreateValues } from 'components/forms/order/create/orderCreate.formconf.ts';
import { IToWorkValues } from 'components/forms/order/towork/toWork.formconf.ts';
import { IOrderPrefabCreateValues } from 'components/forms/order/prefab-create/orderPrefabCreate.formconf.ts';
import { OrderScalarFieldEnum, OrderStatusV2Enum } from '../enums/order/OrderStatus.enum';
import { IStageV2 } from '@/interfaces/stage/IStage.ts';

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
    async setWork(id: number, values: IToWorkValues[]) {
      const res = await api.patch(`order/${id}/set-work`, { departments: values });

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
    async hide(id: number) {
      const res = await api.patch(`/order/hide/${id}`);

      return res.data as IOrder[];
    },
    async create(formValues: IOrderCreateValues) {
      const res = await api.post(`order`, formValues);

      return res.data as IOrder;
    },
    async createByPrefab(formValues: IOrderPrefabCreateValues) {
      const res = await api.post(`order/by-prefab`, formValues);

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
    async getOrderStages(orderId: number) {
      const res = await api.get(`order/${orderId}/stages`);

      return res.data as Array<IStageV2 & {
          department:{ name: string },
          user:{
            firstName: string,
            lastName: string,
            patronymicName: string
          }
        }>;
    },
    async markOrderAsBreak(orderId: number, body: { stageId: number, breakId: number }) {
      return api.patch(`order/${orderId}/break`, { ...body });
    },
    async query(params: {limit: number, offset: number, status: OrderStatusV2Enum, orderBy?: OrderScalarFieldEnum, orderDirection?: 'asc' | 'desc'}) {
      const res = await api.get('order', {
        params
      });

      return res.data as {data: IOrder[], count: 50};
    },
  };
}
