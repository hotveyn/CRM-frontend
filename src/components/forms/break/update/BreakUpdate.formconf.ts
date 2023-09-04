import { IBreakCreateValues } from '@/interfaces/form/break/create/IBreakCreateValues.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive } from 'vue';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { IBreakUpdateConf } from '@/interfaces/form/break/update/IBreakUpdateConf.ts';
import { useBreaksStore } from '@/store/breaks.store.ts';

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
