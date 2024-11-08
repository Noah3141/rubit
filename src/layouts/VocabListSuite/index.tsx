import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Header from "~/components/Base/Header";
import { api } from "~/trpc/server";
import PageSelector from "~/app/russian/my-lists/[listId]/_components/PageSelector";
import VocabularyListContextProvider from "./provider";

export default async function VocabListSuite({
    children,
    params,
}: Readonly<{ children: React.ReactNode; params: { listId: string } }>) {
    const russianVocabularyList = await api.list.russian.get({
        listId: params.listId,
    });

    return (
        <div className={classNames(styles.layout)}>
            <Header level="1">{russianVocabularyList.title}</Header>
            <PageSelector vocabularyList={russianVocabularyList} />

            <VocabularyListContextProvider
                vocabularyList={russianVocabularyList}
            >
                <div className={classNames(styles.content)}>{children}</div>
            </VocabularyListContextProvider>
        </div>
    );
}
