import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IStatEmployee {
  id: number;
  full_name: string;
  departments: IDepartment[];
  stages_break: number;
  break_percent: string;
}
