import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const UnrecognizedWord: FC<{
    word: string;
}> = ({ word }) => {
    return <span className={classNames(styles.word)}>{word}</span>;
};

export default UnrecognizedWord;
