import { Language } from "@prisma/client";
import classNames from "classnames";
import React, { type FC, useEffect, useState } from "react";

import styles from "./index.module.css";
import Button from "../Button";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";

const GPTSentencer: FC<{
    language: Language;
    token: string;
}> = ({ language, token }) => {
    const [example, setExample] = useState<{
        sentence: string;
        translation: string;
    }>();
    const gptGenerate = api.generate.exampleSentence.useMutation({
        onSuccess: (data) => {
            setExample(data);
        },
        onSettled: () => {
            setTimeout(() => {
                gptGenerate.reset();
            }, 2000);
        },
        onError: (e) => {
            console.error(e);
            toast.error("Something went wrong!");
        },
    });

    useEffect(() => {
        setExample(undefined);
        setShowTranslation(false);
    }, [token]);

    const [showTranslation, setShowTranslation] = useState(false);

    return (
        <div className={classNames(styles.container)}>
            <Button
                size="small"
                color="green"
                status={gptGenerate.status}
                onClick={() => {
                    gptGenerate.mutate({
                        word: token.replace("\u0301", ""),
                        language,
                    });
                }}
            >
                Example
            </Button>{" "}
            <Button
                size="small"
                color="neutral"
                disabled={!example?.sentence}
                onClick={() => {
                    setShowTranslation((p) => !p);
                }}
            >
                {showTranslation ? "Hide English" : "Show English"}
            </Button>
            <div>{example?.sentence}</div>
            {showTranslation && (
                <div>{example?.translation ?? "Something went wrong"}</div>
            )}
        </div>
    );
};

export default GPTSentencer;
