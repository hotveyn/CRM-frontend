import {IDepartment} from "@/interfaces/IDepartment.ts";

export interface IRegUser {
    userNumber: string
    lastName: string
    firstName: string
    fatherName: string | null
    timestamp: number | null
    departments: IDepartment[] | null
    login: string
    password: string
}
