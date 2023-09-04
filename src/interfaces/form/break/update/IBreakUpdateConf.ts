import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';
import { IBreakUpdateValues } from '@/interfaces/form/break/update/IBreakUpdateValues.ts';

export interface IBreakUpdateConf extends IFormConf<IBreakUpdateValues> {
  options: Ref<SelectOption[]>;
}
