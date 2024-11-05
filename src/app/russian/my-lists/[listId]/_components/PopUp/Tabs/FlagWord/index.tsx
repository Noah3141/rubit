"use client";

import React, { useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { api } from "~/trpc/react";
import { FlagEntryForm } from "~/server/api/routers/entry/flagEntry";
import { VocabularyListData } from "~/types/russian/list";
import Textarea from "~/components/Common/Textarea";
import Button from "~/components/Common/Button";
import toast from "react-hot-toast";

const FlagWordTab: FC<{
    entry: VocabularyListData["entry_list"][0];
}> = ({ entry }) => {
    const [form, setForm] = useState<FlagEntryForm>({
        id: entry.model.id,
        lemma: entry.model.lemma,
        feedback: "",
    });

    const sendFeedback = api.entry.flagEntry.useMutation({
        onMutate: () => {
            toast.loading(`Submitting...`, { id: "sendFeebackToast" });
        },
        onSuccess: () => {
            toast.success(`Sent!`, { id: "sendFeebackToast" });
        },
        onError: () => {
            toast.error(`Something went awry...`, { id: "sendFeebackToast" });
        },
        onSettled: () => {
            setTimeout(() => {
                sendFeedback.reset();
            }, 3000);
        },
    });

    return (
        <div className={classNames(styles.tab)}>
            <Textarea
                value={form.feedback}
                onChange={(e) =>
                    setForm(
                        (p): FlagEntryForm => ({
                            ...p,
                            feedback: e.target.value,
                        }),
                    )
                }
                placeholder="What seems to be wrong with this entry?"
            />

            <Button
                disabled={sendFeedback.status !== "idle"}
                onClick={() => {
                    if (form.feedback == "") {
                        toast.error("Please provide details");
                        return;
                    }
                    sendFeedback.mutate(form);
                }}
            >
                Submit
            </Button>
        </div>
    );
};

export default FlagWordTab;
