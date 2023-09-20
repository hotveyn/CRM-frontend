import { defineStore } from 'pinia';
// import { IStage } from '@/interfaces/stage/IStage.ts';
import { useStageService } from '@/services/stage.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import axios from 'axios';
import {IDepartment} from "@/interfaces/department/IDepartment.ts";

const stageService = useStageService();
const message = useMessageService();

interface State {
  stages: IDepartment[];
}

export const useStageNewStore = defineStore('stages-new', {
  state: (): State => {
    return {
      stages: [],
    };
  },
  actions: {
    async request() {
      this.stages = await stageService.getAvailable();
    },
    async claim(id: number) {
      stageService
        .claim(id)
        .then(() => {
          message.stage.claim();

          this.stages = this.stages.filter((stage) => stage.id !== id);
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) message.error.custom(e.response!.data.message);
          else message.error.error();
        });
    },
  },
});
