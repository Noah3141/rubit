import React, { useContext, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { DialogContext } from "../../context";

const UnrecognizedWord: FC<{
    word: string;
    listId: string;
}> = ({ word, listId }) => {
    const [state, setState] = useContext(DialogContext);
    return (
        <span id={word} className={classNames(styles.word)} onClick={() => setState({ dialog: "AddNewWord", word })}>
            {word}
        </span>
    );
};

export default UnrecognizedWord;
