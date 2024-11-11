import React, { TextareaHTMLAttributes, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Textarea from "~/components/Common/Textarea";
import parseSyntax from "~/utils/syntaxParsing/russian";
import { RouterOutputs } from "~/trpc/react";
import Token from "./Token";
import Legend from "./Legend";

const AnalysisTextArea: FC<
    {
        value: string;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
        vocabularyList: RouterOutputs["list"]["russian"]["get"];
    } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ vocabularyList, value, onChange, ...props }) => {
    const syntaxHighlighted = parseSyntax(value, vocabularyList.entry_list);

    return (
        <>
            <Textarea
                className={classNames(styles.analysisTextArea)}
                value={value}
                onChange={onChange}
                {...props}
            />
            <div>
                {syntaxHighlighted.map((sentence) =>
                    sentence.map((token) => (
                        <Token key={token.position} item={token} />
                    )),
                )}
            </div>
            {JSON.stringify(
                syntaxHighlighted.at(-1)?.at(-1)?.entry?.model.dictionary_info,
                null,
                "\n",
            )}
            <Legend />
        </>
    );
};

export default AnalysisTextArea;
