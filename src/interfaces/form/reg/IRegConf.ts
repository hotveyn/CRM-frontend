import { Ref } from 'vue';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IRegValues } from '@/interfaces/form/reg/IRegValues.ts';
import { SelectOption } from 'naive-ui';

export interface IRegConf extends IFormConf<IRegValues> {
  options: Ref<SelectOption[]>;
  optionsRoles: Ref<SelectOption[]>;
}
