import { z } from "zod";
import { VerbDictionaryInfoSchema } from "../dictionary_info";

export const VerbModel = z.object({
    id: z.number(),
    lemma: z.string(),
    type: z.literal("Verb"),
    commonality: z.number().nullable(),
    meanings: z.string().nullable(),
    dictionary_info: VerbDictionaryInfoSchema,
});

export const VerbEntry = z.object({
    /** Frequency in input text */
    frequency: z.number(),
    /** Stable info about lemma */
    model: VerbModel,
});

export type VerbEntry = z.infer<typeof VerbEntry>;
export type VerbModel = z.infer<typeof VerbModel>;
