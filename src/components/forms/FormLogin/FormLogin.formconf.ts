import {reactive} from "vue";
import {ILoginUser} from "@/interfaces/auth/ILoginUser.ts";

export function useFormLogin(){
    const rules = {
        login: {
            required: true,
            message: "Введите свой email"
        },
        password: {
            required: true,
            message: "Введите свой пароль"
        },
    }

    const formValues = reactive<ILoginUser>({
        email: '',
        password: ''
    })

    return{
        rules,
        formValues
    }
}
