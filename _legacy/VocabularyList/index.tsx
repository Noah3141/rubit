"use client";

import classNames from "classnames";
import React, { type FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";
import styles from "./index.module.css";
import NounItem from "./NounItem";
import AdjectiveItem from "./AdjectiveItem";
import VerbItem from "./VerbItem";
import type { VerbEntry } from "~/types/russian/list/verb";
import type { AdjEntry } from "~/types/russian/list/adjective";
import type { NounEntry } from "~/types/russian/list/noun";
import Header from "~/components/Base/Header";
import EntryList from "~/components/Lists/EntryList";
import { Row } from "~/components/Lists/EntryList";

const VocabularyList: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    // const formFrequencies = Object.entries(vocabularyList.form_frequencies);
    // formFrequencies.sort((a, b) => b[1] - a[1]);
    vocabularyList.entry_list
        .sort((a, b) => b.frequency - a.frequency)
        .sort((a, b) => a.model.type.localeCompare(b.model.type));

    //TODO
    // BUNCH OF COOL SICK STATE
    //
    //

    return (
        <div className={classNames(styles.container)}>
            <div className="w-96 border">Controls</div>
            <EntryList>
                {vocabularyList.entry_list.map((entry) => (
                    <Row
                        key={entry.model.id}
                        ipa={entry.model.dictionary_info.ipa}
                        lemma={entry.model.lemma}
                        label={" "}
                    />
                ))}
            </EntryList>
            <div>Viewer</div>
        </div>
    );
};

export default VocabularyList;
