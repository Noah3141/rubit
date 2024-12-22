"use client";

import React, { useEffect, useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import TextInput from "~/components/Common/TextInput";
import { VocabularyListData } from "~/types/russian/list";

const AnswerInput: FC<{
    testEntry: VocabularyListData["entry_list"][0];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}> = ({ testEntry, setValue, value }) => {
    const isCorrect = value == testEntry.model.lemma.replace("\u0301", "");

    return (
        <div className={classNames(styles.input)}>
            {isCorrect && "Correct!"}
            <TextInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    );
};

export default AnswerInput;
