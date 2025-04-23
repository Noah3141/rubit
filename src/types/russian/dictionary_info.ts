import { z } from "zod";
import { Gender } from "../gender";

export const NounDictionaryInfoSchema = z.object({
    lemma: z.string(),
    ipa: z.string(),
    gender: Gender,
    // Forms
    nom_sing: z.string().nullable(),
    nom_plur: z.string().nullable(),
    acc_sing: z.string().nullable(),
    acc_plur: z.string().nullable(),
    gen_sing: z.string().nullable(),
    gen_plur: z.string().nullable(),
    dat_sing: z.string().nullable(),
    dat_plur: z.string().nullable(),
    ins_sing: z.string().nullable(),
    ins_plur: z.string().nullable(),
    pre_sing: z.string().nullable(),
    pre_plur: z.string().nullable(),
    //
    loc_sing: z.string().optional().nullable(),
    par_sing: z.string().optional().nullable(),
    vocative: z.string().optional().nullable(),
    paucal: z.string().optional().nullable(),
});

export const VerbDictionaryInfoSchema = z.object({
    lemma: z.string(),
    ipa: z.string(),
    is_perfective: z.boolean(),
    is_transitive: z.boolean(),
    root: z.string().nullable(),
    prefix: z.string().nullable(),
    aspectual_pair: z.string().nullable(),
    // Forms
    я_form: z.string().nullable(),
    ты_form: z.string().nullable(),
    он_form: z.string().nullable(),
    мы_form: z.string().nullable(),
    вы_form: z.string().nullable(),
    они_form: z.string().nullable(),
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
});

export const AdjectiveDictionaryInfoSchema = z.object({
    lemma: z.string(),
    ipa: z.string(),
    // Forms
    nom_masc: z.string(),
    acc_masc: z.string(),
    gen_masc: z.string(),
    dat_masc: z.string(),
    ins_masc: z.string(),
    pre_masc: z.string(),
    nom_fem: z.string(),
    acc_fem: z.string(),
    gen_fem: z.string(),
    dat_fem: z.string(),
    ins_fem: z.string(),
    pre_fem: z.string(),
    nom_neut: z.string(),
    acc_neut: z.string(),
    gen_neut: z.string(),
    dat_neut: z.string(),
    ins_neut: z.string(),
    pre_neut: z.string(),
    nom_plur: z.string(),
    acc_plur: z.string(),
    gen_plur: z.string(),
    dat_plur: z.string(),
    ins_plur: z.string(),
    pre_plur: z.string(),

    m_short: z.string().nullable(),
    f_short: z.string().nullable(),
    n_short: z.string().nullable(),
    p_short: z.string().nullable(),

    comparative: z.string().optional().nullable(),
});

export const AdverbDictionaryInfoSchema = z.object({
    lemma: z.string(),
    ipa: z.string(),
    adjective: z.string().nullable(),
});

export const DictionaryInfoSchema = z.union([
    //
    NounDictionaryInfoSchema,
    VerbDictionaryInfoSchema,
    AdjectiveDictionaryInfoSchema,
    AdverbDictionaryInfoSchema,
]);
