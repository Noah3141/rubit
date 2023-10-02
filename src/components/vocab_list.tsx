import { useContext, useRef, useState } from "react";
import type RawVocabularyList from "~/models/vocabulary_lists";
import type RawVocabEntry from "~/models/vocabulary_lists";
import RussianSentencer from "./russian_sentencer";
import { getGPTExample } from "~/utils/request_gpt";
import { BiBrain } from "react-icons/bi";
import { api } from "~/utils/api";
import { Triangle } from "react-loader-spinner";
import { VocabEntry } from "@prisma/client";
import toast, { useToasterStore } from "react-hot-toast";
import { useRouter } from "next/router";

type ListState = Record<string, Fields>;
type Fields = {
    showExample: boolean;
    gptExample: string | undefined;
    isLoading: boolean;
};

export enum LinkLanguage {
    Russian = 0,
    English = 1,
}

const RawVocabList = ({
    listData,
    sourceText,
    saved,
}: {
    listData: RawVocabularyList;
    sourceText: string;
    saved: boolean;
}) => {
    const trpcUtils = api.useContext();
    const [linkLang, setLinkLang] = useState<LinkLanguage>(
        LinkLanguage.English,
    );

    const { toasts, pausedAt } = useToasterStore();

    const [currentListSaved, setCurrentListSaved] = useState(saved);
    const [titleField, setTitleField] = useState("");
    // const [knownWordsExpanded, setKnownWordsExpanded] = useState(false);

    const [showFrequency, setShowFrequency] = useState<boolean>(true);
    const [listState, setListState] = useState<ListState>({});

    const { data: userKnownList, isLoading: userKnownListLoading } =
        api.knownWords.getUsersKnownWords.useQuery();

    const addedToKnownToastId = "addedToKnownToast";
    const { mutate: addToKnown } =
        api.knownWords.addToUserKnownWords.useMutation({
            onMutate: ({ entryLemma }) => {
                toast.loading(`Adding word "${entryLemma}"...🪺`, {
                    id: addedToKnownToastId,
                });
            },
            onSuccess: async () => {
                await trpcUtils.knownWords.invalidate();
                toast.success("Added to known words!🕊️", {
                    id: addedToKnownToastId,
                });
            },
            onError: () => {
                toast.error("Something went wrong!🦇", {
                    id: addedToKnownToastId,
                });
            },
        });

    const addedToSavedToastId = "addedToSavedToast";
    const { mutate: addToSavedLists } =
        api.savedLists.addToUserSavedLists.useMutation({
            onMutate: () => {
                toast.loading("Adding to saved lists...🪺", {
                    id: addedToSavedToastId,
                });
            },
            onSuccess: async () => {
                await trpcUtils.savedLists.invalidate();
                toast.success("Added to saved lists!🕊️", {
                    id: addedToSavedToastId,
                });
                toast.dismiss("titleModal");
                setCurrentListSaved(true);
            },
            onError: () => {
                toast.error("Something went wrong!🦇", {
                    id: addedToSavedToastId,
                });
            },
        });

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
                toast.success("Removed from known words!🫗", {
                    id: removedFromKnownToastId,
                });
            },
            onError: () => {
                toast.error("Something went wrong!", {
                    id: removedFromKnownToastId,
                });
            },
        });

    const toggleShowExample = (lemma_id: string) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: prevState[lemma_id]?.gptExample ?? undefined,
                    showExample: !prevState[lemma_id]?.showExample,
                    isLoading: !!prevState[lemma_id]?.isLoading,
                },
            }),
        );
    };

    const ref = useRef<HTMLInputElement>(null);
    const saveToast = () => {
        toast(
            (t) => {
                return (
                    <div className="">
                        <span className="text-stone-900">
                            Enter a title for this text:
                        </span>
                        <input
                            name="titlefield"
                            type="text"
                            ref={ref}
                            id="titlefield"
                            className="my-2 w-full rounded-md bg-stone-200 px-2 py-1 hover:cursor-pointer hover:outline hover:outline-1 hover:outline-orange-500 focus:cursor-text focus:outline-none"
                        />
                        <div className="flex flex-row justify-between ">
                            <button
                                className="text-stone-900 hover:text-orange-600"
                                onClick={() => {
                                    toast.dismiss(t.id);
                                }}
                            >
                                🍂Cancel
                            </button>
                            <button
                                className="text-stone-900 hover:text-orange-600"
                                onClick={() => {
                                    if (ref.current !== null) {
                                        addToSavedLists({
                                            sourceText: sourceText,
                                            title: ref.current.value,
                                            listData: listData,
                                        });
                                    }
                                    setTitleField("");
                                }}
                            >
                                Save🧾
                            </button>
                        </div>
                    </div>
                );
            },
            {
                duration: 50000,
                style: {
                    backgroundColor: "rgb(245 245 244)",
                },
                id: "titleModal",
            },
        );
    };

    const newWords = userKnownList
        ? // sort any items that return true
          listData.entry_list.filter((vocabEntry) => {
              // for each item, check that every single user known word is NOT the word in question. If any one of the known are == the vocab entry, return false, therby not passing into newWords
              return userKnownList.every(
                  (known: VocabEntry) => known.lemma !== vocabEntry.lemma,
              );
          })
        : listData.entry_list;

    const knownPercent = (
        100 *
        (1 - newWords.length / listData.entry_list.length)
    ).toFixed(0);

    const { mutate: updateKnownPercentage, isLoading: updateKnownLoading } =
        api.savedLists.updateKnownPercentage.useMutation();
    const router = useRouter();

    const setGPTExample = (
        gptSentence: string | undefined,
        lemma_id: string,
    ) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: gptSentence,
                    showExample: !!prevState[lemma_id]?.showExample,
                    isLoading: !!prevState[lemma_id]?.isLoading,
                },
            }),
        );
    };

    const setIsLoading = (newState: boolean, lemma_id: string) => {
        setListState(
            (prevState: ListState): ListState => ({
                ...prevState,
                [lemma_id]: {
                    gptExample: prevState[lemma_id]?.gptExample ?? undefined,
                    showExample: !!prevState[lemma_id]?.showExample,
                    isLoading: newState,
                },
            }),
        );
    };

    if (userKnownListLoading) {
        return (
            <div className="mt-8 flex rotate-180 flex-row justify-center">
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
        <>
            <div className="mb-5 mt-6 flex flex-col items-end gap-4 sm:mt-6">
                {currentListSaved ? (
                    ""
                ) : (
                    <button
                        onClick={saveToast}
                        className="w-full rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-600 sm:w-fit"
                    >
                        Save List
                    </button>
                )}
                <div className="flex w-full justify-between gap-2 md:flex-row">
                    <button
                        onClick={() => {
                            linkLang == LinkLanguage.English
                                ? setLinkLang(LinkLanguage.Russian)
                                : setLinkLang(LinkLanguage.English);
                        }}
                        className="w-full rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-600 sm:w-fit"
                    >
                        Links: {linkLang == LinkLanguage.English ? "EN" : "RU"}
                    </button>
                    <button
                        onClick={() => {
                            setShowFrequency((v) => !v);
                        }}
                        className="w-full rounded-sm bg-stone-600 px-4 py-2 hover:bg-orange-600 sm:w-fit"
                    >
                        Count {showFrequency ? "Shown" : "Hidden"}
                    </button>
                </div>
            </div>
            <span className="cursor-default py-2 text-stone-400">
                Known: {knownPercent}%
            </span>
            <div>
                {newWords.map((vocabEntry) => {
                    return (
                        <div
                            key={vocabEntry.lemma}
                            className={`  transition-[height] duration-200 hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600  ${
                                listState[vocabEntry.lemma]?.showExample
                                    ? "h-36 overflow-scroll"
                                    : "h-12 overflow-hidden"
                            }`}
                        >
                            <div
                                className="entry-collapsed flex flex-col   border-b-[1px] border-b-stone-900 py-2 ps-3 text-2xl transition-all duration-300"
                                key={vocabEntry.lemma}
                                id={vocabEntry.lemma}
                            >
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row gap-2">
                                        <button
                                            onClick={() => {
                                                addToKnown({
                                                    entryLemma:
                                                        vocabEntry.lemma,
                                                });
                                                if (
                                                    typeof router.query.id ==
                                                    "string"
                                                ) {
                                                    updateKnownPercentage({
                                                        knownPercentage:
                                                            knownPercent,
                                                        listId: router.query.id,
                                                    });
                                                }
                                            }}
                                            className="flex flex-row items-center rounded-full p-1 text-stone-600 hover:bg-gradient-to-b hover:from-orange-700 hover:to-fuchsia-600 hover:text-stone-50"
                                        >
                                            <BiBrain className="" />
                                        </button>
                                        <a
                                            className="leading-none hover:text-orange-600"
                                            target="_blank"
                                            title="Open dictionary in new tab"
                                            href={
                                                linkLang == LinkLanguage.English
                                                    ? `https://en.wiktionary.org/wiki/${vocabEntry.lemma}`
                                                    : `https://ru.wiktionary.org/wiki/${vocabEntry.lemma}`
                                            }
                                        >
                                            {vocabEntry.lemma}
                                        </a>
                                        <span className="cursor-default leading-none">
                                            {showFrequency
                                                ? ` - ${vocabEntry.frequency}`
                                                : ""}
                                        </span>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        {typeof listState[vocabEntry.lemma]
                                            ?.gptExample == "string" ? (
                                            <div className="flex flex-row">
                                                <button
                                                    onClick={() => {
                                                        setGPTExample(
                                                            undefined,
                                                            vocabEntry.lemma,
                                                        );

                                                        setIsLoading(
                                                            true,
                                                            vocabEntry.lemma,
                                                        );

                                                        void getGPTExample(
                                                            vocabEntry.lemma,
                                                        ).then((gpt_res) => {
                                                            setIsLoading(
                                                                false,
                                                                vocabEntry.lemma,
                                                            );
                                                            setGPTExample(
                                                                gpt_res,
                                                                vocabEntry.lemma,
                                                            );
                                                        });
                                                    }}
                                                    className="float-right me-2 truncate rounded-sm bg-transparent px-2 py-1 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                                                >
                                                    New Example
                                                </button>
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        <button
                                            onClick={() => {
                                                toggleShowExample(
                                                    vocabEntry.lemma,
                                                );

                                                if (
                                                    listState[vocabEntry.lemma]
                                                        ?.gptExample ==
                                                    undefined
                                                ) {
                                                    setIsLoading(
                                                        true,
                                                        vocabEntry.lemma,
                                                    );
                                                }

                                                const row =
                                                    document.getElementById(
                                                        vocabEntry.lemma,
                                                    );

                                                row?.classList.contains(
                                                    "entry-expanded",
                                                )
                                                    ? row?.classList.replace(
                                                          "entry-expanded",

                                                          "entry-collapsed",
                                                      )
                                                    : row?.classList.replace(
                                                          "entry-collapsed",
                                                          "entry-expanded",
                                                      );

                                                if (
                                                    listState[vocabEntry.lemma]
                                                        ?.gptExample ==
                                                    undefined
                                                ) {
                                                    void getGPTExample(
                                                        vocabEntry.lemma,
                                                    ).then((gpt_res) => {
                                                        setIsLoading(
                                                            false,
                                                            vocabEntry.lemma,
                                                        );
                                                        setGPTExample(
                                                            gpt_res,
                                                            vocabEntry.lemma,
                                                        );
                                                    });
                                                }
                                            }}
                                            className="float-right me-2 w-[7rem] rounded-sm bg-transparent px-2 text-sm text-stone-500 outline outline-1 outline-stone-500 hover:bg-stone-500 hover:text-stone-950"
                                        >
                                            {listState[vocabEntry.lemma]
                                                ?.showExample
                                                ? "Hide Example"
                                                : "Show Example"}
                                        </button>
                                    </div>
                                </div>

                                <div className="">
                                    <RussianSentencer
                                        id={`${vocabEntry.lemma}_sentence`}
                                        showExampleState={
                                            listState[vocabEntry.lemma]
                                                ?.showExample ?? false
                                        }
                                        gptExample={
                                            listState[vocabEntry.lemma]
                                                ?.gptExample ?? undefined
                                        }
                                        lemma={vocabEntry.lemma}
                                        isLoading={
                                            !!listState[vocabEntry.lemma]
                                                ?.isLoading
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {userKnownList ? (
                    <div className={`  `}>
                        {userKnownList.map((vocabEntry) => {
                            const inSourceText = listData.entry_list.some(
                                (known) => known.lemma == vocabEntry.lemma,
                            );

                            if (!inSourceText) {
                                return "";
                            }

                            return (
                                <div
                                    className="flex flex-row gap-2 px-3 py-2 text-2xl hover:bg-stone-900 hover:outline hover:outline-1 hover:outline-orange-600"
                                    key={vocabEntry.id}
                                >
                                    <button
                                        onClick={() => {
                                            removeFromKnown({
                                                entryLemma: vocabEntry.lemma,
                                            });
                                        }}
                                        className="flex flex-row items-center rounded-full bg-gradient-to-b from-orange-700 to-fuchsia-600 p-1  text-stone-50  hover:from-stone-600 hover:to-stone-900 hover:text-stone-300"
                                    >
                                        <BiBrain className="" />
                                    </button>{" "}
                                    <span className="leading-none">
                                        {vocabEntry.lemma}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
};

export default RawVocabList;
export type { ListState, Fields };
