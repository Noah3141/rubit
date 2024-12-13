"use client";

import React, { useEffect, useState, type FC } from "react";
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
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import NumberInput from "~/components/Common/NumberInput";

const Content: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();
    vocabularyList.entry_list.sort(() => Math.random() - 0.5);
    const [commonalityThreshold, setCommonalityThreshold] = useState<[number | undefined, number | undefined]>([1, undefined]);

    const [testingEntries, setTestingEntries] = useState(vocabularyList.entry_list);

    useEffect(() => {
        setTestingEntries(
            vocabularyList.entry_list.filter((entry) => {
                if (entry.model.commonality) {
                    if (!!commonalityThreshold[0] && 1 / entry.model.commonality < commonalityThreshold[0]) {
                        return false;
                    }

                    if (!!commonalityThreshold[1] && 1 / entry.model.commonality > commonalityThreshold[1]) {
                        return false;
                    }

                    return true;
                } else {
                    return true;
                }
            }),
        );
    }, [commonalityThreshold[0], commonalityThreshold[1]]);

    const [testIdx, setTestIdx] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const testEntry = testingEntries[testIdx]!;
    const unaccentedLemma = testEntry.model.lemma.replace("\u0301", "");
    const commonalityLabel = testEntry.model.commonality ? `${Math.floor(1 / testEntry.model.commonality)}  pages to see` : "commonality n/a";

    return (
        <>
            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-3">
                    <Button
                        onClick={() => {
                            setTestIdx((p) => {
                                if (!!testingEntries[p - 1]) {
                                    return p - 1;
                                } else {
                                    return 0;
                                }
                            });
                        }}
                    >
                        Previous
                    </Button>
                    <Button onClick={() => setFlipped((p) => !p)}>Flip</Button>
                    <Button
                        onClick={() => {
                            setTestIdx((p) => {
                                if (!!testingEntries[p + 1]) {
                                    return p + 1;
                                } else {
                                    return 0;
                                }
                            });
                        }}
                    >
                        Next
                    </Button>
                    <div className="h-full w-1 border-r border-r-purple-600"></div>
                    <div className="flex flex-row items-center gap-1">
                        From:
                        <NumberInput
                            value={commonalityThreshold[0]}
                            onChange={(e) => {
                                setCommonalityThreshold((p) => {
                                    if (e.target.value == "") {
                                        return [undefined, p[1]];
                                    }

                                    const newLower = Number(e.target.value);
                                    if (p[1] && newLower > p[1]) {
                                        return p;
                                    }

                                    return [newLower, p[1]];
                                });
                            }}
                        />
                        To:
                        <NumberInput
                            value={commonalityThreshold[1]}
                            onChange={(e) => {
                                setCommonalityThreshold((p) => {
                                    if (e.target.value == "") {
                                        return [p[0], undefined];
                                    }
                                    const newUpper = Number(e.target.value);
                                    if (p[0] && p[0] > newUpper) {
                                        return p;
                                    }

                                    return [p[0], newUpper];
                                });
                            }}
                        />
                    </div>
                </div>
                <div suppressHydrationWarning className="text-4xl">
                    {flipped ? <MeaningDisplay entry={testEntry} /> : unaccentedLemma}
                </div>
                <div>{commonalityLabel}</div>

                <Dropdown header="Dictionary">
                    <div>
                        <div>
                            <span>
                                <Header level="3">
                                    {testEntry.model.lemma} <FrequencyLabel>{testEntry.frequency}</FrequencyLabel>
                                </Header>
                                <span>
                                    {testEntry.model.type}{" "}
                                    {testEntry.model.type == "Verb" && (testEntry.model.dictionary_info.is_perfective ? "(perfective)" : "(imperfective)")}
                                    {testEntry.model.type == "Noun" && `(${testEntry.model.dictionary_info.gender.toLowerCase()})`}
                                </span>
                                <div>{commonalityLabel}</div>
                                <div className="flex flex-row items-center gap-3">
                                    <IPA>{testEntry.model.dictionary_info.ipa}</IPA>
                                    <span className="font-serif">{unaccentedLemma}</span>
                                    <i className="font-serif">{unaccentedLemma}</i>
                                </div>
                            </span>
                        </div>

                        <hr className="my-3 border-purple-700" />
                        <div className="flex flex-col gap-3">
                            <MeaningDisplay entry={testEntry} />

                            <GPTSentencer token={testEntry.model.lemma} language="Russian" />

                            {
                                (
                                    {
                                        Adjective: <AdjectiveForms entry={testEntry as AdjEntry} />,
                                        Noun: <NounForms entry={testEntry as NounEntry} />,
                                        Verb: <VerbForms entry={testEntry as VerbEntry} />,
                                        Adverb: <></>,
                                    } satisfies Record<Type, React.ReactElement>
                                )[testEntry.model.type]
                            }

                            <div className="flex flex-col gap-1">
                                <Link target="_blank" href={`https://en.wiktionary.org/wiki/${unaccentedLemma}`}>
                                    Wiktionary
                                </Link>
                                <Link target="_blank" href={`https://ru.wiktionary.org/wiki/${unaccentedLemma}`}>
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
