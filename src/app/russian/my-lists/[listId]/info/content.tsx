"use client";

import React, { useEffect, useState, type FC } from "react";
import { api, type RouterOutputs } from "~/trpc/react";
import TextInput from "~/components/Common/TextInput";
import Button from "~/components/Common/Button";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import AnalysisTextArea from "~/app/russian/writing-workshop/_components/AnalysisTextArea";
import DeleteListButton from "./_components/DeleteListButton";
import { useRouter } from "next/navigation";

const Content: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();
    const [title, setTitle] = useState<string>(vocabularyList.title);
    const [text, setText] = useState("");
    const router = useRouter();

    const utils = api.useUtils();
    const updateTitle = api.list.update.useMutation({
        onMutate: () => {
            toast.loading(`Updating...`, { id: "updateTitleToast" });
        },
        onSuccess: () => {
            router.refresh();
            toast.success(`Success!`, { id: "updateTitleToast" });
        },
        onError: (e) => {
            toast.error(`Something went wrong! ${e.message}`, {
                id: "updateTitleToast",
            });
        },
    });

    const commonalityHavingList = vocabularyList.entry_list.filter((entry) => !!entry.model.commonality);
    const averageCommonality =
        commonalityHavingList.reduce((sum, entry) => {
            return sum + entry.model.commonality!;
        }, 0) / commonalityHavingList.length;

    return (
        <>
            <div className="flex w-full flex-row gap-3">
                <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
                <Button
                    disabled={title == vocabularyList.title}
                    onClick={() => {
                        updateTitle.mutate({ id: vocabularyList.id, title });
                    }}
                >
                    Update
                </Button>
            </div>

            <div>
                <span id="levels">Lvl. {Math.floor(1 / averageCommonality)} text </span>
            </div>
            <Tooltip anchorSelect="#levels" opacity={1} style={{ maxWidth: "400px" }}>
                Derived from an average of the {`text's`} vocabulary commonalities. Levels probably correspond very roughly to reading grade-level.
            </Tooltip>

            <AnalysisTextArea />

            <DeleteListButton />
        </>
    );
};

export default Content;
