import { defineStore } from 'pinia';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { useDepartmentsService } from '@/services/departments.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IDepartmentUpdateValues } from 'components/forms/department/update/DepartmentUpdate.formconf.ts';
import { IDepartmentCreateValues } from 'components/forms/department/create/DepartmentCreate.formconf.ts';

const departmentsService = useDepartmentsService();
const message = useMessageService();
interface State {
  departments: IDepartment[];
}

export const useDepartmentsStore = defineStore('departments', {
  state: (): State => {
    return {
      departments: [],
    };
  },
  actions: {
    async getOrRequest() {
      this.departments = await departmentsService.getDepartments();
    },
    async request() {
      this.departments = await departmentsService.getDepartments();
    },
    async remove(id: number) {
      departmentsService
        .remove(id)
        .then(() => {
          message.department.removed();
          this.departments = this.departments.filter((department) => department.id !== id);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    findById(id: number): IDepartment | undefined {
      return this.departments.find((department) => department.id === id);
    },
    async create(formValues: IDepartmentCreateValues) {
      departmentsService
        .create(formValues)
        .then(() => {
          message.department.created();
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    async update(id: number, formValues: IDepartmentUpdateValues) {
      return departmentsService
        .update(id, formValues)
        .then(() => {
          message.department.updated();
          const index = this.departments.findIndex((department) => {
            return department.id === id;
          });

          if (index !== -1) {
            this.departments[index].name = formValues.name;
          }
        })
        .catch((e) => {
          e.response.data.message;
        });
    },
  },
});
