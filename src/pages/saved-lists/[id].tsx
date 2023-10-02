import { VocabEntry } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiBrain } from "react-icons/bi";
import RawVocabList, { LinkLanguage, ListState } from "~/components/vocab_list";
import DownArrowSharp from "~/images/icons/DownArrowSharp";
import { api } from "~/utils/api";
import { VscTrash } from "react-icons/vsc";
import { getGPTExample } from "~/utils/request_gpt";
import { redirect } from "next/navigation";
import { Triangle } from "react-loader-spinner";

const ListId = () => {
    const trpcUtils = api.useContext();
    const [sourceExpanded, setSourceExpanded] = useState(false);
    const { data: session, status } = useSession();

    const router = useRouter();
    const id = typeof router.query.id == "string" ? router.query.id : "";
    const { data, isLoading } =
        api.savedLists.getUserSavedListWithText.useQuery({ listId: id });

    const removedFromListsToastId = "removedFromListsToast";
    const { mutate: removeFromLists } =
        api.savedLists.removeFromUserSavedLists.useMutation({
            onMutate: () => {
                toast.loading("Removing list...💨", {
                    id: removedFromListsToastId,
                });
            },
            onSuccess: async () => {
                await trpcUtils.savedLists.invalidate();
                await router.push("/saved-lists");
                toast.success("Removed from saved lists!☁️", {
                    id: removedFromListsToastId,
                });
            },
            onError: () => {
                toast.error("Something went wrong!⛈️", {
                    id: removedFromListsToastId,
                });
            },
        });

    if (status == "loading") {
        return "...";
    }

    if (status == "unauthenticated") {
        return "Sign in please";
    }

    if (isLoading) {
        return (
            <div className="w-full">
                <div className="mx-auto flex  max-w-2xl flex-row justify-center py-12">
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

    if (!data) {
        return "No list!";
    }

    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-4xl whitespace-pre-wrap pt-12 text-2xl">
                <div className="mb-3 flex flex-row justify-between px-2">
                    <span>{data?.title}</span>
                    <div
                        onClick={() => {
                            toast((t) => {
                                return (
                                    <span className="text-primary-950 cursor-default text-center">
                                        Sure you want to delete this list?
                                        <div className="flex flex-row justify-between pt-3">
                                            <button
                                                onClick={() => {
                                                    toast.dismiss(t.id);
                                                }}
                                            >
                                                Keep!📌
                                            </button>
                                            <button
                                                onClick={() => {
                                                    removeFromLists({
                                                        listId: id,
                                                    });
                                                    toast.dismiss(t.id);
                                                }}
                                            >
                                                Remove!🗑️
                                            </button>
                                        </div>
                                    </span>
                                );
                            });
                        }}
                        className={`
                        group relative flex items-center justify-center after:absolute
                        after:top-0 
                        after:hidden
                        after:h-8 after:w-8   after:rounded-full after:bg-gradient-to-b after:from-orange-500 after:to-fuchsia-500
                        after:transition-all hover:cursor-pointer 
                        after:hover:block
                        `}
                    >
                        <VscTrash className="z-10 text-stone-500   group-hover:text-stone-200 " />
                    </div>
                </div>
                <div className="w-full px-2 hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-500">
                    <button
                        className="flex  w-full flex-row items-center justify-end gap-2 py-2"
                        onClick={() => {
                            setSourceExpanded((p) => !p);
                        }}
                    >
                        Source Text
                        <DownArrowSharp
                            className={`transition-all ${
                                sourceExpanded ? "rotate-180" : "rotate-0"
                            }`}
                            size={16}
                        />
                    </button>
                    <div
                        className={`px-3 transition-all ${
                            sourceExpanded
                                ? "h-[70vh] overflow-scroll "
                                : "h-0 overflow-hidden"
                        }`}
                    >
                        <div className="p-3">{data?.sourceText.content}</div>
                    </div>
                </div>
                <div className="px-2 text-lg">
                    <RawVocabList
                        saved={true}
                        listData={{
                            metadata: "",
                            entry_list: data.entries.map((entry) => ({
                                forms: [""],
                                lemma: entry.lemma,
                                frequency: entry.frequency ?? 0,
                                perfective: null,
                            })),
                        }}
                        sourceText={data.sourceText.content}
                    />
                </div>
            </div>
        </div>
    );
};

//     const trpcUtils = api.useContext();

//     const router = useRouter();
//     const id = typeof router.query.id == "string" ? router.query.id : "";

//     const [sourceExpanded, setSourceExpanded] = useState(false);

//     const [showFrequency, setShowFrequency] = useState(false);

//     const { data, isLoading } =
//         api.savedLists.getUserSavedListWithText.useQuery({ listId: id });

//     const [linkLang, setLinkLang] = useState<LinkLanguage>(
//         LinkLanguage.English,
//     );
//     const [listState, setListState] = useState<ListState>({});

//     const addedToKnownToastId = "addedToKnownToast";
//     const { mutate: addToKnown } =
//         api.knownWords.addToUserKnownWords.useMutation({
//             onMutate: ({ entryLemma }) => {
//                 toast.loading(`Adding word "${entryLemma}"...🪺`, {
//                     id: addedToKnownToastId,
//                 });
//             },
//             onSuccess: async () => {
//                 await trpcUtils.knownWords.invalidate();
//                 toast.success("Added to known words!🕊️", {
//                     id: addedToKnownToastId,
//                 });
//             },
//             onError: () => {
//                 toast.error("Something went wrong!🦇", {
//                     id: addedToKnownToastId,
//                 });
//             },
//         });
//     const removedFromKnownToastId = "removedToKnownToast";
//     const { mutate: removeFromKnown } =
//         api.knownWords.removeFromUserKnownWords.useMutation({
//             onMutate: () => {
//                 toast.loading("Removing word...", {
//                     id: removedFromKnownToastId,
//                 });
//             },
//             onSuccess: async () => {
//                 await trpcUtils.knownWords.invalidate();
//                 toast.success("Removed from known words!🫗", {
//                     id: removedFromKnownToastId,
//                 });
//             },
//             onError: () => {
//                 toast.error("Something went wrong!", {
//                     id: removedFromKnownToastId,
//                 });
//             },
//         });

//     const toggleShowExample = (lemma_id: string) => {
//         setListState(
//             (prevState: ListState): ListState => ({
//                 ...prevState,
//                 [lemma_id]: {
//                     gptExample: prevState[lemma_id]?.gptExample ?? undefined,
//                     showExample: !prevState[lemma_id]?.showExample,
//                     isLoading: !!prevState[lemma_id]?.isLoading,
//                 },
//             }),
//         );
//     };

//     return (
//         <div className="min-h-screen">
//             <div className="mx-auto max-w-4xl whitespace-pre-wrap pt-12 text-2xl">
//                 <div>{data?.title}</div>

//                 <div className="w-full px-2 hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-500">
//                     <button
//                         className="flex w-full flex-row items-center justify-end gap-2 py-2"
//                         onClick={() => {
//                             setSourceExpanded((p) => !p);
//                         }}
//                     >
//                         Source Text
//                         <DownArrowSharp
//                             className={`transition-all ${
//                                 sourceExpanded ? "rotate-180" : "rotate-0"
//                             }`}
//                             size={16}
//                         />
//                     </button>
//                     <div
//                         className={`px-3 transition-all ${
//                             sourceExpanded
//                                 ? "h-[60vh] overflow-scroll "
//                                 : "h-0 overflow-hidden"
//                         }`}
//                     >
//                         <div className="p-3">{data?.sourceText.content}</div>
//                     </div>
//                 </div>
//                 <div>
//                     {data?.entries.map((vocabEntry) => {
//                         return (
//                             <div
//                                 key={vocabEntry.lemma}
//                                 className={`  transition-[height] duration-200 hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600  ${
//                                     listState[vocabEntry.lemma]?.showExample
//                                         ? "h-36 overflow-scroll"
//                                         : "h-12 overflow-hidden"
//                                 }`}
//                             >
//                                 <div
//                                     className="entry-collapsed flex flex-col   border-b-[1px] border-b-stone-900 py-2 ps-3 text-2xl transition-all duration-300"
//                                     key={vocabEntry.lemma}
//                                     id={vocabEntry.lemma}
//                                 >
//                                     <div className="flex flex-row justify-between">
//                                         <div className="flex flex-row gap-2">
//                                             <button
//                                                 onClick={() => {
//                                                     addToKnown({
//                                                         entryLemma:
//                                                             vocabEntry.lemma,
//                                                     });
//                                                 }}
//                                                 className="flex flex-row items-center rounded-full p-1 text-stone-600 hover:bg-gradient-to-b hover:from-orange-700 hover:to-fuchsia-600 hover:text-stone-50"
//                                             >
//                                                 <BiBrain className="" />
//                                             </button>
//                                             <a
//                                                 className="leading-none hover:text-orange-600"
//                                                 target="_blank"
//                                                 title="Open dictionary in new tab"
//                                                 href={
//                                                     linkLang ==
//                                                     LinkLanguage.English
//                                                         ? `https://en.wiktionary.org/wiki/${vocabEntry.lemma}`
//                                                         : `https://ru.wiktionary.org/wiki/${vocabEntry.lemma}`
//                                                 }
//                                             >
//                                                 {vocabEntry.lemma}
//                                             </a>
//                                             <span className="cursor-default leading-none">
//                                                 {showFrequency
//                                                     ? ` - ${vocabEntry.frequency}`
//                                                     : ""}
//                                             </span>
//                                         </div>
//                                         <div className="flex flex-row gap-1">
//                                             {typeof listState[vocabEntry.lemma]
//                                                 ?.gptExample == "string" ? (
//                                                 <div className="flex flex-row">
//                                                     <button
//                                                         onClick={() => {
//                                                             setGPTExample(
//                                                                 undefined,
//                                                                 vocabEntry.lemma,
//                                                             );

//                                                             setIsLoading(
//                                                                 true,
//                                                                 vocabEntry.lemma,
//                                                             );

//                                                             void getGPTExample(
//                                                                 vocabEntry.lemma,
//                                                             ).then(
//                                                                 (gpt_res) => {
//                                                                     setIsLoading(
//                                                                         false,
//                                                                         vocabEntry.lemma,
//                                                                     );
//                                                                     setGPTExample(
//                                                                         gpt_res,
//                                                                         vocabEntry.lemma,
//                                                                     );
//                                                                 },
//                                                             );
//                                                         }}
//                                                         className="float-right me-2 truncate rounded-sm bg-transparent px-2 py-1 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
//                                                     >
//                                                         New Example
//                                                     </button>
//                                                 </div>
//                                             ) : (
//                                                 <></>
//                                             )}
//                                             <button
//                                                 onClick={() => {
//                                                     toggleShowExample(
//                                                         vocabEntry.lemma,
//                                                     );

//                                                     if (
//                                                         listState[
//                                                             vocabEntry.lemma
//                                                         ]?.gptExample ==
//                                                         undefined
//                                                     ) {
//                                                         setIsLoading(
//                                                             true,
//                                                             vocabEntry.lemma,
//                                                         );
//                                                     }

//                                                     const row =
//                                                         document.getElementById(
//                                                             vocabEntry.lemma,
//                                                         );

//                                                     row?.classList.contains(
//                                                         "entry-expanded",
//                                                     )
//                                                         ? row?.classList.replace(
//                                                               "entry-expanded",

//                                                               "entry-collapsed",
//                                                           )
//                                                         : row?.classList.replace(
//                                                               "entry-collapsed",
//                                                               "entry-expanded",
//                                                           );

//                                                     if (
//                                                         listState[
//                                                             vocabEntry.lemma
//                                                         ]?.gptExample ==
//                                                         undefined
//                                                     ) {
//                                                         void getGPTExample(
//                                                             vocabEntry.lemma,
//                                                         ).then((gpt_res) => {
//                                                             setIsLoading(
//                                                                 false,
//                                                                 vocabEntry.lemma,
//                                                             );
//                                                             setGPTExample(
//                                                                 gpt_res,
//                                                                 vocabEntry.lemma,
//                                                             );
//                                                         });
//                                                     }
//                                                 }}
//                                                 className="float-right me-2 w-[7rem] rounded-sm bg-transparent px-2 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
//                                             >
//                                                 {listState[vocabEntry.lemma]
//                                                     ?.showExample
//                                                     ? "Hide Example"
//                                                     : "Show Example"}
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <div className="">
//                                         <RussianSentencer
//                                             id={`${vocabEntry.lemma}_sentence`}
//                                             showExampleState={
//                                                 listState[vocabEntry.lemma]
//                                                     ?.showExample ?? false
//                                             }
//                                             gptExample={
//                                                 listState[vocabEntry.lemma]
//                                                     ?.gptExample ?? undefined
//                                             }
//                                             lemma={vocabEntry.lemma}
//                                             isLoading={
//                                                 !!listState[vocabEntry.lemma]
//                                                     ?.isLoading
//                                             }
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     );
// };

export default ListId;
