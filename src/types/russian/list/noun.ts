import { z } from "zod";
import { NounDictionaryInfoSchema } from "../dictionary_info";

export const NounModel = z.object({
    id: z.number(),
    lemma: z.string(),
    type: z.literal("Noun"),
    commonality: z.number().nullable(),
    meanings: z.string().nullable(),
    dictionary_info: NounDictionaryInfoSchema,
});

export type NounModel = z.infer<typeof NounModel>;

export const NounEntry = z.object({
    frequency: z.number(),
    model: NounModel,
});

export type NounEntry = z.infer<typeof NounEntry>;
