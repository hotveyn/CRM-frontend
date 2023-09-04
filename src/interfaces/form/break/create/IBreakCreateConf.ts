import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IBreakCreateValues } from '@/interfaces/form/break/create/IBreakCreateValues.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';

export interface IBreakCreateConf extends IFormConf<IBreakCreateValues> {
  options: Ref<SelectOption[]>;
}
