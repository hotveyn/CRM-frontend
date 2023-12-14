import { IPrefabCreateValues } from 'components/forms/prefab/create/prefabCreate.formconf.ts';
import { api } from '@/axios';
import { IPrefab } from '@/interfaces/prefab/IPrefab.ts';
import { IPrefabUpdateValues } from 'components/forms/prefab/update/prefabUpdate.formconf.ts';

export function usePrefabService() {
  return {
    async create(formValues: IPrefabCreateValues) {
      const res = await api.post('prefab', formValues);

      return res.data as IPrefab;
    },
    async getAll() {
      const res = await api.get('prefab');

      return res.data as IPrefab[];
    },
    async update(id: number, formValues: IPrefabUpdateValues) {
      const res = await api.patch(`prefab/${id}`, formValues);

      return res.data as IPrefab[];
    },
    async remove(id: number) {
      const res = await api.delete(`prefab/${id}`);

      return res.data as IPrefab;
    },
  };
}
