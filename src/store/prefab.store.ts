import { useMessageService } from '@/services/message.service.ts';
import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { defineStore } from 'pinia';
import { usePrefabService } from '@/services/prefab.service.ts';
import { IPrefabCreateValues } from 'components/forms/prefab/create/prefabCreate.formconf.ts';
import { useOrderTypesStore } from '@/store/orderTypes.store.ts';

const prefabService = usePrefabService();
const message = useMessageService();

interface State {
  prefabs: IPrefab[];
}

export const usePrefabStore = defineStore('prefabs', {
  state: (): State => {
    return {
      prefabs: [],
    };
  },
  actions: {
    async request() {
      this.prefabs = await prefabService.getAll();
    },
    async remove(id: number) {
      prefabService
        .remove(id)
        .then(() => {
          message.prefab.removed();
          this.prefabs = this.prefabs.filter((prefab: IPrefab) => {
            return prefab.id !== id;
          });
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    async create(formValues: IPrefabCreateValues) {
      prefabService
        .create(formValues)
        .then((res: IPrefab) => {
          message.prefab.created();
          this.prefabs.push(res);
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
    findById(id: number) {
      return this.prefabs.find((prefab) => prefab.id === id);
    },
    async update(prefab: IPrefab, formValues: IPrefabCreateValues) {
      prefabService
        .update(prefab.id, formValues)
        .then(async () => {
          message.prefab.updated();

          const foundPrefab = this.findById(prefab.id);
          const orderTypesStore = useOrderTypesStore();
          const orderType = await orderTypesStore.findById(formValues.type_id!);
          if (foundPrefab) {
            foundPrefab.name = formValues.name;
            foundPrefab.type_id = formValues.type_id!;
            foundPrefab.type = orderType!;
            foundPrefab.price = formValues.price;
            foundPrefab.comment = formValues.comment;
          }
        })
        .catch((e) => message.error.custom(e.response.data.message));
    },
  },
});
