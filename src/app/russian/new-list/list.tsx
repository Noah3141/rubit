import React, { type FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";
import SaveListForm from "./_components/SaveListForm";
import Content from "../my-lists/[listId]/content";
import { type RouterOutputs } from "~/trpc/react";

const List: FC<{
    vocabularyList: VocabularyListData & { title?: string };
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
                <Content vocabularyList={vocabularyList} />
            </section>
        </>
    );
};

export default List;
