import React, { type TextareaHTMLAttributes, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Textarea from "~/components/Common/Textarea";
import parseSyntax from "~/utils/syntaxParsing/russian";
import { type RouterOutputs } from "~/trpc/react";
import Token from "./Token";
import Legend from "./Legend";
import Tooltip from "~/components/Containers/Tooltip";

const AnalysisTextArea: FC<
    {
        value: string;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
        vocabularyList: RouterOutputs["list"]["russian"]["get"];
    } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ vocabularyList, value, onChange, ...props }) => {
    const syntaxHighlighted = parseSyntax(value, vocabularyList.entry_list);

    return (
        <div className={classNames(styles.container)}>
            <span className="w-fit font-bold" id="legend">
                Legend
            </span>
            <Tooltip anchorSelect="#legend">
                <Legend />
            </Tooltip>
            <Textarea className={classNames(styles.analysisTextArea)} value={value} onChange={onChange} {...props} />
            <div className="">
                {
                    //
                    syntaxHighlighted.map(
                        //
                        (sentence, sentenceIdx, sentences) => (
                            <>
                                {sentence.map((token) => (
                                    <Token key={token.position} item={token} />
                                ))}
                            </>
                        ),
                    )
                }
            </div>
        </div>
    );
};

// В числе прочего было потрясающее по художественной силе описание похищения пельменей, уложенных непосредственно в карман пиджака, в квартире № 31,  два обещания покончить  жизнь самоубийством и одно признание в тайной беременности

export default AnalysisTextArea;
