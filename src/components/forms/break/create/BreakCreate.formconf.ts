import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref } from 'vue';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

export interface IBreakCreateValues {
  name: string;
  department_id: number | null;
}

interface IBreakCreateConf extends IFormConf<IBreakCreateValues> {
  options: Ref<SelectOption[]>;
}

export function useBreakCreateFormConf(): IBreakCreateConf {
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

  const formValues = reactive<IBreakCreateValues>({
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
  });
  return {
    options,
    rules,
    formValues,
  };
}
