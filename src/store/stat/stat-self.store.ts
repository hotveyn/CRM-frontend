import { defineStore } from 'pinia';
import { IStatSelf } from '@/interfaces/stat/IStatSelf.ts';
import { useStatService } from '@/services/stat.service.ts';

const statService = useStatService();

interface State {
  stat: IStatSelf[];
}

export const useStatSelfStore = defineStore('stat-self', {
  state: (): State => {
    return {
      stat: [],
    };
  },
  actions: {
    async request() {
      this.stat = await statService.getSelfStat();
    },
  },
  getters: {
    sortedStat: (state) => {
      return [...state.stat].sort((a: IStatSelf, b: IStatSelf) => b.money - a.money);
    },
  },
});
