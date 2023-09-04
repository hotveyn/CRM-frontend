import { IToWorkConf } from '@/interfaces/form/order/towork/IToWorkConf.ts';
import { onMounted, reactive } from 'vue';
import { IToWorkValues } from '@/interfaces/form/order/towork/IToWorkValues.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { ref } from 'vue';
import { useDepartmentsStore } from '@/store/departments.store.ts';

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
