import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { BiBrain } from "react-icons/bi";
import { Triangle } from "react-loader-spinner";
import { api } from "~/utils/api";

const KnownWords = () => {
    const trpcUtils = api.useContext();
    const { data, status } = useSession();
    const { data: userKnownList, isLoading: userKnownListLoading } =
        api.knownWords.getUsersKnownWords.useQuery();

    const removedFromKnownToastId = "removedToKnownToast";
    const { mutate: removeFromKnown } =
        api.knownWords.removeFromUserKnownWords.useMutation({
            onMutate: () => {
                toast.loading("Removing word...", {
                    id: removedFromKnownToastId,
                });
            },
            onSuccess: async () => {
                await trpcUtils.knownWords.invalidate();
                toast.success("Removed from known words!🪹", {
                    id: removedFromKnownToastId,
                });
            },
            onError: () => {
                toast.error("Something went wrong!", {
                    id: removedFromKnownToastId,
                });
            },
        });

    if (status == "unauthenticated") {
        return <div>You must be signed in to see your saved words</div>;
    }

    if (status == "loading") {
        return (
            <div className="mt-12 flex w-full flex-row justify-center">
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
        );
    }
    return (
        <div className="pt-12 text-2xl ">
            <div className="mx-auto max-w-2xl divide-y divide-stone-900  border-stone-900">
                <h1 className="mb-4">Known Words: {userKnownList?.length}</h1>
                {userKnownList?.map((vocabEntry) => {
                    return (
                        <div
                            key={vocabEntry.id}
                            className="flex flex-row gap-2  px-2 py-1 hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600"
                        >
                            <button
                                onClick={() => {
                                    toast((t) => {
                                        return (
                                            <span className="text-primary-950 cursor-default text-center">
                                                Sure you want to remove this
                                                word?
                                                <div className="flex flex-row justify-between pt-3">
                                                    <button
                                                        onClick={() => {
                                                            toast.dismiss(t.id);
                                                        }}
                                                    >
                                                        Keep!🗄️
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            removeFromKnown({
                                                                entryLemma:
                                                                    vocabEntry.lemma,
                                                            });
                                                            toast.dismiss(t.id);
                                                        }}
                                                    >
                                                        Remove!🫗
                                                    </button>
                                                </div>
                                            </span>
                                        );
                                    });
                                }}
                                className="flex flex-row items-center rounded-full bg-gradient-to-b from-orange-700 to-fuchsia-600 p-1  text-stone-50  hover:from-stone-600 hover:to-stone-900 hover:text-stone-300 focus:from-stone-600 focus:to-stone-900 focus:text-stone-300"
                            >
                                <BiBrain className="" />
                            </button>
                            <Link
                                target="_blank"
                                className="px-4  text-stone-100 hover:text-orange-500"
                                href={`https://ru.wiktionary.org/wiki/${vocabEntry.lemma}`}
                            >
                                {vocabEntry.lemma}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default KnownWords;
