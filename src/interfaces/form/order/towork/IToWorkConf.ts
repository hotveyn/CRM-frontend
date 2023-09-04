import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IToWorkValues } from '@/interfaces/form/order/towork/IToWorkValues.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';

export interface IToWorkConf extends IFormConf<IToWorkValues> {
  options: Ref<SelectOption[]>;
}
