import { IDepartment } from '@/interfaces/department/IDepartment.ts';
import { IStageV2 } from '@/interfaces/stage/IStage.ts';

export interface IDepartmentPayment extends IDepartment {
  sum: number;
}

export interface IStatPayment {
  sum: number;
  employee_name: string;
  [key: string]: number | string | IDepartmentPayment;
}

export interface IStatDetailed {
  name: string;
  code: string;
  departmentsNames: string[];
  departmentsPayments: { id: number; name: string; sum: number }[];
  completedStages: Array<IStageV2 & { order: { name: string; code: string; price: number; type: { name: string } }; break: { name: string }; department: { name: string } }>;
}
