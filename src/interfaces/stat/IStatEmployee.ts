import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IStatEmployee {
  id: number;
  full_name: string;
  departments: IDepartment[];
  neon_length: number;
  stages_break: number;
  break_percent: string;
}
