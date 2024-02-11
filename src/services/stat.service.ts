import { api } from '@/axios';
import { IStatSelf } from '@/interfaces/stat/IStatSelf.ts';
import { IStatDepartment } from '@/interfaces/stat/IStatDepartment.ts';
import { IStatStopped } from '@/interfaces/stat/IStatStopped.ts';
import { IStatReclamation } from '@/interfaces/stat/IStatReclamation.ts';
import { IStatEmployee } from '@/interfaces/stat/IStatEmployee.ts';
import { IStatPayment } from '@/interfaces/stat/IStatPayment.ts';

export function useStatService() {
  return {
    async getSelfStat() {
      const startDate = new Date();
      startDate.setDate(1);
      startDate.setHours(0,0,0);
      const endDate = new Date();
      endDate.setDate(31);
      endDate.setHours(23,59,59);

      const params = {
        start: startDate.toISOString(),
        end: endDate.toISOString(),
      };

      const res = await api.get('stat/self', { params });
      return res.data as IStatSelf[];
    },
    async getEmployeesStat(start?: string, end?: string) {
      // const date = new Date();
      // const dateMonthPrev = new Date();
      // dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

      const params = {
        start,
        end,
      };

      const res = await api.get('stat/employees', { params });
      return res.data as IStatEmployee[];
    },
    async getDepartmentsStat(start?: string, end?: string) {

      const params = {
        start,
        end,
      };

      const res = await api.get('stat/departments', { params });
      return res.data as IStatDepartment[];
    },
    async getPaymentStat(start?: string, end?: string) {
      const params = {
        start,
        end,
      };

      const res = await api.get('stat/payment', { params });
      return res.data as IStatPayment[];
    },
    async getOrdersStoppedStat() {
      // const date = new Date();
      // const dateMonthPrev = new Date();
      // dateMonthPrev.setMonth(dateMonthPrev.getMonth() - 1);

      // const params = {
      //   start: date,
      //   end: dateMonthPrev,
      // };

      const res = await api.get('stat/orders/stopped');
      return res.data as IStatStopped;
    },
    async getOrdersReclamationStat() {
      // const params = {
      //   start,
      //   end,
      // };

      const res = await api.get('stat/orders/reclamation');
      return res.data as IStatReclamation;
    },
  };
}
