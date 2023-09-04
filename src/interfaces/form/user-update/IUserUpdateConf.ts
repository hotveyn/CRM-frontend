import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { Ref } from 'vue';
import { SelectOption } from 'naive-ui';
import { IUserUpdateValues } from '@/interfaces/form/user-update/IUserUpdateValues.ts';

export interface IUserUpdateConf extends IFormConf<IUserUpdateValues> {
  options: Ref<SelectOption[]>;
}
