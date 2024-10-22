import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IBreak {
  id: number;
  name: string;
  department_id: string;
  department?: IDepartment;
}
export interface IBreakV2 {
  id: number;
  name: string;
  departmentId: string;
}
