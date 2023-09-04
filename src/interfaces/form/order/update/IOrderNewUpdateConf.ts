import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IOrderNewUpdateValues } from '@/interfaces/form/order/update/IOrderNewUpdateValues.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';

export interface IOrderNewUpdateConf extends IFormConf<IOrderNewUpdateValues> {
  options: Ref<SelectOption[]>;
}
