import { defineStore } from 'pinia';
import { useStatService } from '@/services/stat.service.ts';
import { IStatDepartment } from '@/interfaces/stat/IStatDepartment.ts';

const statService = useStatService();

interface State {
  stat: IStatDepartment[];
}

export const useStatDepartmentsStore = defineStore('stat-departments', {
  state: (): State => {
    return {
      stat: [],
    };
  },
  actions: {
    async request() {
      this.stat = await statService.getDepartmentsStat();
    },
  },
});
