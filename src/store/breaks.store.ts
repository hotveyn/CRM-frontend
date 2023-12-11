import { defineStore } from 'pinia';
import { IBreak } from '@/interfaces/break/IBreak.ts';
import { useBreakService } from '@/services/break.service.ts';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IBreakCreateValues } from 'components/forms/break/create/BreakCreate.formconf.ts';
import {IBreakUpdateValues} from "components/forms/break/update/BreakUpdate.formconf.ts";

const breakService = useBreakService();
const message = useMessageService();
interface State {
  breaks: IBreak[];
}

export const useBreaksStore = defineStore('breaks', {
  state: (): State => {
    return {
      breaks: [],
    };
  },
  actions: {
    async request() {
      this.breaks = await breakService.getAll();
    },
    async create(formValues: IBreakCreateValues) {
      await breakService
        .create(formValues)
        .then(() => {
          message.break.created();
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    async update(id: number, formValues: IBreakUpdateValues) {
      await breakService
        .update(id, formValues)
        .then(() => {
          message.break.updated();
          const departmentsStore = useDepartmentsStore();
          const department = departmentsStore.findById(formValues.department_id as number);

          const index = this.breaks.findIndex((breakOne) => {
            return breakOne.id === id;
          });

          if (index !== -1 && department) {
            this.breaks[index].name = formValues.name;
            this.breaks[index].department!.name = department.name;
          }
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    async remove(id: number) {
      await breakService
        .remove(id)
        .then(() => {
          message.break.removed();
          this.breaks = this.breaks.filter((breakOne) => {
            return breakOne.id !== id;
          });
        })
        .catch((e) => {
          message.error.custom(e.response.data.message);
        });
    },
    findById(id: number): IBreak | undefined {
      return this.breaks.find((breakOne) => breakOne.id === id);
    },
  },
});
