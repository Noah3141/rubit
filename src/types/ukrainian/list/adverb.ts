import { z } from "zod";

export const AdvEntry = z.object({
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        type: z.literal("Adverb"),
        id: z.number(),
        commonality: z.number().nullable(),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            adjective: z.string().nullable(),
        }),
    }),
});
