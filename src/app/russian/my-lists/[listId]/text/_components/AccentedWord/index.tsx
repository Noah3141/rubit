import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import MeaningDisplay from "../../../_components/EntryViewer/MeaningDisplay";
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
import CoreLabel from "../../../_components/EntryViewer/MeaningDisplay/CoreLabel";
import { heatScore } from "~/utils/heatScore";

const AccentedWord: FC<{
    word: string;
    entry: VocabularyListData["entry_list"][0];
}> = ({ word, entry }) => {
    const unaccentedLemma = entry.model.lemma.replace("\u0301", "");
    const commonalityLabel = entry.model.commonality ? `${Math.floor(1 / entry.model.commonality)}  pages to see` : "commonality n/a";

    return (
        <>
            <Tooltip clickable openOnClick style={{ zIndex: 999 }} anchorSelect={`#${word}`}>
                <div>
                    <span>
                        <Header level="3">{entry.model.lemma} </Header>
                        <CoreLabel entry={entry} />
                        <div>{commonalityLabel}</div>
                        <div className="flex flex-row items-center gap-3">
                            <IPA>{entry.model.dictionary_info.ipa}</IPA>
                        </div>
                    </span>
                </div>

                <hr className="my-3 border-purple-700" />

                <div className="flex flex-col gap-3">
                    <MeaningDisplay entry={entry} />

                    <GPTSentencer token={entry.model.lemma} language="Russian" />

                    {
                        (
                            {
                                Adjective: <AdjectiveForms entry={entry as AdjEntry} />,
                                Noun: <NounForms entry={entry as NounEntry} />,
                                Verb: <VerbForms entry={entry as VerbEntry} />,
                                Adverb: <></>,
                            } satisfies Record<Type, React.ReactElement>
                        )[entry.model.type]
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
            </Tooltip>
            <span id={word} className={classNames(styles.word)}>
                {word}
                <div
                    className={classNames(styles.backdrop)}
                    style={{
                        backgroundColor: heatScore(entry.model.commonality),
                    }}
                ></div>
            </span>
        </>
    );
};

export default AccentedWord;
