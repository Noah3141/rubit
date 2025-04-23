import React, { FC } from "react";
import { Form } from ".";
import TextInput from "~/components/Common/TextInput";
import Toggler from "~/components/Common/Toggler";

export type NounFormData = {
    //
    type: "Noun";
    lemma?: string;
    ipa?: string;
    gender?: "Masculine" | "Feminine" | "Neuter" | null;
    nom_sing?: string | null;
    nom_plur?: string | null;
    acc_sing?: string | null;
    acc_plur?: string | null;
    gen_sing?: string | null;
    gen_plur?: string | null;
    dat_sing?: string | null;
    dat_plur?: string | null;
    ins_sing?: string | null;
    ins_plur?: string | null;
    pre_sing?: string | null;
    pre_plur?: string | null;
    loc_sing?: string;
    par_sing?: string;
    vocative?: string;
    paucal?: string;
};
export const blankNounFormData: NounFormData = {
    type: "Noun",
};

const NounForm: FC<{ form: Form; setForm: React.Dispatch<React.SetStateAction<Form>> }> = ({ form, setForm }) => {
    if (form.dictionary_info?.type !== "Noun") {
        return <></>;
    }

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">lemma</span>
                <TextInput
                    placeholder="lemma"
                    value={form.dictionary_info.lemma ?? ""}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({
                                ...p,
                                lemma: e.target.value,
                                dictionary_info: {
                                    ...(p.dictionary_info as NounFormData),
                                    type: "Noun",
                                    lemma: e.target.value.length ? e.target.value : undefined,
                                    nom_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    nom_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    acc_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    gen_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    dat_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    ins_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_sing: e.target.value.slice(0, e.target.value.length - 2),
                                    pre_plur: e.target.value.slice(0, e.target.value.length - 2),
                                    loc_sing: e.target.value.slice(0, e.target.value.length - 2),
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
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), ipa: e.target.value.length ? e.target.value : undefined } }))
                    }
                />
            </div>

            <div>
                <span>gender</span>
                <Toggler
                    options={[{ text: "Masculine" }, { text: "Feminine" }, { text: "Neuter" }]}
                    onChange={(selected) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), gender: selected.text as "Masculine" | "Feminine" | "Neuter" } }),
                        )
                    }
                    selected={form.dictionary_info.gender ? { text: form.dictionary_info.gender } : null}
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_sing</span>
                <TextInput
                    placeholder="nom_sing"
                    value={form.dictionary_info.nom_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), nom_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">nom_plur</span>
                <TextInput
                    placeholder="nom_plur"
                    value={form.dictionary_info.nom_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), nom_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_sing</span>
                <TextInput
                    placeholder="acc_sing"
                    value={form.dictionary_info.acc_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), acc_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">acc_plur</span>
                <TextInput
                    placeholder="acc_plur"
                    value={form.dictionary_info.acc_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), acc_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_sing</span>
                <TextInput
                    placeholder="gen_sing"
                    value={form.dictionary_info.gen_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), gen_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">gen_plur</span>
                <TextInput
                    placeholder="gen_plur"
                    value={form.dictionary_info.gen_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), gen_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_sing</span>
                <TextInput
                    placeholder="dat_sing"
                    value={form.dictionary_info.dat_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), dat_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">dat_plur</span>
                <TextInput
                    placeholder="dat_plur"
                    value={form.dictionary_info.dat_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), dat_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_sing</span>
                <TextInput
                    placeholder="ins_sing"
                    value={form.dictionary_info.ins_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), ins_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">ins_plur</span>
                <TextInput
                    placeholder="ins_plur"
                    value={form.dictionary_info.ins_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), ins_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_sing</span>
                <TextInput
                    placeholder="pre_sing"
                    value={form.dictionary_info.pre_sing ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), pre_sing: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">pre_plur</span>
                <TextInput
                    placeholder="pre_plur"
                    value={form.dictionary_info.pre_plur ?? ""}
                    onChange={(e) =>
                        setForm((p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), pre_plur: e.target.value.length ? e.target.value : null } }))
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">loc_sing</span>
                <TextInput
                    placeholder="loc_sing"
                    value={form.dictionary_info.loc_sing ?? ""}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), loc_sing: e.target.value.length ? e.target.value : undefined } }),
                        )
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">par_sing</span>
                <TextInput
                    placeholder="par_sing"
                    value={form.dictionary_info.par_sing ?? ""}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), par_sing: e.target.value.length ? e.target.value : undefined } }),
                        )
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">vocative</span>
                <TextInput
                    placeholder="vocative"
                    value={form.dictionary_info.vocative ?? ""}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), vocative: e.target.value.length ? e.target.value : undefined } }),
                        )
                    }
                />
            </div>

            <div className="flex flex-row gap-1">
                <span className="w-24 shrink-0">paucal</span>
                <TextInput
                    placeholder="paucal"
                    value={form.dictionary_info.paucal ?? ""}
                    onChange={(e) =>
                        setForm(
                            (p): Form => ({ ...p, dictionary_info: { ...(p.dictionary_info as NounFormData), paucal: e.target.value.length ? e.target.value : undefined } }),
                        )
                    }
                />
            </div>
        </div>
    );
};

export default NounForm;
