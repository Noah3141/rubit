import { z } from "zod";
import { AdjectiveDictionaryInfoSchema } from "../dictionary_info";

export const AdjModel = z.object({
    id: z.number(),
    lemma: z.string(),
    type: z.literal("Adjective"),
    meanings: z.string().nullable(),
    commonality: z.number().nullable(),
    dictionary_info: AdjectiveDictionaryInfoSchema,
});

export type AdjectiveModel = z.infer<typeof AdjModel>;

export const AdjEntry = z.object({
    frequency: z.number(),
    model: AdjModel,
});

export type AdjEntry = z.infer<typeof AdjEntry>;
