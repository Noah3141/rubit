import React, { type FC } from "react";
import type { VocabularyListData } from "~/types/belarusian/list";
import VocabularyList from "./_components/VocabularyList";
import Header from "~/components/Base/Header";
import SaveListForm from "./_components/SaveListForm";

const List: FC<{
    vocabularyList: VocabularyListData;
    setVocabularyList: React.Dispatch<React.SetStateAction<VocabularyListData | undefined>>;
}> = ({ vocabularyList, setVocabularyList }) => {
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
            <section className="flex flex-row">
                <Header level="3">Order By</Header>
                first appearance | # occurrence
                <Header level="3">Group By</Header>
                part of speech | paragraph | all
                <Header level="3">Filter By</Header># occurence | commonality
            </section>
            <section>
                <SaveListForm vocabularyList={vocabularyList} />
            </section>
            <section>
                <VocabularyList vocabularyList={vocabularyList} />
            </section>
        </>
    );
};

export default List;
