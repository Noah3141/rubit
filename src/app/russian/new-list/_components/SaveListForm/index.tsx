"use client";
import { useRouter } from "next/navigation";
import React, { type FC, useState } from "react";
import toast from "react-hot-toast";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import { api } from "~/trpc/react";
import { VocabularyListData } from "~/types/russian/list";

const SaveListForm: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    const [form, setForm] = useState({
        title: "",
    });
    const router = useRouter();
    const saveList = api.list.russian.save.useMutation({
        onMutate: () => {
            toast.loading("Saving...", { id: "saveList" });
        },
        onError: () => {
            toast.error("Something went wrong!", { id: "saveList" });
        },
        onSuccess: (newList) => {
            router.push(`/russian/my-lists/${newList.id}`);
            toast.success("Saved!", { id: "saveList" });
            router.refresh();
        },
    });
    return (
        <>
            <TextInput value={form.title} onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))} />
            <Button
                onClick={() => {
                    if (form.title == "") {
                        toast.error("Please provide a title", {
                            id: "no-title",
                        });
                        return;
                    }
                    saveList.mutate({
                        list: vocabularyList,
                        title: form.title,
                    });
                }}
            >
                Save List
            </Button>
        </>
    );
};

export default SaveListForm;
