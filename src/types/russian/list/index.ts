import { z } from "zod";
import { AdjEntry } from "./adjective";
import { AdvEntry } from "./adverb";
import { VerbEntry } from "./verb";
import { NounEntry } from "./noun";

export const VocabularyEntry = z.union([
    NounEntry,
    VerbEntry,
    AdjEntry,
    AdvEntry,
]);

export type Type = "Noun" | "Adjective" | "Verb" | "Adverb";

export const VocabularyListSchema = z.object({
    inputText: z.string(),
    form_frequencies: z.record(z.number()),
    entry_list: z.array(VocabularyEntry),
});

export type VocabularyListData = z.infer<typeof VocabularyListSchema>;
