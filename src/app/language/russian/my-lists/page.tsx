import React from "react";
import SavedListRow from "~/app/language/russian/my-lists/_components/SavedListRow";
import Header from "~/components/Base/Header";
import { api } from "~/trpc/server";

const SavedListsPage = async () => {
    const myLists = await api.list.russian.bySessionUser();

    return (
        <>
            <Header level="2">My Lists</Header>
            {myLists.map((list) => {
                return <SavedListRow key={list.id} savedList={list} />;
            })}
        </>
    );
};

export default SavedListsPage;
