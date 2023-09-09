import { IStatSelf } from '@/interfaces/stat/IStatSelf.ts';
export interface IStatDepartment extends IStatSelf {
  department_name: string;
  break_percent: number;
}
