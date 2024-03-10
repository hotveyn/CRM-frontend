import { IDepartment } from '@/interfaces/department/IDepartment.ts';

export interface IDepartmentPayment extends IDepartment {
  sum: number;
}

export interface IStatPayment {
  sum: number;
  employee_name: string;
  [key: string]: number | string | IDepartmentPayment;
}
