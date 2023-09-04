import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';
import { IOrderCreateValues } from '@/interfaces/form/order/create/IOrderCreateValues.ts';

export interface IOrderCreateConf extends IFormConf<IOrderCreateValues> {
  options: Ref<SelectOption[]>;
  isReclamation: Ref<boolean>;
}
