import React, { FC } from "react";
import Button from "~/components/Common/Button";
import type { VocabularyListData } from "~/types/russian/list";
import SaveListForm from "./_components/SaveListForm";
import VocabularyList from "~/app/language/russian/_components/VocabularyList";

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
                <SaveListForm vocabularyList={vocabularyList} />
            </section>
            <section>
                <VocabularyList vocabularyList={vocabularyList} />
            </section>
        </>
    );
};

export default List;
