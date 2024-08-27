import { z } from "zod";

export const VerbEntry = z.object({
    frequency: z.number(),
    model: z.object({
        lemma: z.string(),
        id: z.number(),
        type: z.literal("Verb"),
        commonality: z.number().nullable(),
        dictionary_info: z.object({
            lemma: z.string(),
            ipa: z.string(),
            is_perfective: z.boolean(),
            is_transitive: z.boolean(),
            root_space: z.string().nullable(),
            aspectual_pair: z.string().nullable(),
            я_form: z.string().nullable(),
            ти_form: z.string().nullable(),
            він_form: z.string().nullable(),
            ми_form: z.string().nullable(),
            ви_form: z.string().nullable(),
            вони_form: z.string().nullable(),
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
            ти_imperative: z.string().nullable(),
            ви_imperative: z.string().nullable(),
            ми_imperative: z.string().nullable(),
        }),
    }),
});

export type VerbEntry = z.infer<typeof VerbEntry>;
