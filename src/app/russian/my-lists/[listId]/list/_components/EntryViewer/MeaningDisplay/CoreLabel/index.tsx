import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { Type, VocabularyListData } from "~/types/russian/list";
import { type NounEntry } from "~/types/russian/list/noun";
import { VerbModel, type VerbEntry } from "~/types/russian/list/verb";
import RussianVerbTreeLabel from "~/components/Verbs/Russian/RussianVerbTreeLabel";
import { russianNounStressLabel } from "~/utils/stressPatterns/russian";
import RussianVerbEtymologyLabel from "~/components/Verbs/Russian/RussianVerbEtymologyLabel";

/** Provides the central subheader for an entry, such as "perfective verb" for verbs, or "masculine noun" for a noun */
const CoreLabel: FC<{
    entry: VocabularyListData["entry_list"][0];
}> = ({ entry }) => {
    return (
        <div className={classNames(styles.label)}>
            {
                (
                    {
                        Noun: (
                            <div>
                                <div className="flex flex-row gap-1">
                                    <span>{(entry as NounEntry).model.dictionary_info.gender?.charAt(0).toLowerCase()}. noun</span>
                                    <span className="opacity-50">|</span>
                                    <span>stress: {russianNounStressLabel(entry as NounEntry)?.label}</span>
                                </div>
                            </div>
                        ),
                        Verb: (
                            <div>
                                <div className="flex flex-row gap-1">
                                    <span>{(entry as VerbEntry).model.dictionary_info.is_perfective ? "pf." : "imp."} verb</span>
                                    <span className="opacity-50">|</span>
                                    <span>
                                        tree: <RussianVerbTreeLabel model={entry.model as VerbModel} />
                                    </span>
                                </div>
                                <div>
                                    <RussianVerbEtymologyLabel entry={entry as VerbEntry} />
                                </div>
                            </div>
                        ),
                        Adjective: <div>adjective</div>,
                        Adverb: <div>Adverb</div>,
                    } satisfies Record<Type, React.ReactElement>
                )[entry.model.type]
            }
        </div>
    );
};

export default CoreLabel;
