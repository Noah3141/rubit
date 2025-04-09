import React, { useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { Type, VocabularyListData } from "~/types/russian/list";
import Header from "~/components/Base/Header";
import IPA from "~/components/Common/IPA";
import Link from "~/components/Common/Link";
import { VerbEntry } from "~/types/russian/list/verb";
import { NounEntry } from "~/types/russian/list/noun";
import { AdjEntry } from "~/types/russian/list/adjective";
import AdjectiveForms from "~/components/Tables/RussianAdjectiveForms";
import NounForms from "~/components/Tables/RussianNounForms";
import VerbForms from "~/components/Tables/RussianVerbForms";
import GPTSentencer from "~/components/Common/GPTSentencer";
import Tooltip from "~/components/Containers/Tooltip";
import { heatScore } from "~/utils/heatScore";
import { CgClose } from "react-icons/cg";
import CoreLabel from "../../../list/_components/EntryViewer/MeaningDisplay/CoreLabel";
import MeaningDisplay from "../../../list/_components/EntryViewer/MeaningDisplay";
import { russianNounStressLabel } from "~/utils/stressPatterns/russian";
import RussianVerbMorphemes from "~/components/Verbs/Russian/RussianVerbMorphemes";

const AccentedWord: FC<{
    word: string;
    matchingForms: string[];
    entry: VocabularyListData["entry_list"][0];
}> = ({ word, entry, matchingForms }) => {
    const unaccentedLemma = entry.model.lemma.replace("\u0301", "");
    const commonalityLabel = entry.model.commonality ? `${Math.floor(1 / entry.model.commonality)}  pages to see` : "commonality n/a";
    const possibleAccents = [...new Set(matchingForms)];
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip clickable openOnClick setIsOpen={setOpen} isOpen={open} style={{ zIndex: 999 }} anchorSelect={`#${word}`}>
                {possibleAccents.length > 1 && <div>{possibleAccents.join(" | ")}</div>}
                <div>
                    <div className="flex w-full flex-row items-start justify-between">
                        <span className="text-2xl">{entry.model.lemma} </span>
                        <div onClick={() => setOpen(false)} className="grid size-6 cursor-pointer place-items-center hover:bg-neutral-800">
                            <CgClose />
                        </div>
                    </div>
                    <CoreLabel entry={entry} />
                    <div>{commonalityLabel}</div>
                    <div className="flex flex-row items-center gap-3">
                        <IPA>{entry.model.dictionary_info.ipa}</IPA>
                    </div>
                </div>

                <hr className="my-3 border-neutral-700" />

                <div className={`flex flex-col gap-3`}>
                    <MeaningDisplay entry={entry} />
                    <GPTSentencer token={entry.model.lemma} language="Russian" />

                    {
                        (
                            {
                                Adjective: (
                                    <section>
                                        <AdjectiveForms entry={entry as AdjEntry} />
                                    </section>
                                ),
                                Noun: (
                                    <section>
                                        <div>Stress: {russianNounStressLabel(entry as NounEntry)?.label}</div>
                                        <NounForms entry={entry as NounEntry} />
                                    </section>
                                ),
                                Verb: (
                                    <section>
                                        <RussianVerbMorphemes entry={entry as VerbEntry} />
                                        <VerbForms entry={entry as VerbEntry} />
                                    </section>
                                ),
                                Adverb: <></>,
                            } satisfies Record<Type, React.ReactElement>
                        )[entry.model.type]
                    }
                    <div className="flex flex-col gap-1">
                        <Link target="_blank" href={`https://en.wiktionary.org/wiki/${unaccentedLemma}#Russian`}>
                            Wiktionary
                        </Link>
                        <Link target="_blank" href={`https://ru.wiktionary.org/wiki/${unaccentedLemma}#Russian`}>
                            Викисловарь
                        </Link>
                    </div>
                </div>
            </Tooltip>
            <span id={word} className={classNames(styles.word)}>
                {word}
                <span
                    className={classNames(styles.backdrop)}
                    style={{
                        backgroundColor: heatScore(entry.model.commonality),
                    }}
                ></span>
            </span>
        </>
    );
};

export default AccentedWord;
