import { onMounted, reactive, Ref } from 'vue';
import { FormRules, SelectOption } from 'naive-ui';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';

export interface IToWorkValues {
  departments: number[] | null;
}

export interface IToWorkConf extends IFormConf<IToWorkValues> {
  options: Ref<SelectOption[]>;
}

export function useToWorkFormConf(): IToWorkConf {
  const rules: FormRules = {
    departments: {
      required: true,
      message: 'Выбирите хотя бы один отдел',
    },
  };
  const options = ref<SelectOption[]>([]);
  const formValues = reactive<IToWorkValues>({
    departments: null,
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

  return { rules, formValues, options };
}
