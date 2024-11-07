import React from "react";
import { api } from "~/trpc/server";
import Content from "./content";
import Header from "~/components/Base/Header";
import Dropdown from "~/components/Containers/Dropdown";

const MyListPage = async ({}: { params: { listId: string } }) => {
    return (
        <>
            <Content />
        </>
    );
};

export default MyListPage;
