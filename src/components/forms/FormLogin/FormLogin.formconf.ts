import {reactive} from "vue";
import {ILoginValues} from "@/interfaces/form/login/ILoginValues.ts";
import {FormRules} from "naive-ui";
import {IFormConf} from "@/interfaces/form/IFormConf.ts";

export function useFormLogin(): IFormConf<ILoginValues>{
    const rules: FormRules = {
        email: {
            required: true,
            message: "Введите свой email"
        },
        password: {
            required: true,
            message: "Введите свой пароль"
        },
    }

    const formValues = reactive<ILoginValues>({
        email: '',
        password: ''
    })

    return {
        rules,
        formValues
    }
}
