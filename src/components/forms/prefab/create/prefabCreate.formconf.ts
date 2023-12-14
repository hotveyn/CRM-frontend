import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, ref, Ref } from 'vue';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

export interface IPrefabCreateValues extends Pick<IPrefab, 'name' | 'comment' | 'price'>, Partial<Pick<IPrefab, 'type_id'>> {}

export interface IPrefabCreateConf extends IFormConf<IPrefabCreateValues> {
  options: Ref<SelectOption[]>;
}

export function usePrefabCreateFormConf(): IPrefabCreateConf {
  const rules: FormRules = {
    name: {
      required: true,
      message: 'Введите название шаблона',
    },
    type_id: {
      required: true,
      message: 'Выберите тип шаблона',
    },
    price: {
      required: true,
      message: 'Введите цену шаблона',
    },
  };

  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IPrefabCreateValues>({
    name: '',
    comment: '',
    price: 1,
    type_id: undefined,
  });

  onMounted(async () => {
    const orderTypesStore = useOrderTypesStore();
    options.value = await orderTypesStore.getForSelect();
    if (options.value[0]) {
      formValues.type_id = options.value[0].value as number;
    }
  });

  return {
    rules,
    formValues,
    options,
  };
}
