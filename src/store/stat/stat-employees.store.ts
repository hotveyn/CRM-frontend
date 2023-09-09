import { defineStore } from 'pinia';
import { IStatEmployee } from '@/interfaces/stat/IStatEmployee.ts';
import { useStatService } from '@/services/stat.service.ts';

const statService = useStatService();

interface State {
  stat: IStatEmployee[];
}

export const useStatEmployeesStore = defineStore('stat-employees', {
  state: (): State => {
    return {
      stat: [],
    };
  },
  actions: {
    async request() {
      this.stat = await statService.getEmployeesStat();
    },
  },
});
