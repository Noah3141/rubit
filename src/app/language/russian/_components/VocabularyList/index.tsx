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

    const nouns: NounEntry[] = [];
    const verbs: VerbEntry[] = [];
    const adjectives: AdjEntry[] = [];

    vocabularyList.entry_list.forEach((entry) => {
        switch (entry.model.type) {
            case "Noun":
                nouns.push(entry as NounEntry);
                return;
            case "Verb":
                verbs.push(entry as VerbEntry);
                return;
            case "Adjective":
                adjectives.push(entry as AdjEntry);
                return;
            case "Adverb":
                return;
        }
    });

    return (
        <div className={classNames(styles.container)}>
            <section>
                <Header level="2">Verbs</Header>
                <div className={classNames(styles.list)}>
                    {verbs.map((entry) => (
                        <VerbItem key={entry.model.lemma} entry={entry} />
                    ))}
                </div>
            </section>
            <section>
                <Header level="2">Nouns</Header>
                <div className={classNames(styles.list)}>
                    {nouns.map((entry) => (
                        <NounItem key={entry.model.lemma} entry={entry} />
                    ))}
                </div>
            </section>
            <section>
                <Header level="2">Adjectives</Header>
                <div className={classNames(styles.list)}>
                    {adjectives.map((entry) => (
                        <AdjectiveItem key={entry.model.lemma} entry={entry} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default VocabularyList;
