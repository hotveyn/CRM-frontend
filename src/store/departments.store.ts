import { defineStore } from 'pinia';
import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { useDepartmentsService } from '@/services/departments.service.ts';

const departmentsService = useDepartmentsService();

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
      if (this.departments.length === 0) {
        this.departments = await departmentsService.getDepartments();
      }
      return this.departments;
    },
  },
});
