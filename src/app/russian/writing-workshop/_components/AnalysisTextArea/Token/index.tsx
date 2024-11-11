import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { RussianToken } from "~/utils/syntaxParsing/russian";
import Tooltip from "~/components/Containers/Tooltip";

const Token: FC<{
    item: RussianToken;
}> = ({ item }) => {
    if (item.syntax.length == 1) {
        return (
            <span
                className={classNames(
                    styles.word,
                    !!item.pos && styles[item.pos],
                    !!item.syntax[0]!.number && styles[item.syntax[0]!.number],
                    !!item.syntax[0]!.case && styles[item.syntax[0]!.case],
                )}
            >
                {item.syntax[0]!.word}
            </span>
        );
    } else {
        return (
            <>
                <span
                    id={`${item.pos}`}
                    className={classNames(
                        styles.word,
                        !!item.pos && styles[item.pos],
                        !!item.syntax[0]?.number &&
                            styles[item.syntax[0].number],
                        !!item.syntax[0]?.case && styles[item.syntax[0].case],
                    )}
                >
                    {item.syntax[0]!.word}*
                </span>
                <Tooltip anchorSelect={`#${item.pos}`}>
                    <div className="flex flex-col">
                        {item.syntax.map((syntax) => (
                            <span key={syntax.case}>
                                {syntax.case}, {syntax.gender}, {syntax.number}
                            </span>
                        ))}
                    </div>
                </Tooltip>
            </>
        );
    }
};

export default Token;
