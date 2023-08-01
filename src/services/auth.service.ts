import {supabase} from "@/lib/supabase.client.ts";
import {IRegValues} from "@/interfaces/form/reg/IRegValues.ts";
import {ILoginValues} from "@/interfaces/form/login/ILoginValues.ts";


export function useAuthService() {

    async function adminReg(formValues: IRegValues) {
        const {data, error} = await supabase.auth.admin.createUser({
            email: formValues.email,
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

    async function login(formValues: ILoginValues) {
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
