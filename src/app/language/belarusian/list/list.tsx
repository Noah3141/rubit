import React, { FC } from "react";
import Button from "~/components/Common/Button";
import type { VocabularyListData } from "~/types/belarusian/list";
import VocabularyList from "./_components/VocabularyList";
import Header from "~/components/Base/Header";

const List: FC<{
    vocabularyList: VocabularyListData;
    setVocabularyList: React.Dispatch<
        React.SetStateAction<VocabularyListData | undefined>
    >;
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
            <section>
                <Header level="4">Order By</Header>
                first appearance | # occurrence
                <Header level="4">Group By</Header>
                part of speech | paragraph | all
                <Header level="4">Filter By</Header># occurence | commonality
                <Button>Save List</Button>
            </section>
            <section>
                <VocabularyList vocabularyList={vocabularyList} />
            </section>
        </>
    );
};

export default List;
