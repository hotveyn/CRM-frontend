import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref } from 'vue';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';
import { IPrefabCreateValues } from 'components/forms/prefab/create/prefabCreate.formconf.ts';

export interface IPrefabUpdateValues extends Pick<IPrefab, 'name' | 'comment' | 'price'>, Partial<Pick<IPrefab, 'type_id'>> {}

export interface IPrefabUpdateConf extends IFormConf<IPrefabUpdateValues> {
  options: Ref<SelectOption[]>;
}

export function usePrefabUpdateFormConf(prefab: IPrefab): IPrefabUpdateConf {
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
    name: prefab.name,
    comment: prefab.comment,
    price: prefab.price,
    type_id: undefined,
  });

  onMounted(async () => {
    const orderTypesStore = useOrderTypesStore();
    options.value = await orderTypesStore.getForSelect();
    formValues.type_id = +prefab.type_id;
  });

  return {
    rules,
    formValues,
    options,
  };
}
