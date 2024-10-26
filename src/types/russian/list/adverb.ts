import { z } from "zod";

export const AdvEntry = z.object({
    frequency: z.number(),
    model: z.object({
        id: z.number(),
        lemma: z.string(),
        type: z.literal("Adverb"),
        meanings: z.string().nullable(),
        commonality: z.number().nullable(),
        dictionary_info: z.object({
            dictionary_form: z.string(),
            accented: z.string(),
            ipa: z.string(),
            adjective: z.string().nullable(),
        }),
    }),
});
