"use client";
import React, { useContext, useEffect, useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import { DialogContext } from "../../../context";
import RussianNounForms from "~/components/Tables/RussianNounForms";
import { NounModel } from "~/types/russian/list/noun";

const UpdateEntry: FC<{
    listId: string;
}> = ({ listId }) => {
    const [state, setState] = useContext(DialogContext);

    const [form, setForm] = useState<{ type: null | "" }>({ type: null });

    // useEffect(() => {
    //     if (state.dialog == "UpdateWord") {
    //         setForm({ entry: { ...state.entry } });
    //     }
    // }, [state]);
    if (state.dialog !== "UpdateWord") {
        return <></>;
    }

    return (
        <div className={classNames(styles.form)}>
            <div className="flex flex-row gap-1">{state.model.type}</div>
            <div>
                {
                    (
                        {
                            Noun: <RussianNounForms model={state.model as NounModel}></RussianNounForms>,
                        } as Record<typeof state.model.type, React.ReactElement>
                    )[state.model.type]
                }
            </div>
            <div>
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default UpdateEntry;
