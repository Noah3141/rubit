"use client";
import React, { useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";

type AdjectiveForm = {
    type: "adjective";
    model?: {
        lemma: string;
        ipa: string;
        // Forms
        nom_masc: string;
        acc_masc: string;
        gen_masc: string;
        dat_masc: string;
        ins_masc: string;
        pre_masc: string;
        nom_fem: string;
        acc_fem: string;
        gen_fem: string;
        dat_fem: string;
        ins_fem: string;
        pre_fem: string;
        nom_neut: string;
        acc_neut: string;
        gen_neut: string;
        dat_neut: string;
        ins_neut: string;
        pre_neut: string;
        nom_plur: string;
        acc_plur: string;
        gen_plur: string;
        dat_plur: string;
        ins_plur: string;
        pre_plur: string;

        m_short: string;
        f_short: string;
        n_short: string;
        p_short: string;
    };
};
type VerbForm = { type: "verb" };
type NounForm = { type: "noun" };
type Form = VerbForm | NounForm | AdjectiveForm | { type: null };

const AddNewWord: FC<{
    //
}> = ({}) => {
    const [form, setForm] = useState<Form>({ type: null });

    return (
        <div className={classNames(styles.form)}>
            <div className="flex flex-row gap-1">
                <Button size="small" onClick={() => setForm({ type: "verb" })}>
                    Verb
                </Button>
                <Button size="small" onClick={() => setForm({ type: "noun" })}>
                    Noun
                </Button>
                <Button size="small" onClick={() => setForm({ type: "adjective" })}>
                    Adjective
                </Button>
            </div>
            <div>
                {form.type &&
                    (
                        {
                            adjective: <AdjectiveForm form={form as AdjectiveForm} />,
                            noun: <></>,
                            verb: <></>,
                        } as Record<NonNullable<Form["type"]>, React.ReactElement>
                    )[form.type]}
            </div>
            <div>
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default AddNewWord;

const AdjectiveForm: FC<{ form: AdjectiveForm }> = ({ form }) => {
    return <div></div>;
};
