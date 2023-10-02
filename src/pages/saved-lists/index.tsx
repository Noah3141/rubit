import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Triangle } from "react-loader-spinner";
import { api } from "~/utils/api";

const SavedLists = () => {
    const { data: lists, isLoading: listsLoading } =
        api.savedLists.getUserSavedLists.useQuery();
    const { data, status } = useSession();

    if (status == "loading") {
        return (
            <div className="w-full">
                <div className="mx-auto max-w-2xl">
                    <Triangle
                        height="90"
                        width="90"
                        color="#c2410c"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        );
    }

    if (status == "unauthenticated") {
        return (
            <div className="w-full">
                <div className="mx-auto max-w-2xl">
                    You must be signed in to see your saved lists.
                </div>
            </div>
        );
    }

    return (
        <div className="pt-12">
            <div className="mx-auto min-h-screen max-w-2xl">
                <h1 className="mb-3 text-4xl">Saved Lists</h1>
                {lists?.map((list) => {
                    const entryCount = list.entries.length;

                    return (
                        <div
                            key={list.id}
                            className="flex flex-row justify-between px-3 py-2 text-2xl hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600"
                        >
                            <Link
                                className="hover:text-orange-500"
                                href={`/saved-lists/${list.id}`}
                            >
                                {list.title}
                            </Link>
                            <div className="flex flex-row gap-3">
                                <span>
                                    {list.knownPercent &&
                                        ` (${list.knownPercent}%)`}
                                </span>
                                <span>{entryCount} forms</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SavedLists;
