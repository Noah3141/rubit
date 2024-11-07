"use client";

import React from "react";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

const TextLoadingPage = () => {
    const vocabularyList = useVocabularyList();

    return (
        <div className="whitespace-pre-wrap md:text-lg">
            {vocabularyList.inputText}
        </div>
    );
};

export default TextLoadingPage;
