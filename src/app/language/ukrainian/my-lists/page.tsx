import React from "react";
import Header from "~/components/Base/Header";
import { api } from "~/trpc/server";
import SavedListRow from "./_components/SavedListRow";

const SavedListsPage = async () => {
    const myLists = await api.list.ukrainian.bySessionUser();

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
