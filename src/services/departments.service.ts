import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { api } from '@/axios';
import { IDepartmentCreateValues } from '@/interfaces/form/department/IDepartmentCreateValues.ts';
import { IDepartmentUpdateValues } from '@/interfaces/form/department/IDepartmentUpdateValues.ts';
export function useDepartmentsService() {
  async function getAll() {
    const res = await api.get('department');

    return res.data as IDepartment[];
  }

  async function remove(id: number) {
    const res = await api.delete(`department/${id}`);

    return res.data as IDepartment[];
  }

  async function create(formValues: IDepartmentCreateValues) {
    const res = await api.post('department', formValues);

    return res.data as IDepartment;
  }

  async function update(id: number, formValues: IDepartmentUpdateValues) {
    const res = await api.patch(`department/${id}`, formValues);

    return res.data as IDepartment;
  }

  return {
    getDepartments: getAll,
    remove,
    update,
    create,
  };
}
