"use client";
import React, { useContext, useEffect, useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import AdjectiveForm, { blankAdjectiveFormData, type AdjectiveFormData } from "./AdjectiveForm";
import VerbForm, { blankVerbFormData, type VerbFormData } from "./VerbForm";
import NounForm, { blankNounFormData, type NounFormData } from "./NounForm";
import ExtantChecker from "./ExtantChecker";
import { DialogContext } from "../../../context";
import { api, RouterInputs } from "~/trpc/react";
import toast from "react-hot-toast";
import { DictionaryInfoSchema } from "~/types/russian/dictionary_info";
import { useRouter } from "next/navigation";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

export type Form = { lemma: string; meanings: string | null; commonality: number | null; dictionary_info: VerbFormData | NounFormData | AdjectiveFormData | null };
const blankForm: Form = {
    //
    lemma: "",
    meanings: null,
    dictionary_info: null,
    commonality: null,
};

const AddNewWord: FC<{
    listId: string;
}> = ({ listId }) => {
    const [form, setForm] = useState<Form>(blankForm);
    const [state, setState] = useContext(DialogContext);

    useEffect(() => setForm(blankForm), [state]);
    const router = useRouter();
    const updateList = api.list.russian.update.useMutation({
        onMutate() {
            toast.loading(`Updating list...`, { id: "update-list" });
        },
        onError() {
            toast.error("Failed to update the list!", { id: "update-list" });
        },
        onSuccess() {
            toast.success("List updated!", { id: "update-list" });
            router.refresh();
        },
        onSettled() {
            updateList.reset();
        },
    });

    const submit = api.entry.create.useMutation({
        onMutate(variables: RouterInputs["entry"]["create"]) {
            toast.loading(`Adding entry for '${variables.lemma}'...`, { id: "add-entry" });
        },
        onError() {
            toast.error("Failed to create new entry!", { id: "add-entry" });
        },
        onSuccess() {
            toast.success("New entry created!", { id: "add-entry" });
            updateList.mutate({ listId });
            router.refresh();
        },
        onSettled() {
            setTimeout(() => submit.reset(), 3000);
        },
    });

    return (
        <div className={classNames(styles.form)}>
            <ExtantChecker />

            <div className="flex flex-row gap-1">
                <Button
                    size="small"
                    color={form.dictionary_info?.type == "Verb" ? "orange" : "neutral"}
                    onClick={() => setForm({ ...blankForm, dictionary_info: blankVerbFormData })}
                >
                    Verb
                </Button>
                <Button
                    size="small"
                    color={form.dictionary_info?.type == "Noun" ? "orange" : "neutral"}
                    onClick={() => setForm({ ...blankForm, dictionary_info: blankNounFormData })}
                >
                    Noun
                </Button>
                <Button
                    size="small"
                    color={form.dictionary_info?.type == "Adjective" ? "orange" : "neutral"}
                    onClick={() => setForm({ ...blankForm, dictionary_info: blankAdjectiveFormData })}
                >
                    Adjective
                </Button>
            </div>

            <div className="flex flex-col text-lg">
                <span>
                    {`а\u0301`} {`я\u0301`}
                </span>
                <span>
                    {`о\u0301`} {`ё`}
                </span>
                <span>
                    {`ы\u0301`} {`и\u0301`}
                </span>
                <span>
                    {`э\u0301`} {`е\u0301`}
                </span>
                <span>
                    {`у\u0301`} {`ю\u0301`}
                </span>
            </div>

            <div className="py-6 md:px-3">
                {form.dictionary_info?.type &&
                    (
                        {
                            Adjective: <AdjectiveForm form={form} setForm={setForm} />,
                            Noun: <NounForm form={form} setForm={setForm} />,
                            Verb: <VerbForm form={form} setForm={setForm} />,
                        } as Record<"Verb" | "Noun" | "Adjective", React.ReactElement>
                    )[form.dictionary_info.type]}
            </div>

            <div>
                <Button
                    onClick={() => {
                        if (!form.dictionary_info || !form.lemma.length) {
                            toast.error("Incomplete form...");
                            return;
                        }
                        try {
                            submit.mutate({
                                //
                                commonality: form.commonality,
                                lemma: form.lemma,
                                meanings: form.meanings,
                                type: form.dictionary_info.type,
                                dictionary_info: DictionaryInfoSchema.parse(form.dictionary_info),
                            });
                        } catch (error) {
                            toast(JSON.stringify(form.dictionary_info));
                            toast.error((error as Error).message, { duration: 50000, id: "error-submitting" });
                        }
                    }}
                >
                    Submit
                </Button>
            </div>
        </div>
    );
};
export default AddNewWord;
