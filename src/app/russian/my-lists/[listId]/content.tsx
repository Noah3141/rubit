"use client";

import React, { useState, type FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";
import EntryList, { Row } from "./_components/EntryList";
import EntryViewer from "./_components/EntryViewer";
import EntryControls from "./_components/EntryControls";
import PopUp, { PopUpState } from "./_components/PopUp";

//
// State Prep
//

export type Filter = {
    Noun: boolean;
    Verb: boolean;
    Adjective: boolean;
    Adverb: boolean;
};
const SORTERS = {
    frequency: (
        a: VocabularyListData["entry_list"][0],
        b: VocabularyListData["entry_list"][0],
    ) => {
        return a.frequency - b.frequency;
    },
    alphabetical: (
        a: VocabularyListData["entry_list"][0],
        b: VocabularyListData["entry_list"][0],
    ) => {
        return a.model.lemma.localeCompare(b.model.lemma);
    },
    length: (
        a: VocabularyListData["entry_list"][0],
        b: VocabularyListData["entry_list"][0],
    ) => {
        return a.model.lemma.length - b.model.lemma.length;
    },
    commonality: (
        a: VocabularyListData["entry_list"][0],
        b: VocabularyListData["entry_list"][0],
    ) => {
        return (a.model.commonality ?? 0.0) - (b.model.commonality ?? 0.0);
    },
};

export type Sorter = "frequency" | "alphabetical" | "commonality" | "length";

///
/// Component
///

const Content: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    const [viewedEntry, setViewedEntry] =
        useState<VocabularyListData["entry_list"][0]>();

    const [filter, setFilter] = useState<Filter>({
        Verb: true,
        Noun: true,
        Adjective: true,
        Adverb: false,
    });
    const [popUp, setPopUp] = useState<PopUpState>(null);

    const [sorter, setSorter] = useState<Sorter>("frequency");

    vocabularyList.entry_list.sort(SORTERS[sorter]);

    return (
        <div className="flex flex-col lg:flex-row">
            <EntryControls
                filter={filter}
                setFilter={setFilter}
                sorter={sorter}
                setSorter={setSorter}
            />
            <EntryList>
                {vocabularyList.entry_list.map((entry) => {
                    if (!filter[entry.model.type]) {
                        return <></>;
                    }
                    return (
                        <Row
                            key={entry.model.id}
                            selected={viewedEntry?.model.id == entry.model.id}
                            lemma={entry.model.lemma}
                            label={
                                entry.model.type == "Noun"
                                    ? entry.model.dictionary_info.gender
                                          .at(0)
                                          ?.toLowerCase()
                                    : entry.model.type == "Verb"
                                      ? entry.model.dictionary_info
                                            .is_perfective
                                          ? "pf."
                                          : "imp."
                                      : entry.model.type == "Adjective"
                                        ? entry.model.dictionary_info.n_short
                                        : ""
                            }
                            onClick={() => {
                                setViewedEntry(
                                    vocabularyList.entry_list.find(
                                        (found) =>
                                            found.model.id == entry.model.id,
                                    ),
                                );
                            }}
                        />
                    );
                })}
            </EntryList>

            <EntryViewer
                entry={viewedEntry}
                setEntry={setViewedEntry}
                setPopUp={setPopUp}
            />

            <PopUp state={popUp} setState={setPopUp} />
        </div>
    );
};

export default Content;
