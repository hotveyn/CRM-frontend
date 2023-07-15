import {supabase} from "@/lib/supabase.client.ts";
import {useMessageService} from "@/services/message.service.ts";
import {IDepartment} from "@/interfaces/IDepartment.ts";
export function useDepartmentsService() {
    const message = useMessageService();

    async function getDepartments() {
        let {data: departments, error} = await supabase
            .from('departments')
            .select('*')

        if (error) {
            message.errors().error()
            return undefined
        }

        return departments as IDepartment[]
    }

    return {
        getDepartments
    }
}
