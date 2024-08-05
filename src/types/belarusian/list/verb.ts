import { z } from "zod";

export const VerbEntry = z.object({
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        type: z.literal("Verb"),
        commonality: z.number().nullable(),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            is_perfective: z.boolean(),
            is_transitive: z.boolean(),
            root_space: z.string().nullable(),
            aspectual_pair: z.string().nullable(),
            // Forms
            я_form: z.string().nullable(),
            ты_form: z.string().nullable(),
            ён_form: z.string().nullable(),
            мы_form: z.string().nullable(),
            вы_form: z.string().nullable(),
            яны_form: z.string().nullable(),
            fem_past: z.string().nullable(),
            masc_past: z.string().nullable(),
            neut_past: z.string().nullable(),
            plur_past: z.string().nullable(),
            present_active: z.string().nullable(),
            present_passive: z.string().nullable(),
            past_passive: z.string().nullable(),
            past_active: z.string().nullable(),
            present_adverbial: z.string().nullable(),
            past_adverbial: z.string().nullable(),
            singular_imperative: z.string().nullable(),
            plural_imperative: z.string().nullable(),
        }),
    }),
});

export type VerbEntry = z.infer<typeof VerbEntry>;
