import React, { FC } from "react";
import { Form } from ".";
import TextInput from "~/components/Common/TextInput";

export type AdjectiveFormData = {
    type: "Adjective";
    lemma?: string;
    ipa?: string;
    // Forms
    nom_masc?: string;
    acc_masc?: string;
    gen_masc?: string;
    dat_masc?: string;
    ins_masc?: string;
    pre_masc?: string;
    nom_fem?: string;
    acc_fem?: string;
    gen_fem?: string;
    dat_fem?: string;
    ins_fem?: string;
    pre_fem?: string;
    nom_neut?: string;
    acc_neut?: string;
    gen_neut?: string;
    dat_neut?: string;
    ins_neut?: string;
    pre_neut?: string;
    nom_plur?: string;
    acc_plur?: string;
    gen_plur?: string;
    dat_plur?: string;
    ins_plur?: string;
    pre_plur?: string;
    m_short?: string;
    f_short?: string;
    n_short?: string;
    p_short?: string;

    comparative?: string;
};
export const blankAdjectiveFormData: AdjectiveFormData = {
    type: "Adjective",
};

const AdjectiveForm: FC<{ form: Form; setForm: React.Dispatch<React.SetStateAction<Form>> }> = ({ form, setForm }) => {
    if (form.dictionary_info?.type !== "Adjective") {
        return <></>;
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">lemma</span>
                <TextInput
                    placeholder="lemma"
                    title="lemma"
                    value={form.lemma}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({
                                ...p,
                                lemma: e.target.value ?? null,
                                dictionary_info: {
                                    type: "Adjective",
                                    nom_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_masc: e.target.value.slice(0, e.target.value.length - 2),
                                    nom_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_fem: e.target.value.slice(0, e.target.value.length - 2),
                                    nom_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_neut: e.target.value.slice(0, e.target.value.length - 2),
                                    nom_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    m_short: e.target.value.slice(0, e.target.value.length - 2),
                                    f_short: e.target.value.slice(0, e.target.value.length - 2),
                                    n_short: e.target.value.slice(0, e.target.value.length - 2),
                                    p_short: e.target.value.slice(0, e.target.value.length - 2),
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
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), ipa: e.target.value } }))}
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_masc</span>
                <TextInput
                    placeholder="nom_masc"
                    value={form.dictionary_info.nom_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), nom_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_masc</span>
                <TextInput
                    placeholder="acc_masc"
                    value={form.dictionary_info.acc_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), acc_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_masc</span>
                <TextInput
                    placeholder="gen_masc"
                    value={form.dictionary_info.gen_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), gen_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_masc</span>
                <TextInput
                    placeholder="dat_masc"
                    value={form.dictionary_info.dat_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), dat_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_masc</span>
                <TextInput
                    placeholder="ins_masc"
                    value={form.dictionary_info.ins_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), ins_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_masc</span>
                <TextInput
                    placeholder="pre_masc"
                    value={form.dictionary_info.pre_masc}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), pre_masc: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_fem</span>
                <TextInput
                    placeholder="nom_fem"
                    value={form.dictionary_info.nom_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), nom_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_fem</span>
                <TextInput
                    placeholder="acc_fem"
                    value={form.dictionary_info.acc_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), acc_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_fem</span>
                <TextInput
                    placeholder="gen_fem"
                    value={form.dictionary_info.gen_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), gen_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_fem</span>
                <TextInput
                    placeholder="dat_fem"
                    value={form.dictionary_info.dat_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), dat_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_fem</span>
                <TextInput
                    placeholder="ins_fem"
                    value={form.dictionary_info.ins_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), ins_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_fem</span>
                <TextInput
                    placeholder="pre_fem"
                    value={form.dictionary_info.pre_fem}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), pre_fem: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_neut</span>
                <TextInput
                    placeholder="nom_neut"
                    value={form.dictionary_info.nom_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), nom_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_neut</span>
                <TextInput
                    placeholder="acc_neut"
                    value={form.dictionary_info.acc_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), acc_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_neut</span>
                <TextInput
                    placeholder="gen_neut"
                    value={form.dictionary_info.gen_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), gen_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_neut</span>
                <TextInput
                    placeholder="dat_neut"
                    value={form.dictionary_info.dat_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), dat_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_neut</span>
                <TextInput
                    placeholder="ins_neut"
                    value={form.dictionary_info.ins_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), ins_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_neut</span>
                <TextInput
                    placeholder="pre_neut"
                    value={form.dictionary_info.pre_neut}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), pre_neut: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_plur</span>
                <TextInput
                    placeholder="nom_plur"
                    value={form.dictionary_info.nom_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), nom_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_plur</span>
                <TextInput
                    placeholder="acc_plur"
                    value={form.dictionary_info.acc_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), acc_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_plur</span>
                <TextInput
                    placeholder="gen_plur"
                    value={form.dictionary_info.gen_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), gen_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_plur</span>
                <TextInput
                    placeholder="dat_plur"
                    value={form.dictionary_info.dat_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), dat_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_plur</span>
                <TextInput
                    placeholder="ins_plur"
                    value={form.dictionary_info.ins_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), ins_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_plur</span>
                <TextInput
                    placeholder="pre_plur"
                    value={form.dictionary_info.pre_plur}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), pre_plur: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">m_short</span>
                <TextInput
                    placeholder="m_short"
                    value={form.dictionary_info.m_short}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), m_short: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">f_short</span>
                <TextInput
                    placeholder="f_short"
                    value={form.dictionary_info.f_short}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), f_short: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">n_short</span>
                <TextInput
                    placeholder="n_short"
                    value={form.dictionary_info.n_short}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), n_short: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">p_short</span>
                <TextInput
                    placeholder="p_short"
                    value={form.dictionary_info.p_short}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), p_short: e.target.value } }))}
                />
            </div>
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">comparative</span>
                <TextInput
                    placeholder="comparative"
                    value={form.dictionary_info.comparative}
                    onChange={(e) => setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as AdjectiveFormData), comparative: e.target.value } }))}
                />
            </div>
        </div>
    );
};

export default AdjectiveForm;
