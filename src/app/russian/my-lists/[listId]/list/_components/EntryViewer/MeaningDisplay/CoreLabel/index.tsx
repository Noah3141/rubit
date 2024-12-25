import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { Type, VocabularyListData } from "~/types/russian/list";
import {type  NounEntry } from "~/types/russian/list/noun";
import { type VerbEntry } from "~/types/russian/list/verb";

/** Provides the central subheader for an entry, such as "perfective verb" for verbs, or "masculine noun" for a noun */
const CoreLabel: FC<{
    entry: VocabularyListData["entry_list"][0];
}> = ({ entry }) => {
    return (
        <div className={classNames(styles.label)}>
            {
                (
                    {
                        Noun: <>{(entry as NounEntry).model.dictionary_info.gender} Noun</>,
                        Verb: <>{(entry as VerbEntry).model.dictionary_info.is_perfective ? "Perfective" : "Imperfective"} Verb</>,
                        Adjective: <>Adjective</>,
                        Adverb: <>Adverb</>,
                    } satisfies Record<Type, React.ReactElement>
                )[entry.model.type]
            }
        </div>
    );
};

export default CoreLabel;
