import React, { useState, type FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";
import SaveListForm from "./_components/SaveListForm";
import Content, { Filter, Sorter, SORTERS } from "../my-lists/[listId]/content";
import { type RouterOutputs } from "~/trpc/react";
import PopUp, { PopUpState } from "../my-lists/[listId]/_components/PopUp";
import Header from "~/components/Base/Header";
import Button from "~/components/Common/Button";
import Dropdown from "~/components/Containers/Dropdown";
import EntryControls from "../my-lists/[listId]/_components/EntryControls";
import EntryList, { Row } from "../my-lists/[listId]/_components/EntryList";
import EntryViewer from "../my-lists/[listId]/_components/EntryViewer";

const List: FC<{
    vocabularyList: VocabularyListData & { title?: string };
    setVocabularyList: React.Dispatch<React.SetStateAction<VocabularyListData | undefined>>;
}> = ({ vocabularyList, setVocabularyList }) => {
    const [viewedEntry, setViewedEntry] = useState<VocabularyListData["entry_list"][0]>();

    const [filter, setFilter] = useState<Filter>({
        Verb: true,
        Noun: true,
        Adjective: true,
        Adverb: false,
    });
    const [popUp, setPopUp] = useState<PopUpState>(null);
    const [sorter, setSorter] = useState<Sorter>("Frequent first");
    const [open, setOpen] = useState(false);

    vocabularyList.entry_list.sort(SORTERS[sorter]);

    return (
        <>
            <div>
                <button
                    onMouseDown={() => {
                        setVocabularyList(undefined);
                    }}
                >
                    {`<< `}Back
                </button>
            </div>
            <section>
                <SaveListForm vocabularyList={vocabularyList} />
            </section>
            <section>
                <Dropdown open={open} setOpen={setOpen} header="Original Text">
                    <div className="whitespace-pre-wrap">{vocabularyList.inputText}</div>
                </Dropdown>
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
                                    label={
                                        // entry.model.type == "Noun"
                                        //     ? entry.model.dictionary_info.gender
                                        //           .at(0)
                                        //           ?.toLowerCase()
                                        //     : entry.model.type == "Verb"
                                        //       ? entry.model.dictionary_info
                                        //             .is_perfective
                                        //           ? "pf."
                                        //           : "imp."
                                        //       : entry.model.type == "Adjective"
                                        //         ? entry.model.dictionary_info.n_short
                                        //         : ""
                                        entry.frequency
                                    }
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
            </section>
        </>
    );
};

export default List;
