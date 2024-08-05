import { z } from "zod";

export const NounEntry = z.object({
    type: z.literal("noun"),
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        commonality: z.number(),
        dictionary_info: z.object({
            dictionary_form: z.string(),
            accented: z.string(),
            ipa: z.string(),
            // Forms
            nom_sing: z.string(),
            nom_plur: z.string(),
            acc_sing: z.string(),
            acc_plur: z.string(),
            gen_sing: z.string(),
            gen_plur: z.string(),
            dat_sing: z.string(),
            dat_plur: z.string(),
            ins_sing: z.string(),
            ins_plur: z.string(),
            pre_sing: z.string(),
            pre_plur: z.string(),
        }),
    }),
});
