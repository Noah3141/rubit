import React from "react";
import Content from "./content";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";

const StudyListPage = async ({}: { params: { listId: string } }) => {
    return <Content />;
};

export default StudyListPage;
