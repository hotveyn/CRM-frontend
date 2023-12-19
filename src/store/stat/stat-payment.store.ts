import { IStatPayment } from '@/interfaces/stat/IStatPayment.ts';
import { useStatService } from '@/services/stat.service.ts';
import { defineStore } from 'pinia';

const statService = useStatService();

interface State {
  stat: IStatPayment[]
}

export const useStatPaymentStore = defineStore('stat-payment', {
  state: (): State =>{
    return {
      stat: []
    }
  },
  actions: {
    async request(start?: string, end?: string){

      this.stat = await statService.getPaymentStat(start, end)
    }
  }
})