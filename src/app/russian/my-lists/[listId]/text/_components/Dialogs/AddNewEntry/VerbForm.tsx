import React, { FC } from "react";
import { Form } from ".";
import TextInput from "~/components/Common/TextInput";
import Toggler from "~/components/Common/Toggler";

//   lemma: z.string(),
//     ipa: z.string(),
//     is_perfective: z.boolean(),
//     is_transitive: z.boolean(),
//     // root_space: z.string().nullable(),
//     root: z.string().nullable(),
//     prefix: z.string().nullable(),
//     aspectual_pair: z.string().nullable(),
//     // Forms
// я_form: z.string().nullable(),
// ты_form: z.string().nullable(),
// он_form: z.string().nullable(),
// мы_form: z.string().nullable(),
// вы_form: z.string().nullable(),
// они_form: z.string().nullable(),
// fem_past: z.string().nullable(),
// masc_past: z.string().nullable(),
// neut_past: z.string().nullable(),
// plur_past: z.string().nullable(),
// present_active: z.string().nullable(),
// present_passive: z.string().nullable(),
// past_passive: z.string().nullable(),
// past_active: z.string().nullable(),
// present_adverbial: z.string().nullable(),
// past_adverbial: z.string().nullable(),
// singular_imperative: z.string().nullable(),
// plural_imperative: z.string().nullable(),
// lemma: z.string(),
// type: z.literal("Verb"),
// commonality: z.number().nullable(),
// meanings: z.string().nullable(),

export type VerbFormData = {
    type: "Verb";
    lemma?: string;
    ipa?: string;
    commonality?: number | null;
    meanings?: string | null;

    is_perfective?: boolean;
    is_transitive?: boolean;
    root?: string | null;
    prefix?: string | null;
    aspectual_pair?: string | null;

    я_form?: string | null;
    ты_form?: string | null;
    он_form?: string | null;
    мы_form?: string | null;
    вы_form?: string | null;
    они_form?: string | null;
    fem_past?: string | null;
    masc_past?: string | null;
    neut_past?: string | null;
    plur_past?: string | null;
    present_active?: string | null;
    present_passive?: string | null;
    past_passive?: string | null;
    past_active?: string | null;
    present_adverbial?: string | null;
    past_adverbial?: string | null;
    singular_imperative?: string | null;
    plural_imperative?: string | null;
};
export const blankVerbFormData: VerbFormData = {
    type: "Verb",
};

const VerbForm: FC<{ form: Form; setForm: React.Dispatch<React.SetStateAction<Form>> }> = ({ form, setForm }) => {
    if (form.dictionary_info?.type !== "Verb") {
        return <></>;
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">lemma</span>
                <TextInput
                    placeholder="lemma"
                    value={form.lemma}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({
                                ...p,
                                lemma: e.target.value ?? null,
                                dictionary_info: {
                                    ...p.dictionary_info,
                                    lemma: e.target.value ?? null,
                                    type: "Verb",
                                    я_form: e.target.value.slice(0, e.target.value.length - 2),
                                    ты_form: e.target.value.slice(0, e.target.value.length - 2),
                                    он_form: e.target.value.slice(0, e.target.value.length - 2),
                                    мы_form: e.target.value.slice(0, e.target.value.length - 2),
                                    вы_form: e.target.value.slice(0, e.target.value.length - 2),
                                    они_form: e.target.value.slice(0, e.target.value.length - 2),
                                    fem_past: e.target.value.slice(0, e.target.value.length - 2),
                                    masc_past: e.target.value.slice(0, e.target.value.length - 2),
                                    neut_past: e.target.value.slice(0, e.target.value.length - 2),
                                    plur_past: e.target.value.slice(0, e.target.value.length - 2),
                                    present_active: e.target.value.slice(0, e.target.value.length - 2),
                                    present_passive: e.target.value.slice(0, e.target.value.length - 2),
                                    past_passive: e.target.value.slice(0, e.target.value.length - 2),
                                    past_active: e.target.value.slice(0, e.target.value.length - 2),
                                    present_adverbial: e.target.value.slice(0, e.target.value.length - 2),
                                    past_adverbial: e.target.value.slice(0, e.target.value.length - 2),
                                    singular_imperative: e.target.value.slice(0, e.target.value.length - 2),
                                    plural_imperative: e.target.value.slice(0, e.target.value.length - 2),
                                },
                            }),
                        )
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ipa</span>
                <TextInput
                    placeholder="ipa"
                    value={form.dictionary_info.ipa ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), ipa: e.target.value } }))}
                />
            </div>

            <div>
                <span>is_perfective</span>
                <Toggler
                    options={[{ text: "Perfective" }, { text: "Imperfective" }]}
                    onChange={(selected) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), is_perfective: selected.text == "Perfective" ? true : false } }),
                        )
                    }
                    selected={
                        typeof form.dictionary_info.is_perfective == "boolean"
                            ? form.dictionary_info.is_perfective
                                ? { text: "Perfective" }
                                : { text: "Imperfective" }
                            : null
                    }
                />
            </div>
            <div>
                <span>is_transitive</span>
                <Toggler
                    options={[{ text: "Transitive" }, { text: "Intransitive" }]}
                    onChange={(selected) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), is_transitive: selected.text == "Transitive" ? true : false } }),
                        )
                    }
                    selected={
                        typeof form.dictionary_info.is_transitive == "boolean"
                            ? form.dictionary_info.is_transitive
                                ? { text: "Transitive" }
                                : { text: "Intransitive" }
                            : null
                    }
                />
            </div>
            <div>
                <span>root</span>
                <TextInput
                    placeholder="root"
                    value={form.dictionary_info.root ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), root: e.target.value ?? null } }))}
                />
            </div>
            <div>
                <span>prefix</span>
                <TextInput
                    placeholder="prefix"
                    value={form.dictionary_info.prefix ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), prefix: e.target.value ?? null } }))}
                />
            </div>
            <div>
                <span>aspectual_pair</span>
                <TextInput
                    placeholder="aspectual_pair"
                    value={form.dictionary_info.aspectual_pair ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), aspectual_pair: e.target.value ?? null } }))}
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">я_form</span>
                <TextInput
                    placeholder="я_form"
                    value={form.dictionary_info.я_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), я_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ты_form</span>
                <TextInput
                    placeholder="ты_form"
                    value={form.dictionary_info.ты_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), ты_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">он_form</span>
                <TextInput
                    placeholder="он_form"
                    value={form.dictionary_info.он_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), он_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">мы_form</span>
                <TextInput
                    placeholder="мы_form"
                    value={form.dictionary_info.мы_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), мы_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">вы_form</span>
                <TextInput
                    placeholder="вы_form"
                    value={form.dictionary_info.вы_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), вы_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">они_form</span>
                <TextInput
                    placeholder="они_form"
                    value={form.dictionary_info.они_form ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), они_form: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">fem_past</span>
                <TextInput
                    placeholder="fem_past"
                    value={form.dictionary_info.fem_past ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), fem_past: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">masc_past</span>
                <TextInput
                    placeholder="masc_past"
                    value={form.dictionary_info.masc_past ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), masc_past: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">neut_past</span>
                <TextInput
                    placeholder="neut_past"
                    value={form.dictionary_info.neut_past ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), neut_past: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">plur_past</span>
                <TextInput
                    placeholder="plur_past"
                    value={form.dictionary_info.plur_past ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), plur_past: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pres_active</span>
                <TextInput
                    placeholder="present_active"
                    value={form.dictionary_info.present_active ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), present_active: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pres_passive</span>
                <TextInput
                    placeholder="present_passive"
                    value={form.dictionary_info.present_passive ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), present_passive: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">past_passive</span>
                <TextInput
                    placeholder="past_passive"
                    value={form.dictionary_info.past_passive ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), past_passive: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">past_active</span>
                <TextInput
                    placeholder="past_active"
                    value={form.dictionary_info.past_active ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), past_active: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pres_adv</span>
                <TextInput
                    placeholder="present_adverbial"
                    value={form.dictionary_info.present_adverbial ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), present_adverbial: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">past_adv</span>
                <TextInput
                    placeholder="past_adverbial"
                    value={form.dictionary_info.past_adverbial ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), past_adverbial: e.target.value ?? null } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">sing_imp</span>
                <TextInput
                    placeholder="singular_imperative"
                    value={form.dictionary_info.singular_imperative ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), singular_imperative: e.target.value ?? null } }))
                    }
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">plur_imp</span>
                <TextInput
                    placeholder="plural_imperative"
                    value={form.dictionary_info.plural_imperative ?? ""}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as VerbFormData), plural_imperative: e.target.value ?? null } }))}
                />
            </div>
        </div>
    );
};

export default VerbForm;
