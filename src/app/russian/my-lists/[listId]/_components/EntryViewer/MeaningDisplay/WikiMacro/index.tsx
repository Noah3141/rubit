import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const INFLECTION_TYPES: Record<string, string> = {
    pass: "Passive voice of",
};

const WikiMacro: FC<{
    macroText: string;
}> = ({ macroText }) => {
    const macroFn = macroText.substring(0, macroText.indexOf("|"));

    if (["senseid"].includes(macroFn)) {
        return null;
    }

    switch (macroFn) {
        case "participle of":
            const participleLemma = macroText.split("|").at(2);

            return (
                <span className={classNames()}>
                    participle of &apos;{participleLemma}&apos;
                </span>
            );

        case "infl of":
            const parts = macroText.split("|");
            const headLemma = parts.at(2);
            const inflectionType = INFLECTION_TYPES[parts.at(4)!];

            return (
                <span className={classNames()}>
                    {inflectionType} &apos;{headLemma}&apos;
                </span>
            );

        default:
            const finalToken = macroText.substring(
                macroText.lastIndexOf("|") + 1,
                macroText.length,
            );
            return (
                <span className={classNames(styles.label)}>({finalToken})</span>
            );
    }
};

export default WikiMacro;
