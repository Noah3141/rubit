"use client";

import { useState } from "react";
import Form from "./form";
import type { VocabularyListData } from "~/types/ukrainian/list";
import List from "./list";

const UkrainiansGenerateListPage = () => {
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

export default UkrainiansGenerateListPage;
