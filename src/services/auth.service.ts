import {supabase} from "@/lib/supabase.client.ts";
import {IRegUser} from "@/interfaces/reg/IRegUser.ts";
import {ILoginUser} from "@/interfaces/auth/ILoginUser.ts";


export function useAuthService() {

    async function adminReg(formValues: IRegUser) {
        const {data, error} = await supabase.auth.admin.createUser({
            email: formValues.login,
            password: formValues.password,
            email_confirm: true,
            user_metadata: {
                first_name: formValues.firstName,
                last_name: formValues.lastName,
                father_name: formValues.fatherName,
                timestamp: formValues.timestamp,
                departments: formValues.departments
            }
        })

        return {
            success: !error,
            data: data
        };
    }

    async function logout() {
        const {error} = await supabase.auth.signOut();

        return {
            success: !error
        };
    }

    async function login(formValues: ILoginUser) {
        const {data, error} = await supabase.auth.signInWithPassword({
            email: formValues.email,
            password: formValues.password,
        })

        return {
            success: !error,
            data: data
        };
    }

    return {
        logout,
        login,
        adminReg
    }
}
