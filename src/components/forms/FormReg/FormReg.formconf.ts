import {onMounted, reactive, ref} from "vue";
import {useDepartmentsService} from "@/services/departments.service.ts";
import {IRegUser} from "@/interfaces/reg/IRegUser.ts";
import {IRegFormOptions} from "@/interfaces/reg/IRegFormOptions.ts";

export function useRegFormConf() {
    const {getDepartments} = useDepartmentsService()
    const rules = {
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
        login: {
            required: true,
            message: "Введите email пользователя"
        },
        password: {
            required: true,
            message: "Введите пароль пользователя"
        },
    }
    const options = ref<IRegFormOptions[]>([])
    const formValues = reactive<IRegUser>({
        userNumber: '',
        lastName: '',
        firstName: '',
        fatherName: null,
        timestamp: null,
        departments: null,
        login: '',
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
