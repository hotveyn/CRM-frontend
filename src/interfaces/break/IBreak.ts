import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IBreak {
  id: number;
  name: string;
  department_id: string;
  department?: IDepartment;
}
