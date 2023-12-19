import { onMounted } from 'vue';
import { SelectOption } from 'naive-ui';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';

export interface IToWorkValues {
  department_id?: number,
  percent?: number
}

export function useToWorkFormConf() {
  const dynamicInputRule = {
    trigger: 'input',
    validator(_: unknown, value: string) {
      if (!value) return new Error('Сделайте выбор');
      return true;
    },
  };

  const options = ref<SelectOption[]>([]);
  const formValues = ref<IToWorkValues[]>([
    {
      department_id: undefined,
      percent: undefined,
    },
  ]);
  const model = ref({
    dynamicInputValue: [
      {
        department_id: undefined,
        percent: undefined,
      },
    ],
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

  function onCreateInp() {
    return {
      department_id: undefined,
      percent: undefined,
    };
  }

  return { model, dynamicInputRule, formValues, options, onCreateInp };
}
