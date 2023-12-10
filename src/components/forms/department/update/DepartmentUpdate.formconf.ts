import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { onMounted, reactive } from 'vue';
import { FormRules } from 'naive-ui';
import { useDepartmentsStore } from '@/store/departments.store.ts';

export interface IDepartmentUpdateValues {
  name: string;
}

export function useDepartmentUpdateFormConf(id: number): IFormConf<IDepartmentUpdateValues> {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название отдела',
    },
  };

  const formValues = reactive<IDepartmentUpdateValues>({
    name: '',
  });

  onMounted(() => {
    const departmentStore = useDepartmentsStore();
    const department = departmentStore.findById(id);

    if (department) {
      formValues.name = department.name;
    }
  });
  return {
    rules,
    formValues,
  };
}
