import { z } from "zod";

export const AdjEntry = z.object({
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        type: z.literal("Adjective"),
        commonality: z.number().nullable(),
        id: z.number(),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            // Forms
            nom_masc: z.string(),
            acc_masc: z.string(),
            gen_masc: z.string(),
            dat_masc: z.string(),
            ins_masc: z.string(),
            pre_masc: z.string(),
            nom_fem: z.string(),
            acc_fem: z.string(),
            gen_fem: z.string(),
            dat_fem: z.string(),
            ins_fem: z.string(),
            pre_fem: z.string(),
            nom_neut: z.string(),
            acc_neut: z.string(),
            gen_neut: z.string(),
            dat_neut: z.string(),
            ins_neut: z.string(),
            pre_neut: z.string(),
            nom_plur: z.string(),
            acc_plur: z.string(),
            gen_plur: z.string(),
            dat_plur: z.string(),
            ins_plur: z.string(),
            pre_plur: z.string(),

            m_short: z.string().nullable(),
            f_short: z.string().nullable(),
            n_short: z.string().nullable(),
            p_short: z.string().nullable(),
        }),
    }),
});

export type AdjEntry = z.infer<typeof AdjEntry>;
