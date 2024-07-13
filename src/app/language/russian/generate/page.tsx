"use client";

import { useState } from "react";
import Form from "./form";
import { VocabularyListData } from "~/types/russian/list";
import List from "./list";

const RussianGeneratePage = () => {
    const [vocabularyList, setVocabularyList] = useState<VocabularyListData>();

    if (!vocabularyList) return <Form setVocabularyList={setVocabularyList} />;
    else
        return (
            <List
                vocabularyList={vocabularyList}
                setVocabularyList={setVocabularyList}
            />
        );
};

export default RussianGeneratePage;
