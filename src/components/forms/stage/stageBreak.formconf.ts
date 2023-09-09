import { IStageBreakConf } from '@/interfaces/form/stage/IStageBreakConf.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, ref } from 'vue';
import { useStageWorkStore } from '@/store/stages/stages-work.store.ts';
import { IStageBreakValues } from '@/interfaces/form/stage/IStageBreakValues.ts';

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
