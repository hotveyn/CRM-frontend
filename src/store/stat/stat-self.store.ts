import { defineStore } from 'pinia';
import { IStatSelf } from '@/interfaces/stat/IStatSelf.ts';
import { useStatService } from '@/services/stat.service.ts';

const statService = useStatService();

interface State {
  stat: Map<string, IStatSelf>;
}

export const useStatSelfStore = defineStore('stat-self', {
  state: (): State => {
    return {
      stat: new Map(),
    };
  },
  actions: {
    async request() {
      this.stat = await statService.getSelfStat();
    },
  },
});
