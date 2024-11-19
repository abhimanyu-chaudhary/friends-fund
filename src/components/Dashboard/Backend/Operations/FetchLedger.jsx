import { supabase } from "../../../../lib/helper/supabaseClient";


export const fetchLedger = async () => {
    const { data, error } = await supabase
        .from("ledger")
        .select("*")
        .order("deposit_date", { ascending: true });

    if (error) {
        console.error("Error fetching ledger data:", error.message);
        return [];
    }
    return data;
};
