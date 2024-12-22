"use client";

import React, { useState, type FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";
import EntryList, { Row } from "./_components/EntryList";
import EntryViewer from "./_components/EntryViewer";
import EntryControls from "./_components/EntryControls";
import PopUp, { PopUpState } from "./_components/PopUp";
import Header from "~/components/Base/Header";
import { RouterOutputs } from "~/trpc/react";
import Dropdown from "~/components/Containers/Dropdown";
import TextInput from "~/components/Common/TextInput";
import Link from "~/components/Common/Link";
import Button from "~/components/Common/Button";
import PageSelector from "./_components/PageSelector";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

//
// State Prep
//

export type Filter = {
    Noun: boolean;
    Verb: boolean;
    Adjective: boolean;
    Adverb: boolean;
};
export const SORTERS: Record<Sorter, (a: VocabularyListData["entry_list"][0], b: VocabularyListData["entry_list"][0]) => number> = {
    "Frequent first": (a, b) => {
        return b.frequency - a.frequency;
    },
    "Infrequent first": (a, b) => {
        return a.frequency - b.frequency;
    },
    Alphabetical: (a, b) => {
        return a.model.lemma.localeCompare(b.model.lemma);
    },
    "Shortest first": (a, b) => {
        return a.model.lemma.length - b.model.lemma.length;
    },
    "Longest first": (a, b) => {
        return b.model.lemma.length - a.model.lemma.length;
    },
    "Common first": (a, b) => {
        return (b.model.commonality ?? 0.0) - (a.model.commonality ?? 0.0);
    },
    "Uncommon first": (a, b) => {
        return (a.model.commonality ?? 0.0) - (b.model.commonality ?? 0.0);
    },
};

export type Sorter = "Frequent first" | "Alphabetical" | "Common first" | "Uncommon first" | "Infrequent first" | "Shortest first" | "Longest first";

///
/// Component
///

const Content: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();

    const [viewedEntry, setViewedEntry] = useState<VocabularyListData["entry_list"][0]>();

    const [filter, setFilter] = useState<Filter>({
        Verb: true,
        Noun: true,
        Adjective: true,
        Adverb: false,
    });
    const [popUp, setPopUp] = useState<PopUpState>(null);
    const [sorter, setSorter] = useState<Sorter>("Frequent first");

    vocabularyList.entry_list.sort(SORTERS[sorter]);

    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <EntryControls filter={filter} setFilter={setFilter} sorter={sorter} setSorter={setSorter} />
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
                                label={entry.frequency}
                                onClick={() => {
                                    setViewedEntry(vocabularyList.entry_list.find((found) => found.model.id == entry.model.id));
                                }}
                            />
                        );
                    })}
                </EntryList>

                <EntryViewer entry={viewedEntry} setEntry={setViewedEntry} setPopUp={setPopUp} />

                <PopUp state={popUp} setState={setPopUp} />
            </div>
        </>
    );
};

export default Content;
