import React, { useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { type Type, type VocabularyListData } from "~/types/russian/list";
import Tooltip from "~/components/Containers/Tooltip";
import Header from "~/components/Base/Header";
import AdjectiveForms from "~/components/Tables/RussianAdjectiveForms";
import NounForms from "~/components/Tables/RussianNounForms";
import VerbForms from "~/components/Tables/RussianVerbForms";
import { type VerbEntry } from "~/types/russian/list/verb";
import { type NounEntry } from "~/types/russian/list/noun";
import { type AdjEntry } from "~/types/russian/list/adjective";
import IPA from "~/components/Common/IPA";
import Link from "~/components/Common/Link";
import { unaccent } from "~/utils/strings";
import { CgClose } from "react-icons/cg";
import CoreLabel from "../../../list/_components/EntryViewer/MeaningDisplay/CoreLabel";
import MeaningDisplay from "../../../list/_components/EntryViewer/MeaningDisplay";

const AmbiguousWord: FC<{
    word: string;
    entries: VocabularyListData["entry_list"];
}> = ({ entries, word }) => {
    const sorted = entries.sort((a, b) => b.model.commonality! - a.model.commonality!);
    const accentedForms = entries
        .flatMap((entry) => Object.values(entry.model.dictionary_info).filter((val) => typeof val == "string"))
        .reduce((list, item) => {
            if (!list.includes(item)) list.push(item);
            return list;
        }, [] as string[])
        .filter((form) => unaccent({ str: form, removeЁ: true }) == unaccent({ str: word.toLowerCase(), removeЁ: true }));

    let accentedWord = accentedForms.length == 1 ? accentedForms.at(0)! : word;
    const wordStartsWithCapital = !word.startsWith(word.toLowerCase().charAt(0));
    if (wordStartsWithCapital) {
        accentedWord = accentedWord.charAt(0).toUpperCase() + accentedWord.slice(1);
    }

    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip clickable openOnClick setIsOpen={setOpen} isOpen={open} style={{ zIndex: 999 }} anchorSelect={`#${word}`} className="max-h-[700px] overflow-y-scroll">
                <div className="flex w-full flex-row items-start justify-between">
                    <span className="italic">{accentedForms.join(" | ")}</span>
                    <div onClick={() => setOpen(false)} className="grid size-6 cursor-pointer place-items-center hover:bg-neutral-800">
                        <CgClose />
                    </div>
                </div>
                <div className="flex flex-col gap-6 divide-neutral-600 overflow-y-scroll p-3">
                    {sorted.map((entry) => {
                        const unaccentedLemma = entry.model.lemma.replace("\u0301", "");
                        const commonalityLabel = entry.model.commonality ? `${Math.floor(1 / entry.model.commonality)}  pages to see` : "commonality n/a";
                        return (
                            <div key={entry.model.id}>
                                <div>
                                    <span className="text-2xl">{entry.model.lemma} </span>

                                    <CoreLabel entry={entry} />
                                    <div>{commonalityLabel}</div>
                                    <div className="flex flex-row items-center gap-3">
                                        <IPA>{entry.model.dictionary_info.ipa}</IPA>
                                    </div>
                                </div>
                                <hr className="my-3" />
                                <div className="flex flex-col gap-3">
                                    <MeaningDisplay entry={entry} />

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

                                    <div className="flex w-full flex-row justify-between">
                                        <Link target="_blank" href={`https://en.wiktionary.org/wiki/${unaccentedLemma}`}>
                                            Wiktionary
                                        </Link>
                                        <Link target="_blank" href={`https://ru.wiktionary.org/wiki/${unaccentedLemma}`}>
                                            Викисловарь
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Tooltip>
            <span id={word} className={classNames(styles.word)}>
                {accentedWord}
                <div
                    className={classNames(styles.backdrop)}
                    style={{
                        backgroundColor: "rgb(200, 200, 200)",
                    }}
                ></div>
            </span>
        </>
    );
};

export default AmbiguousWord;
