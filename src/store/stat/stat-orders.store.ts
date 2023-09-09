import { defineStore } from 'pinia';
import { useStatService } from '@/services/stat.service.ts';
import { IStatStopped } from '@/interfaces/stat/IStatStopped.ts';
import { IStatReclamation } from '@/interfaces/stat/IStatReclamation.ts';

const statService = useStatService();

interface State {
  stoppedStat: IStatStopped;
  reclamationStat: IStatReclamation;
}

export const useStatOrdersStore = defineStore('stat-order', {
  state: (): State => {
    return {
      stoppedStat: {
        orders: 0,
        orders_stopped: 0,
        stopped_percent: '',
      },
      reclamationStat: {
        orders: 0,
        reclamations: 0,
        reclamations_percent: '',
      },
    };
  },
  actions: {
    async requestStopped() {
      this.stoppedStat = await statService.getOrdersStoppedStat();
    },
    async requestReclamation() {
      this.reclamationStat = await statService.getOrdersReclamationStat();
    },
  },
});
