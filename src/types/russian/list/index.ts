import { z } from "zod";
import { AdjEntry } from "./adjective";
import { AdvEntry } from "./adverb";
import { VerbEntry } from "./verb";
import { NounEntry } from "./noun";

export const VocabularyListSchema = z.object({
    form_frequencies: z.record(z.number()),
    entry_list: z.array(z.union([NounEntry, VerbEntry, AdjEntry, AdvEntry])),
});

export type VocabularyListData = z.infer<typeof VocabularyListSchema>;
