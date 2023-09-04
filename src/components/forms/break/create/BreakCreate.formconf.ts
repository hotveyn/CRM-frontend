import { IBreakCreateValues } from '@/interfaces/form/break/create/IBreakCreateValues.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive } from 'vue';
import { IBreakCreateConf } from '@/interfaces/form/break/create/IBreakCreateConf.ts';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';

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
