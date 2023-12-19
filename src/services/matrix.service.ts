import { api } from '@/axios';
import { ITableMatrix } from '@/interfaces/table/ITableMatrix.ts';
import { IMatrix } from '@/interfaces/matrix/IMatrix.ts';

export function useMatrixService(){
  return {
    async getSerialized(){
      const res = await api.get('/monetary-matrix/ser-to-table')

      return res.data as Array<ITableMatrix>
    },
    async getAll(){
      const res = await api.get('/monetary-matrix/')

      return res.data as Array<IMatrix>
    },

    async bulkUpdate(matrices: Pick<IMatrix, 'order_type_id' | 'department_id' | 'percent'>[]){
      const res = await api.patch(`/monetary-matrix/bulk-update`, { matrices })

      return res.data as number
    },
  }
}