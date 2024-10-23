import { FormRules, SelectOption } from 'naive-ui';
import { onMounted, reactive, Ref, ref, watch } from 'vue';
import { IFormConf } from '@/interfaces/form/IFormConf.ts';
import { useOrderService } from '@/services/order.service.ts';
import { useDepartmentsService } from '@/services/departments.service.ts';
import { useStageService } from '@/services/stage.service.ts';

const orderService = useOrderService();
const stageService = useStageService();
const departmentsService = useDepartmentsService();

export interface IOrderToBreakValues {
  stageId?: number;
  breakId?: number;
}

export interface IOrderToBreakConf extends IFormConf<IOrderToBreakValues> {
  stagesOptions: Ref<SelectOption[]>;
  breakOptions: Ref<SelectOption[]>;
}

export function useOrderToBreakFormConf(orderId: number): IOrderToBreakConf {
  const rules: FormRules = {
    stageId: {
      required: true,
      message: 'Введите выберите стадию на котором был брак',
    },
    breakId: {
      required: true,
      message: 'Выбирете брак',
    },
  };

  const stagesOptions = ref<SelectOption[]>([]);
  const breakOptions = ref<SelectOption[]>([]);

  const formValues = reactive<IOrderToBreakValues>({
    stageId: undefined,
    breakId: undefined,
  });

  watch(
    () => formValues.stageId,
    async () => {
      if (formValues.stageId) {
        formValues.breakId = undefined;
        const department = await stageService.getDepartment(formValues.stageId);
        const breaks = await departmentsService.getBreaks(department.id);
        breakOptions.value = breaks.map((breakOne) => {
          return {
            label: breakOne.name,
            value: breakOne.id,
          };
        });
        if (breakOptions.value.length) formValues.breakId = breakOptions.value[0].value as number;
      }
    }
  );

  onMounted(async () => {
    const orderStages = await orderService.getOrderStages(orderId);
    stagesOptions.value = orderStages.map((stage) => {
      return {
        label: `${stage.department.name} | ${stage.user.lastName} ${stage.user.firstName} ${stage.user.patronymicName}`,
        value: stage.id,
      };
    });
    if (stagesOptions.value.length) formValues.stageId = stagesOptions.value[0].id as number;
  });

  return {
    rules,
    stagesOptions,
    breakOptions,
    formValues,
  };
}
