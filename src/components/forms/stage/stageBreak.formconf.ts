import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useStageWorkStore } from '@/store/stages/stages-work.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

export interface IStageBreakValues {
  break_name: string;
  break_id: number | null;
  department_id: number | null;
}

export interface IStageBreakConf extends IFormConf<IStageBreakValues> {
  options: Ref<SelectOption[]>;
}

export function useStageBreakFormConf(id: number): IStageBreakConf {
  const rules: FormRules = {
    break_name: {
      required: true,
      message: 'Выберите брак',
    },
  };

  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IStageBreakValues>({
    break_name: '',
    break_id: null,
    department_id: null,
  });

  onMounted(async () => {
    const stagesWorkStore = useStageWorkStore();

    const breaks = await stagesWorkStore.getPossibleBreak(id);

    if (breaks.length) {
      breaks.forEach((breakOne) => {
        options.value.push({
          label: breakOne.name,
          value: breakOne.id + ' ' + breakOne.department_id,
        });
      });
    }
  });

  return {
    formValues,
    options,
    rules,
  };
}
