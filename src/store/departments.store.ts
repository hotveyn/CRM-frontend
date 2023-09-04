import { defineStore } from 'pinia';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { useDepartmentsService } from '@/services/departments.service.ts';
import { useMessageService } from '@/services/message.service.ts';
import { IDepartmentCreateValues } from '@/interfaces/form/department/IDepartmentCreateValues.ts';
import { IDepartmentUpdateValues } from '@/interfaces/form/department/IDepartmentUpdateValues.ts';

const departmentsService = useDepartmentsService();
const message = useMessageService();
interface State {
  departments: IDepartment[];
  touched: boolean;
}

export const useDepartmentsStore = defineStore('departments', {
  state: (): State => {
    return {
      departments: [],
      touched: false,
    };
  },
  actions: {
    async getOrRequest() {
      if (!this.touched) {
        this.departments = await departmentsService.getDepartments();
        this.touched = true;
      }
      return this.departments;
    },
    async request() {
      this.departments = await departmentsService.getDepartments();
      this.touched = true;
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
          if (index) {
            this.departments[index].name = formValues.name;
          }
        })
        .catch((e) => {
          e.response.data.message;
        });
    },
  },
});
