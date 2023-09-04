import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { IStageBreakValues } from '@/interfaces/form/stage/IStageBreakValues.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';

export interface IStageBreakConf extends IFormConf<IStageBreakValues> {
  options: Ref<SelectOption[]>;
}
