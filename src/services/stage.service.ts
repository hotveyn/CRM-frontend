import { api } from '@/axios';
import { IStage } from '@/interfaces/stage/IStage.ts';
import { IBreak } from '@/interfaces/break/IBreak.ts';
import { IStageBreakValues } from '@/interfaces/form/stage/IStageBreakValues.ts';

export function useStageService() {
  async function getAvailable() {
    const res = await api.get('order-stage/available');

    return res.data as IStage[];
  }
  async function getWork() {
    const res = await api.get('order-stage/work');

    return res.data as IStage[];
  }

  async function getPossibleBreaks(id: number) {
    const res = await api.get(`order-stage/${id}/break`);

    return res.data as IBreak[];
  }

  async function claim(id: number) {
    const res = await api.patch(`order-stage/${id}/claim`);

    return res.data as IStage;
  }

  async function toBreak(id: number, formValues: IStageBreakValues) {
    const res = await api.patch(`order-stage/${id}/break`, formValues);

    return res.data as IStage;
  }
  async function ready(id: number) {
    const res = await api.patch(`order-stage/${id}/ready`);

    return res.data as IStage;
  }

  return {
    getAvailable,
    getPossibleBreaks,
    getWork,
    toBreak,
    claim,
    ready,
  };
}
