import React from "react";
import { api } from "~/trpc/server";
import Content from "./content";

const MyListPage = async ({ params }: { params: { listId: string } }) => {
    const russianVocabularyList = await api.list.russian.get({
        listId: params.listId,
    });

    return <Content vocabularyList={russianVocabularyList} />;
};

export default MyListPage;
