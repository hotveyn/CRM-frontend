import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref } from 'vue';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { useBreaksStore } from '@/store/breaks.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

export interface IBreakUpdateValues {
  name: string;
  department_id: number | null;
}

export interface IBreakUpdateConf extends IFormConf<IBreakUpdateValues> {
  options: Ref<SelectOption[]>;
}

export function useBreakUpdateFormConf(breakId: number): IBreakUpdateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название брака',
    },
    department_id: {
      required: true,
      message: 'Выбирите отдел ответственный за этот брак',
    },
  };

  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IBreakUpdateValues>({
    name: '',
    department_id: null,
  });

  onMounted(async () => {
    const departmentsStore = useDepartmentsStore();
    await departmentsStore.request();
    departmentsStore.departments.forEach((department) => {
      options.value.push({
        label: department.name,
        value: department.id,
      });
    });

    const breaksStore = useBreaksStore();
    const breakOne = breaksStore.findById(breakId);
    formValues.name = breakOne?.name as string;
    formValues.department_id = Number(breakOne!.department_id);
  });
  return {
    rules,
    formValues,
    options,
  };
}
