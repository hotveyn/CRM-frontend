import { api } from '@/axios';
import { IStage } from '@/interfaces/stage/IStage.ts';
import { IBreak } from '@/interfaces/break/IBreak.ts';
import { IDepartment, IDepartmentV2 } from '@/interfaces/department/IDepartment.ts';
import { IStageBreakValues } from 'components/forms/stage/stageBreak.formconf.ts';

export function useStageService() {
  return {
    async getAvailable() {
      const res = await api.get('order-stage/available');

      return res.data as IDepartment[];
    },
    async getPossibleBreaks(id: number) {
      const res = await api.get(`order-stage/${id}/break`);

      return res.data as IBreak[];
    },
    async getWork() {
      const res = await api.get('order-stage/work');

      return res.data as IStage[];
    },
    async toBreak(id: number, formValues: IStageBreakValues) {
      const res = await api.patch(`order-stage/${id}/break`, formValues);

      return res.data as IStage;
    },
    async claim(id: number) {
      const res = await api.patch(`order-stage/${id}/claim`);

      return res.data as IStage;
    },
    async unclaim(id: number) {
      const res = await api.patch(`order-stage/${id}/unclaim`);

      return res.data as IStage;
    },
    async ready(id: number) {
      const res = await api.patch(`order-stage/${id}/ready`);

      return res.data as IStage;
    },
    async getDepartment(id: number) {
      const res = await api.get(`order-stage/${id}/department`);

      return res.data as IDepartmentV2;
    }
  };
}
