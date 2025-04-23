"use client";

import React, { type TextareaHTMLAttributes, type FC, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Textarea from "~/components/Common/Textarea";
import parseSyntax from "~/utils/syntaxParsing/russian";
import { api, type RouterOutputs } from "~/trpc/react";
import Token from "./Token";
import Legend from "./Legend";
import Tooltip from "~/components/Containers/Tooltip";
import { defaultScore, score, Score } from "./score";

const AnalysisTextArea: FC<
    {
        //
    } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({}) => {
    const [text, setText] = useState<string>("");
    const [entries, setEntries] = useState<RouterOutputs["entry"]["get"]["byForm"]>([]);
    const getEntry = api.entry.get.byForm.useMutation({
        onMutate: () => {
            return;
        },
        onSuccess: (newEntries) => {
            newEntries.sort((a, b) => a.commonality! - b.commonality!);
            setEntries((updatedEntries) => {
                newEntries.forEach((newEntry) => {
                    if (!updatedEntries.find((e) => e.id == newEntry.id)) {
                        updatedEntries.push(newEntry);
                    }
                });
                return updatedEntries;
            });
            return;
        },
        onError: () => {
            return;
        },
    });
    const syntaxHighlighted = parseSyntax(text, entries);
    const currentScore = score(syntaxHighlighted);
    return (
        <div className={classNames(styles.container)}>
            <span className="w-fit font-bold" id="legend">
                Legend
            </span>
            <div className="flex flex-row gap-3">
                <span>middleHits: {currentScore.middleHits}</span>
                <span>rareHits: {currentScore.rareHits}</span>
                <span>average: {currentScore.average}</span>
            </div>
            <Tooltip anchorSelect="#legend">
                <Legend />
            </Tooltip>
            <Textarea
                className={classNames(styles.analysisTextArea)}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    const lastWord = e.target.value.split(" ").at(-1) ?? "";
                    getEntry.mutate({ form: lastWord });
                }}
            />
            <div className="">
                {
                    //
                    syntaxHighlighted.map(
                        //
                        (sentence, sentenceIdx, sentences) => (
                            <>
                                {sentence.map((token) => (
                                    <Token key={token.position} token={token} />
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
