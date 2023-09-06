import { defineStore } from 'pinia';
import { IStat } from '@/interfaces/stat/IStat.ts';
import { useStatService } from '@/services/stat.service.ts';

const statService = useStatService();

interface State {
  stats: Map<string, IStat>;
}

export const useStatSelfStore = defineStore('stat-self', {
  state: (): State => {
    return {
      stats: new Map(),
    };
  },
  actions: {
    async request() {
      this.stats = await statService.getSelfStat();
    },
  },
});
