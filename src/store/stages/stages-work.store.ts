import { defineStore } from 'pinia';
import { IStage } from '@/interfaces/stage/IStage.ts';
import { useStageService } from '@/services/stage.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import axios from 'axios';
import { useOrdersBreakStore } from '@/store/orders/orders-break.store.ts';
import { IStageBreakValues } from 'components/forms/stage/stageBreak.formconf.ts';

const stageService = useStageService();
const message = useMessageService();

interface State {
  stages: IStage[];
}

export const useStageWorkStore = defineStore('stages-work', {
  state: (): State => {
    return {
      stages: [],
    };
  },
  actions: {
    async request() {
      this.stages = await stageService.getWork();
    },
    async ready(id: number) {
      stageService
        .ready(id)
        .then(() => {
          message.stage.ready();

          this.stages = this.stages.filter((stage) => stage.id !== id);
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) message.error.custom(e.response!.data.message);
          else message.error.error();
        });
    },
    async toBreak(id: number, formValues: IStageBreakValues) {
      stageService
        .toBreak(id, formValues)
        .then(() => {
          message.stage.break();

          this.request();
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) message.error.custom(e.response!.data.message);
          else message.error.error();
        });
    },
    async setStop(id: number) {
      const stage = this.stages.find((stage) => stage.id === id);
      if (!stage) return;

      const orderBreakStore = useOrdersBreakStore();
      await orderBreakStore.stop(stage.order.id);
      this.stages = this.stages.filter((stage) => stage.id !== id);
    },
    async getPossibleBreak(id: number) {
      return await stageService.getPossibleBreaks(id);
    },
  },
});
