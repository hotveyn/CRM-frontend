import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { api } from '@/axios';
import { IDepartmentCreateValues } from 'components/forms/department/create/DepartmentCreate.formconf.ts';
import { IDepartmentUpdateValues } from 'components/forms/department/update/DepartmentUpdate.formconf.ts';
import { IBreakV2 } from '@/interfaces/break/IBreak.ts';

export function useDepartmentsService() {
  return {
    async getDepartments() {
      const res = await api.get('department');

      return res.data as IDepartment[];
    },
    async remove(id: number) {
      const res = await api.delete(`department/${id}`);

      return res.data as IDepartment[];
    },
    async create(formValues: IDepartmentCreateValues) {
      const res = await api.post('department', formValues);

      return res.data as IDepartment;
    },
    async update(id: number, formValues: IDepartmentUpdateValues) {
      const res = await api.patch(`department/${id}`, formValues);

      return res.data as IDepartment;
    },
    async getBreaks(id: number) {
      const res = await api.get(`department/${id}/breaks`);

      return res.data as IBreakV2[];
    },
  };
}
