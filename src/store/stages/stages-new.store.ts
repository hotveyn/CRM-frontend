import { defineStore } from 'pinia';
// import { IStage } from '@/interfaces/stage/IStage.ts';
import { useStageService } from '@/services/stage.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import axios from 'axios';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { IStage } from '@/interfaces/stage/IStage';

const stageService = useStageService();
const message = useMessageService();

interface State {
  departments: IDepartment[];
}

export const useStageNewStore = defineStore('stages-new', {
  state: (): State => {
    return {
      departments: [],
    };
  },
  actions: {
    async request() {
      this.departments = await stageService.getAvailable();
    },
    async claim(id: number, department_id: number, doneCallback: () => void) {
      stageService
        .claim(id)
        .then(() => {
          message.stage.claim();
          const departmentIndex = this.departments.findIndex((department) => department.id === department_id);
          if (departmentIndex !== -1) {
            const stageIndex = this.departments[departmentIndex].orderStages.findIndex((stage) => stage.id === id);

            if (stageIndex !== -1) this.departments[departmentIndex].orderStages.splice(stageIndex, 1);
          }
          if (!this.departments[departmentIndex].orderStages.length) this.departments.splice(departmentIndex, 1);
          doneCallback();
        })
        .catch((e) => {
          if (axios.isAxiosError(e)) message.error.custom(e.response!.data.message);
          else message.error.error();
        });
    },
    getStagesWithSearch(text: string): IDepartment[] {
      if (!text.length) return this.departments;

      const copy = JSON.parse(JSON.stringify(this.departments)) as IDepartment[];

      const searched = copy
        .map((department: IDepartment) => {
          department.orderStages = department.orderStages.filter((stage: IStage) => {
            return stage.order.code.includes(text);
          });

          return department;
        })
        .filter((department: IDepartment) => {
          return department.orderStages.length;
        });

      return searched as unknown as IDepartment[];
    },
  },
});
