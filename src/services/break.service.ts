import { api } from '@/axios';
import { IBreak } from '@/interfaces/break/IBreak.ts';
import { IBreakUpdateValues } from '@/interfaces/form/break/update/IBreakUpdateValues.ts';
import { IBreakCreateValues } from '@/interfaces/form/break/create/IBreakCreateValues.ts';

export function useBreakService() {
  async function getAll() {
    const res = await api.get('break');

    return res.data as Array<IBreak>;
  }

  async function create(formValues: IBreakCreateValues) {
    const res = await api.post('break', formValues);

    return res.data as IBreak;
  }

  async function update(id: number, formValues: IBreakUpdateValues) {
    const res = await api.patch(`break/${id}`, formValues);

    return res.data as IBreak;
  }

  async function remove(id: number) {
    const res = await api.delete(`break/${id}`);

    return res.data as IBreak;
  }

  return {
    getAll,
    create,
    update,
    remove,
  };
}
