import { z } from "zod";

export const AdvEntry = z.object({
    type: z.literal("adv"),
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        commonality: z.number(),
        dictionary_info: z.object({
            dictionary_form: z.string(),
            accented: z.string(),
            ipa: z.string(),
            adjective: z.string().nullable(),
        }),
    }),
});
