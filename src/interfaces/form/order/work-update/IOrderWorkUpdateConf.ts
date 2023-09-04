import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IOrderWorkUpdateValues } from '@/interfaces/form/order/work-update/IOrderWorkUpdateValues.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';

export interface IOrderWorkUpdateConf extends IFormConf<IOrderWorkUpdateValues> {
  options: Ref<SelectOption[]>;
  isDepartmentsChange: Ref<boolean>;
}
