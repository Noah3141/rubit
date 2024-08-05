import { z } from "zod";

export const AdvEntry = z.object({
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        commonality: z.number().nullable(),
        type: z.literal("Adverb"),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            adjective: z.string().nullable(),
        }),
    }),
});
