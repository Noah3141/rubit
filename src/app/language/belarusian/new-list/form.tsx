"use client";

import React, { type FC, useState } from "react";
import toast from "react-hot-toast";
import Header from "~/components/Base/Header";
import Button from "~/components/Common/Button";
import Textarea from "~/components/Common/Textarea";
import Toggler, { Option } from "~/components/Common/Toggler";
import { api } from "~/trpc/react";
import { VocabularyListData } from "~/types/belarusian/list";

const Form: FC<{
    setVocabularyList: React.Dispatch<
        React.SetStateAction<VocabularyListData | undefined>
    >;
}> = ({ setVocabularyList }) => {
    const [form, setForm] = useState({
        inputText: "",
    });

    const generateList = api.list.belarusian.vocabularyList.useMutation({
        onMutate: () => {
            toast.loading("Generating list...", { id: "generateList" });
        },
        onSuccess: (data) => {
            toast.success("Success!", { id: "generateList" });
            setVocabularyList({
                ...data,
                inputText: form.inputText,
            });
        },
        onError: (e) => {
            toast.error(e.message, { id: "generateList" });
        },
        onSettled: () => {
            setTimeout(() => {
                generateList.reset();
            }, 3000);
        },
    });

    return (
        <>
            <Header level="2">Generate a Vocabulary List</Header>
            <Textarea
                value={form.inputText}
                onChange={(e) => {
                    setForm((p) => ({ ...p, inputText: e.target.value }));
                }}
            />

            <Button
                onClick={() => {
                    // validate
                    // ensure
                    // insurance
                    // Great! Send you to your list:
                    generateList.mutate(form);
                }}
                className="ml-auto"
                status={generateList.status}
                color="orange"
            >
                Create List
            </Button>
        </>
    );
};

export default Form;
