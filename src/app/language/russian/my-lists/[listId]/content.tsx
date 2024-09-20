import React, { FC } from "react";
import type { VocabularyListData } from "~/types/russian/list";

import VocabularyList from "~/app/language/russian/_components/VocabularyList";

const Content: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    return (
        <div>
            <VocabularyList vocabularyList={vocabularyList} />
        </div>
    );
};

export default Content;
