import {IDepartment} from "@/interfaces/IDepartment.ts";

export interface IRegValues {
    userNumber: string
    lastName: string
    firstName: string
    fatherName: string | null
    timestamp: number | null
    departments: IDepartment[] | null
    email: string
    password: string
}
