import { supabase } from "../../../../lib/helper/supabaseClient";

export const saveToLedger = async (data) => {
    const { depositer_name, deposit_date, amount, remarks } = data;

    const { error } = await supabase
        .from("ledger")
        .insert([
            {
                depositer_name,
                deposit_date,
                amount,
                remarks,
            },
        ]);

    return { error };
};
