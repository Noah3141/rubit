"use client";

import React, { useState, type FC } from "react";
import Button from "~/components/Common/Button";
import PageSelector from "../../[listId]/_components/PageSelector";
import { type RouterOutputs } from "~/trpc/react";
import Header from "~/components/Base/Header";
import FrequencyLabel from "~/components/Common/FrequencyLabel";
import IPA from "~/components/Common/IPA";
import GPTSentencer from "~/components/Common/GPTSentencer";
import AdjectiveForms from "~/components/Tables/RussianAdjectiveForms";
import NounForms from "~/components/Tables/RussianNounForms";
import VerbForms from "~/components/Tables/RussianVerbForms";
import { type Type } from "~/types/russian/list";
import Link from "~/components/Common/Link";
import { type AdjEntry } from "~/types/russian/list/adjective";
import { type NounEntry } from "~/types/russian/list/noun";
import { type VerbEntry } from "~/types/russian/list/verb";
import Dropdown from "~/components/Containers/Dropdown";
import MeaningDisplay from "../../[listId]/_components/EntryViewer/MeaningDisplay";

const Content: FC<{
    vocabularyList: RouterOutputs["list"]["russian"]["get"];
}> = ({ vocabularyList }) => {
    vocabularyList.entry_list.sort(() => Math.random() - 0.5);

    const [testIdx, setTestIdx] = useState(0);
    const shownEntry = vocabularyList.entry_list[testIdx]!;
    const unaccentedLemma = shownEntry.model.lemma.replace("\u0301", "");
    const commonalityLabel = shownEntry.model.commonality
        ? `${Math.floor(1 / shownEntry.model.commonality)}  pages to see`
        : "commonality n/a";

    return (
        <>
            <Header level="2">{vocabularyList.title}</Header>
            <PageSelector vocabularyList={vocabularyList} />

            <div className="flex flex-col gap-6">
                <div className="text-4xl">{unaccentedLemma}</div>
                <div>{commonalityLabel}</div>
                <div className="flex flex-row gap-3">
                    <Button
                        onClick={() => {
                            setTestIdx((p) => {
                                if (!!vocabularyList.entry_list[p + 1]) {
                                    return p + 1;
                                } else {
                                    return 0;
                                }
                            });
                        }}
                    >
                        Next
                    </Button>
                </div>
                <Dropdown header="Dictionary">
                    <div>
                        <div>
                            <span>
                                <Header level="3">
                                    {shownEntry.model.lemma}{" "}
                                    <FrequencyLabel>
                                        {shownEntry.frequency}
                                    </FrequencyLabel>
                                </Header>
                                {shownEntry.model.type}
                                <div>{commonalityLabel}</div>
                                <div className="flex flex-row items-center gap-3">
                                    <IPA>
                                        {shownEntry.model.dictionary_info.ipa}
                                    </IPA>
                                    <span className="font-serif">
                                        {unaccentedLemma}
                                    </span>
                                    <i className="font-serif">
                                        {unaccentedLemma}
                                    </i>
                                </div>
                            </span>
                        </div>

                        <hr className="my-3 border-purple-700" />
                        <div className="flex flex-col gap-3">
                            <MeaningDisplay entry={shownEntry} />

                            <GPTSentencer
                                token={shownEntry.model.lemma}
                                language="Russian"
                            />

                            {
                                (
                                    {
                                        Adjective: (
                                            <AdjectiveForms
                                                entry={shownEntry as AdjEntry}
                                            />
                                        ),
                                        Noun: (
                                            <NounForms
                                                entry={shownEntry as NounEntry}
                                            />
                                        ),
                                        Verb: (
                                            <VerbForms
                                                entry={shownEntry as VerbEntry}
                                            />
                                        ),
                                        Adverb: <></>,
                                    } satisfies Record<Type, React.ReactElement>
                                )[shownEntry.model.type]
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
                        </div>
                    </div>
                </Dropdown>
            </div>
        </>
    );
};

export default Content;
