import { z } from "zod";
import { AdjEntry, AdjModel } from "./adjective";
import { AdvEntry, AdvModel } from "./adverb";
import { VerbEntry, VerbModel } from "./verb";
import { NounEntry, NounModel } from "./noun";

export const VocabListEntrySchema = z.union([NounEntry, VerbEntry, AdjEntry, AdvEntry]);
export type VocabListEntry = z.infer<typeof VocabListEntrySchema>;

export const RussianModelSchema = z.union([NounModel, VerbModel, AdjModel, AdvModel]);
export type RussianModel = z.infer<typeof RussianModelSchema>;

export const TypeSchema = z.enum(["Noun", "Adjective", "Verb", "Adverb"]);
export type Type = z.infer<typeof TypeSchema>;

export const VocabularyListSchema = z.object({
    inputText: z.string(),
    form_frequencies: z.record(z.number()),
    entry_list: z.array(VocabListEntrySchema),
});
export type VocabularyListData = z.infer<typeof VocabularyListSchema>;
