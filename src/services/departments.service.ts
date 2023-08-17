import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { api } from '@/axios';
export function useDepartmentsService() {
  async function getDepartments() {
    const res = await api.get('department');

    return res.data as IDepartment[];
  }

  return {
    getDepartments,
  };
}
