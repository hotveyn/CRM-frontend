import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { onMounted, reactive, ref, Ref } from 'vue';
import { FormRules, SelectOption } from 'naive-ui';
import { usePrefabStore } from '@/store/prefab.store.ts';
import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';

export interface IOrderPrefabCreateValues {
  prefab_id?: number;
  date_start: string;
  date_end: string;
}

export interface IOrderPrefabCreateConf extends IFormConf<IOrderPrefabCreateValues> {
  options: Ref<SelectOption[]>;
}

export function useOrderPrefabCreateFormConf(): IOrderPrefabCreateConf {
  const rules: FormRules = {
    date_start: {
      required: true,
      message: 'Введите дату начала',
    },
    prefab_id: {
      required: true,
      message: 'Выберите шаблон',
    },
  };

  const options = ref<SelectOption[]>([]);

  const formValues = reactive<IOrderPrefabCreateValues>({
    date_start: new Date().toISOString().split('T')[0] as string,
    date_end: new Date().toISOString().split('T')[0] as string,
    prefab_id: undefined,
  });

  onMounted(async () => {
    const prefabStore = usePrefabStore();
    await prefabStore.request();

    options.value = prefabStore.prefabs.map((prefab: IPrefab) => {
      return {
        label: prefab.name,
        value: prefab.id,
      };
    });
    if (options.value[0]) {
      formValues.prefab_id = options.value[0].value as number;
    }
  });

  return {
    rules,
    options,
    formValues,
  };
}
