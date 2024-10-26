import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const LabelMacro: FC<{
    macroText: string;
}> = ({ macroText }) => {
    const macroFn = macroText.substring(0, macroText.indexOf("|"));

    if (["senseid"].includes(macroFn)) {
        return null;
    }

    const token = macroText.substring(
        macroText.lastIndexOf("|") + 1,
        macroText.length,
    );
    return <span className={classNames(styles.label)}>({token})</span>;
};

export default LabelMacro;
