import { api } from '@/axios';
import { IStatSelf } from '@/interfaces/stat/IStatSelf.ts';
import { IStatDepartment } from '@/interfaces/stat/IStatDepartment.ts';
import { IStatStopped } from '@/interfaces/stat/IStatStopped.ts';
import { IStatReclamation } from '@/interfaces/stat/IStatReclamation.ts';
import { IStatEmployee } from '@/interfaces/stat/IStatEmployee.ts';

export function useStatService() {
  return {
    async getSelfStat() {
      const date = new Date();
      const dateMonthPrev = new Date();
      dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

      const params = {
        start: dateMonthPrev,
        end: date,
      };

      const res = await api.get('stat/self', { params });
      return new Map(Object.entries(res.data)) as Map<string, IStatSelf>;
    },
    async getEmployeesStat() {
      // const date = new Date();
      // const dateMonthPrev = new Date();
      // dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

      const params = {
        start: '2004-07-13T22:02:32.395Z',
        end: '2077-07-13T22:02:32.395Z',
      };

      const res = await api.get('stat/employees', { params });
      return res.data as IStatEmployee[];
    },
    async getDepartmentsStat() {
      const date = new Date();
      const dateMonthPrev = new Date();
      dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

      const params = {
        start: dateMonthPrev,
        end: date,
      };

      const res = await api.get('stat/departments', { params });
      return res.data as IStatDepartment[];
    },
    async getOrdersStoppedStat() {
      // const date = new Date();
      // const dateMonthPrev = new Date();
      // dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);
      //
      const params = {
        start: '2004-07-13T22:02:32.395Z',
        end: '2077-07-13T22:02:32.395Z',
      };

      const res = await api.get('stat/orders/stopped', { params });
      return res.data as IStatStopped;
    },
    async getOrdersReclamationStat() {
      const params = {
        start: '2004-07-13T22:02:32.395Z',
        end: '2077-07-13T22:02:32.395Z',
      };

      const res = await api.get('stat/orders/reclamation', { params });
      return res.data as IStatReclamation;
    },
  };
}
