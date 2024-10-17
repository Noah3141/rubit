import { z } from "zod";
import { Gender } from "~/types/gender";

export const NounEntry = z.object({
    frequency: z.number(),
    model: z.object({
        id: z.number(),
        lemma: z.string(),
        commonality: z.number().nullable(),
        type: z.literal("Noun"),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            gender: Gender,
            // Forms
            nom_sing: z.string().nullable(),
            nom_plur: z.string().nullable(),
            acc_sing: z.string().nullable(),
            acc_plur: z.string().nullable(),
            gen_sing: z.string().nullable(),
            gen_plur: z.string().nullable(),
            dat_sing: z.string().nullable(),
            dat_plur: z.string().nullable(),
            ins_sing: z.string().nullable(),
            ins_plur: z.string().nullable(),
            pre_sing: z.string().nullable(),
            pre_plur: z.string().nullable(),
        }),
    }),
});

export type NounEntry = z.infer<typeof NounEntry>;
