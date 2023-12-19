import { useMessageService } from '@/services/message.service.ts';
import { useMatrixService } from '@/services/matrix.service.ts';
import { IMatrix } from '@/interfaces/matrix/IMatrix.ts';
import { ITableMatrix } from '@/interfaces/table/ITableMatrix.ts';
import { defineStore } from 'pinia';


const matrixService = useMatrixService();
const message = useMessageService();

interface State {
  matrices: IMatrix[],
  serializedMatrices: ITableMatrix[]
}

export const useMatrixStore = defineStore('matrix', {
  state: (): State => {
    return {
      matrices: [],
      serializedMatrices: [],
    };
  },
  actions: {
    async requestSerialized() {
      this.serializedMatrices = await matrixService.getSerialized();
    },
    async update(matrices: ITableMatrix[]) {
      const changed: Pick<IMatrix, 'order_type_id' | 'department_id' | 'percent'>[] = [];

      for (let i = 0; i < matrices.length; i++) {
        const originalMatrix = this.serializedMatrices[i];
        const updatedMatrix = matrices[i];

        Object.keys(originalMatrix).forEach((key) => {
          if (key === 'order_type') {
            return;
          }
          if ((originalMatrix[key] as IMatrix).percent !== (updatedMatrix[key] as IMatrix).percent) {
            const mat = updatedMatrix[key] as IMatrix;
            (originalMatrix[key] as IMatrix).percent = (updatedMatrix[key] as IMatrix).percent
            changed.push(
              {
                order_type_id: +mat.order_type_id,
                department_id: +mat.department_id,
                percent: mat.percent,
              },
            );
          }
        });
      }

      if (changed.length) {
        await matrixService.bulkUpdate(changed);
        message.matrix.updated();
      }
    },
    getCopy(): ITableMatrix[] {
      return JSON.parse(JSON.stringify(this.serializedMatrices));
    },
  },
});