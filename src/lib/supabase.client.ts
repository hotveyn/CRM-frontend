import { createClient } from '@supabase/supabase-js'
import {ISupabase} from "@/interfaces/ISupabase.ts";

export const supabase = createClient<ISupabase>(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)
