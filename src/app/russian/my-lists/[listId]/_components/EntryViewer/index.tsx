"use client";

import classNames from "classnames";
import React, { useEffect, type FC } from "react";
import { type Type, type VocabularyListData } from "~/types/russian/list";
import styles from "./index.module.css";
import Header from "~/components/Base/Header";
import IPA from "~/components/Common/IPA";
import FrequencyLabel from "~/components/Common/FrequencyLabel";
import GPTSentencer from "~/components/Common/GPTSentencer";
import { TiFlag } from "react-icons/ti";
import Button from "~/components/Common/Button";
import VerbForms from "~/components/Tables/RussianVerbForms";
import NounForms from "~/components/Tables/RussianNounForms";
import AdjectiveForms from "~/components/Tables/RussianAdjectiveForms";
import type { VerbEntry } from "~/types/russian/list/verb";
import type { NounEntry } from "~/types/russian/list/noun";
import type { AdjEntry } from "~/types/russian/list/adjective";
import MeaningDisplay from "~/app/russian/my-lists/[listId]/_components/EntryViewer/MeaningDisplay";
import Link from "~/components/Common/Link";
import type { PopUpState } from "../PopUp";
import CloseButton from "~/components/Icons/CloseButton";
import { api } from "~/trpc/react";

const EntryViewer: FC<{
    entry: VocabularyListData["entry_list"][0] | undefined;
    setEntry: React.Dispatch<
        React.SetStateAction<VocabularyListData["entry_list"][0] | undefined>
    >;
    setPopUp: React.Dispatch<React.SetStateAction<PopUpState>>;
}> = ({ entry, setEntry, setPopUp }) => {
    const unaccentedLemma = entry?.model.lemma.replace("\u0301", "");

    const autoUpdate = api.autoUpdate.entry.useQuery({ entry });

    useEffect(() => {
        setPopUp(null);
    }, [entry?.model.id]);

    return (
        <div className={classNames(styles.column, { [styles.open!]: !!entry })}>
            {!!entry && (
                <div className={classNames(styles.viewer)}>
                    <div className={classNames(styles.header)}>
                        <span>
                            <Header level="3">
                                {entry.model.lemma}{" "}
                                <FrequencyLabel>
                                    {entry.frequency}
                                </FrequencyLabel>
                            </Header>
                            {entry.model.type}
                            <div>
                                {typeof entry.model.commonality == "number"
                                    ? Math.floor(1 / entry.model.commonality)
                                    : "na"}{" "}
                                pages to see
                            </div>
                            <div
                                className={classNames(
                                    styles.altRepresentations,
                                )}
                            >
                                <IPA>{entry.model.dictionary_info.ipa}</IPA>
                                <span className="font-serif">
                                    {unaccentedLemma}
                                </span>
                                <i className="font-serif">{unaccentedLemma}</i>
                            </div>
                        </span>
                        <CloseButton onMouseDown={() => setEntry(undefined)} />
                    </div>

                    <hr className="my-3 border-purple-700" />
                    <div className="flex flex-col gap-3">
                        <MeaningDisplay
                            status={autoUpdate.status}
                            meanings={
                                entry.model.meanings ?? autoUpdate.data ?? null
                            }
                        />

                        <GPTSentencer
                            token={entry.model.lemma}
                            language="Russian"
                        />

                        {
                            (
                                {
                                    Adjective: (
                                        <AdjectiveForms
                                            entry={entry as AdjEntry}
                                        />
                                    ),
                                    Noun: (
                                        <NounForms entry={entry as NounEntry} />
                                    ),
                                    Verb: (
                                        <VerbForms entry={entry as VerbEntry} />
                                    ),
                                    Adverb: <></>,
                                } satisfies Record<Type, React.ReactElement>
                            )[entry.model.type]
                        }

                        <div className="flex flex-col gap-1">
                            <Link
                                target="_blank"
                                href={`https://en.wiktionary.org/wiki/${unaccentedLemma}`}
                            >
                                Wiktionary
                            </Link>
                            <Link
                                target="_blank"
                                href={`https://ru.wiktionary.org/wiki/${unaccentedLemma}`}
                            >
                                Викисловарь
                            </Link>
                        </div>
                        <div className="mt-6">
                            <Button
                                onClick={() => {
                                    setPopUp({ tab: "Flag", entry });
                                }}
                                color="red"
                                size="small"
                            >
                                <TiFlag size={24} className="fill-red-950" />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EntryViewer;
