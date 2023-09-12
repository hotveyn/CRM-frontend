import {IOrderWorkUpdateConf} from '@/interfaces/form/order/work-update/IOrderWorkUpdateConf.ts';
import {FormRules, SelectOption} from 'naive-ui';
import {onMounted, reactive, ref} from 'vue';
import {OrderTypeEnum} from '@/enums/order/OrderType.enum.ts';
import {IOrderWorkUpdateValues} from '@/interfaces/form/order/work-update/IOrderWorkUpdateValues.ts';
import {useOrdersWorkStore} from '@/store/orders/orders-work.store.ts';
import {useDepartmentsStore} from '@/store/departments.store.ts';

const orderWorkStore = useOrdersWorkStore();

export function useOrderWorkUpdateFormConf(id: number): IOrderWorkUpdateConf {
    const rules: FormRules = {
        name: {
            required: true,
            message: 'Введите название заказа',
        },
        type: {
            required: true,
            message: 'Выбирете тип заказа',
        },
        neon_length: {
            required: true,
            message: 'Введите длину неона',
        },
    };

    const options = ref<SelectOption[]>([]);
    const optionsType = ref<SelectOption[]>([
        {
            label: OrderTypeEnum.NEON1,
            value: OrderTypeEnum.NEON1,
        },
        {
            label: OrderTypeEnum.NEON2,
            value: OrderTypeEnum.NEON2,
        },
        {

            label: OrderTypeEnum.NEON2_STREET,
            value: OrderTypeEnum.NEON2_STREET,
        },
        {
            label: OrderTypeEnum.NEON_SMART,
            value: OrderTypeEnum.NEON_SMART,
        },
    ]);

    const isDepartmentsChange = ref<boolean>(false);

    const formValues = reactive<IOrderWorkUpdateValues>({
        name: '',
        type: OrderTypeEnum.NEON1,
        neon_length: 0,
        comment: '',
        departments: null,
    });

    onMounted(async () => {
        const order = orderWorkStore.findById(id);
        if (order) {
            formValues.name = order.name;
            formValues.type = order.type;
            formValues.neon_length = order.neon_length;
            formValues.comment = order.comment;
            formValues.departments = [];
            order.departments.forEach((department) => {
                formValues.departments!.push(department.id);
            });
        }

        const departmentsStore = useDepartmentsStore();
        await departmentsStore.request();
        departmentsStore.departments.forEach((department) => {
            options.value.push({
                label: department.name,
                value: department.id,
            });
        });
    });

    return {
        rules,
        options,
        isDepartmentsChange,
        formValues,
        optionsType,
    };
}
