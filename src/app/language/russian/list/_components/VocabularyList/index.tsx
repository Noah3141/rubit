"use client";

import classNames from "classnames";
import React, { FC } from "react";
import Button from "~/components/Common/Button";
import { VocabularyListData } from "~/types/russian/list";
import styles from "./index.module.css";

const VocabularyList: FC<{
    vocabularyList: VocabularyListData;
}> = ({ vocabularyList }) => {
    // const formFrequencies = Object.entries(vocabularyList.form_frequencies);
    // formFrequencies.sort((a, b) => b[1] - a[1]);

    return (
        <div className={classNames(styles.list)}>
           
        </div>
    );
};

export default VocabularyList;
