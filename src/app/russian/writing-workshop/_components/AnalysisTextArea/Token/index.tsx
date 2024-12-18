import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { RussianToken } from "~/utils/syntaxParsing/russian";
import Tooltip from "~/components/Containers/Tooltip";

const Token: FC<{
    token: RussianToken;
}> = ({ token }) => {
    const commonalityLabel = token.model?.commonality ? Math.floor(1 / token.model?.commonality) : "";

    if (token.syntax[0]?.word == " ") {
        return " ";
    }

    if (token.syntax.length == 1) {
        return (
            <>
                <span
                    id={`${token.pos}_${token.model?.lemma}`}
                    className={classNames(
                        styles.word,
                        !!token.pos && styles[token.pos],
                        !!token.syntax[0]!.number && styles[token.syntax[0]!.number],
                        !!token.syntax[0]!.case && styles[token.syntax[0]!.case],
                    )}
                >
                    {token.syntax[0]?.word ?? "ERROR"}
                </span>
                <Tooltip anchorSelect={`#${token.pos}_${token.model?.lemma}`}>
                    <div>
                        {token.model?.lemma} ({token.pos})
                    </div>
                    <span className={classNames(styles.label)}>{commonalityLabel} pages to see</span>
                    <div className="flex flex-col">
                        {token.syntax.map((syntax) => (
                            <span key={syntax.case}>
                                {syntax.case}, {syntax.gender}, {syntax.number}
                            </span>
                        ))}
                    </div>
                </Tooltip>
            </>
        );
    } else {
        return (
            <>
                <span
                    id={`${token.pos}_${token.model?.lemma}`}
                    className={classNames(
                        styles.word,
                        !!token.pos && styles[token.pos],
                        !!token.syntax[0]?.number && styles[token.syntax[0].number],
                        !!token.syntax[0]?.case && styles[token.syntax[0].case],
                    )}
                >
                    {token.syntax[0]?.word ?? "ERROR"}*
                </span>
                <Tooltip anchorSelect={`#${token.pos}_${token.model?.lemma}`}>
                    <div>
                        {token.model?.lemma} ({token.pos})
                    </div>
                    <span className={classNames(styles.label)}>{commonalityLabel} pages to see</span>
                    <div className="flex flex-col">
                        {token.syntax.map((syntax) => (
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
