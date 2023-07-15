export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface ISupabase {
    public: {
        Tables: {
            breaks: {
                Row: {
                    department_id: number | null
                    id: number
                    name: string | null
                }
                Insert: {
                    department_id?: number | null
                    id?: number
                    name?: string | null
                }
                Update: {
                    department_id?: number | null
                    id?: number
                    name?: string | null
                }
                Relationships: [
                    {
                        foreignKeyName: "breaks_department_id_fkey"
                        columns: ["department_id"]
                        referencedRelation: "departments"
                        referencedColumns: ["id"]
                    }
                ]
            }
            departments: {
                Row: {
                    id: number
                    name: string
                }
                Insert: {
                    id?: number
                    name: string
                }
                Update: {
                    id?: number
                    name?: string
                }
                Relationships: []
            }
            orders: {
                Row: {
                    bitrix_id: string | null
                    comment: string | null
                    date_end: string | null
                    date_start: string | null
                    id: number
                    name: string | null
                    neon_length: string | null
                    rating: number | null
                    status: string | null
                    type: string | null
                }
                Insert: {
                    bitrix_id?: string | null
                    comment?: string | null
                    date_end?: string | null
                    date_start?: string | null
                    id?: number
                    name?: string | null
                    neon_length?: string | null
                    rating?: number | null
                    status?: string | null
                    type?: string | null
                }
                Update: {
                    bitrix_id?: string | null
                    comment?: string | null
                    date_end?: string | null
                    date_start?: string | null
                    id?: number
                    name?: string | null
                    neon_length?: string | null
                    rating?: number | null
                    status?: string | null
                    type?: string | null
                }
                Relationships: []
            }
            orders_departments: {
                Row: {
                    departments_id: number | null
                    id: number
                    orders_id: number | null
                }
                Insert: {
                    departments_id?: number | null
                    id?: number
                    orders_id?: number | null
                }
                Update: {
                    departments_id?: number | null
                    id?: number
                    orders_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "orders_departments_departments_id_fkey"
                        columns: ["departments_id"]
                        referencedRelation: "departments"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orders_departments_orders_id_fkey"
                        columns: ["orders_id"]
                        referencedRelation: "orders"
                        referencedColumns: ["id"]
                    }
                ]
            }
            orders_departments_users: {
                Row: {
                    breaks_id: number | null
                    departments_id: number | null
                    id: number
                    orders_id: number | null
                    users_id: number | null
                }
                Insert: {
                    breaks_id?: number | null
                    departments_id?: number | null
                    id?: number
                    orders_id?: number | null
                    users_id?: number | null
                }
                Update: {
                    breaks_id?: number | null
                    departments_id?: number | null
                    id?: number
                    orders_id?: number | null
                    users_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "orders_departments_users_breaks_id_fkey"
                        columns: ["breaks_id"]
                        referencedRelation: "breaks"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orders_departments_users_departments_id_fkey"
                        columns: ["departments_id"]
                        referencedRelation: "departments"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orders_departments_users_orders_id_fkey"
                        columns: ["orders_id"]
                        referencedRelation: "orders"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "orders_departments_users_users_id_fkey"
                        columns: ["users_id"]
                        referencedRelation: "profile"
                        referencedColumns: ["id"]
                    }
                ]
            }
            profile: {
                Row: {
                    id: number
                    name: string | null
                    roles_id: number
                    start_work_date: string | null
                    user_id: string
                }
                Insert: {
                    id?: number
                    name?: string | null
                    roles_id: number
                    start_work_date?: string | null
                    user_id: string
                }
                Update: {
                    id?: number
                    name?: string | null
                    roles_id?: number
                    start_work_date?: string | null
                    user_id?: string
                }
                Relationships: [
                    {
                        foreignKeyName: "profile_roles_id_fkey"
                        columns: ["roles_id"]
                        referencedRelation: "profile_roles"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "profile_user_id_fkey"
                        columns: ["user_id"]
                        referencedRelation: "users"
                        referencedColumns: ["id"]
                    }
                ]
            }
            profile_departments: {
                Row: {
                    department_id: number | null
                    id: number
                    profile_id: number | null
                }
                Insert: {
                    department_id?: number | null
                    id?: number
                    profile_id?: number | null
                }
                Update: {
                    department_id?: number | null
                    id?: number
                    profile_id?: number | null
                }
                Relationships: [
                    {
                        foreignKeyName: "profile_departments_department_id_fkey"
                        columns: ["department_id"]
                        referencedRelation: "departments"
                        referencedColumns: ["id"]
                    },
                    {
                        foreignKeyName: "profile_departments_profile_id_fkey"
                        columns: ["profile_id"]
                        referencedRelation: "profile"
                        referencedColumns: ["id"]
                    }
                ]
            }
            profile_roles: {
                Row: {
                    id: number
                    name: string | null
                }
                Insert: {
                    id?: number
                    name?: string | null
                }
                Update: {
                    id?: number
                    name?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            hello: {
                Args: Record<PropertyKey, never>
                Returns: string
            }
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
