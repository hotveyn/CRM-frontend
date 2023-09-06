import { api } from '@/axios';
import { IStat } from '@/interfaces/stat/IStat.ts';

export function useStatService() {
  async function getSelfStat() {
    const date = new Date();
    const dateMonthPrev = new Date();
    dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

    const params = {
      start: dateMonthPrev,
      end: date,
    };

    const res = await api.get('stat/self', { params });
    return new Map(Object.entries(res.data)) as Map<string, IStat>;
  }
  return { getSelfStat };
}
