"use client";

import React from "react";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

const TextLoadingPage = () => {
    const vocabularyList = useVocabularyList();

    return <div className="mx-auto max-w-screen-lg whitespace-pre-wrap pt-12 md:text-lg">{vocabularyList.inputText}</div>;
};

export default TextLoadingPage;
