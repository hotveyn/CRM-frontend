import {onMounted, reactive, ref} from "vue";
import {useDepartmentsService} from "@/services/departments.service.ts";
import {IRegOptions} from "@/interfaces/form/reg/IRegOptions.ts";
import {FormRules} from "naive-ui";
import {IRegValues} from "@/interfaces/form/reg/IRegValues.ts";
import {IRegConf} from "@/interfaces/form/reg/IRegConf.ts";



export function useRegFormConf(): IRegConf {
    const {getDepartments} = useDepartmentsService()
    const rules: FormRules = {
        userNumber: {
            required: true,
            message: "Введите номер пользователя"
        },
        lastName: {
            required: true,
            message: "Введите фамилию пользователя"
        },
        firstName: {
            required: true,
            message: "Введите имя пользователя"
        },
        fatherName: {
            required: false,
            message: "Введите отчество пользователя"
        },
        timestamp: {
            required: true,
            message: "Введите дату устройства на работу"
        },
        departments: {
            required: true,
            message: "Выберите хотя бы 1 депортамент"
        },
        email: {
            required: true,
            message: "Введите email пользователя"
        },
        password: {
            required: true,
            message: "Введите пароль пользователя"
        },
    }
    const options = ref<IRegOptions[]>([])
    const formValues = reactive<IRegValues>({
        userNumber: '',
        lastName: '',
        firstName: '',
        fatherName: null,
        timestamp: null,
        departments: null,
        email: '',
        password: ''
    })

    onMounted(async () => {
        const res = await getDepartments()
        if (res) {
            await res.forEach((department) => {
                options.value.push(
                    {
                        label: department.name,
                        value: department.id
                    }
                )
            })
        }
    })

    return {
        rules,
        formValues,
        options
    }
}
