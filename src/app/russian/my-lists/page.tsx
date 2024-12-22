import { redirect } from "next/navigation";
import React from "react";
import SavedListRow from "~/app/russian/my-lists/_components/SavedListRow";
import Header from "~/components/Base/Header";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

const SavedListsPage = async () => {
    const session = await getServerAuthSession();

    if (!session) {
        redirect("/");
    }

    const myLists = await api.list.russian.bySessionUser();

    return (
        <>
            <Header level="2">My Lists</Header>
            <div>
                {myLists.map((list) => {
                    return <SavedListRow key={list.id} savedList={list} />;
                })}
            </div>
        </>
    );
};

export default SavedListsPage;
