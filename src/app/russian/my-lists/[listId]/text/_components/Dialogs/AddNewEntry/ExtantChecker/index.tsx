"use client";
import React, { useContext, useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import TextInput from "~/components/Common/TextInput";
import Button from "~/components/Common/Button";
import { api } from "~/trpc/react";
import { DialogContext } from "../../../../context";

const ExtantChecker: FC<{
    //
}> = ({}) => {
    const [input, setInput] = useState("");
    const [_, setState] = useContext(DialogContext);

    const find = api.entry.get.byForm.useMutation({
        onError: () => {
            setTimeout(() => find.reset(), 3000);
        },
    });

    const finds = find.data?.map((found) => {
        return (
            <div
                key={found.id}
                className="cursor-pointer hover:underline"
                onClick={() => {
                    setState({ dialog: "UpdateWord", model: found });
                }}
            >
                {found.lemma}
            </div>
        );
    });

    return (
        <div className={classNames(styles.checker)}>
            <div className="flex flex-row gap-3">
                <TextInput placeholder="Check if already exists" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button
                    status={find.status}
                    disabled={find.status == "pending" || find.status == "error"}
                    size="small"
                    onClick={() => {
                        find.reset();
                        find.mutate({ form: input });
                    }}
                >
                    Check
                </Button>
            </div>
            {find.status == "success" && <div className="my-6">{find.data.length ? finds : "None found"}</div>}
        </div>
    );
};

export default ExtantChecker;
