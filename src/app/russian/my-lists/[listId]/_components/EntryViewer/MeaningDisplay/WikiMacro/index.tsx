import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Link from "~/components/Common/Link";
import { unaccent } from "~/utils/strings";

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

            return <span className={classNames()}>participle of &apos;{participleLemma}&apos;</span>;

        case "infl of":
            const inflParts = macroText.split("|");
            const headLemma = inflParts.at(2);
            const inflectionType = INFLECTION_TYPES[inflParts.at(4)!];

            return (
                <span className={classNames()}>
                    {inflectionType} &apos;{headLemma}&apos;
                </span>
            );

        case "alternative form of":
            const altWord = macroText.split("|").at(-1);

            return (
                <span>
                    alternative form of &apos;<Link href={`https://en.wiktionary.org/wiki/${unaccent({ str: altWord })}#Russian`}>{altWord}</Link>&apos;
                </span>
            );

        case "lb":
            const labelParts = macroText.split("|");
            const label = labelParts.at(2);
            const using = labelParts.at(3);
            return (
                <span>
                    ({label}, {using})
                </span>
            );

        default:
            const finalToken = macroText.substring(macroText.lastIndexOf("|") + 1, macroText.length);
            return <span className={classNames(styles.label)}>({finalToken})</span>;
    }
};

export default WikiMacro;
