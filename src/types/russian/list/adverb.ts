import { z } from "zod";
import { AdverbDictionaryInfoSchema } from "../dictionary_info";

export const AdvModel = z.object({
    id: z.number(),
    lemma: z.string(),
    type: z.literal("Adverb"),
    meanings: z.string().nullable(),
    commonality: z.number().nullable(),
    dictionary_info: AdverbDictionaryInfoSchema,
});

export const AdvEntry = z.object({
    frequency: z.number(),
    model: AdvModel,
});
