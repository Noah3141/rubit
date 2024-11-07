"use client";

import React, { type FC } from "react";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import { TextCrawler } from "~/utils/TextCrawler";
import AccentedWord from "./_components/AccentedWord";
import UnrecognizedWord from "./_components/UnrecognizedWord";
import { russianStopWords } from "~/utils/stopWords/russian";
import StopWord from "./_components/StopWord";

const unaccent = (str: unknown): unknown => {
    if (typeof str == "string") {
        if (str.includes("ё")) {
            return str.replace("ё", "е").replace("\u0301", "");
        }

        return str.replace("\u0301", "");
    } else return str;
};

const Content: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();

    const applyAccents = (list: typeof vocabularyList): React.ReactNode[] => {
        const accentedText: React.ReactNode[] = [];

        new TextCrawler(list.inputText).forEach((segment) => {
            switch (segment.type) {
                case "word":
                    const segmentLowercase = segment.value.toLowerCase();
                    if (russianStopWords.includes(segmentLowercase)) {
                        accentedText.push(<StopWord word={segment.value} />);
                        break;
                    }

                    const matchingEntry = vocabularyList.entry_list.find(
                        (entry) => {
                            return Object.values(entry.model.dictionary_info)
                                .map(unaccent)
                                .includes(segmentLowercase);
                        },
                    );
                    const accentedLemma = matchingEntry?.model.lemma;

                    if (!accentedLemma) {
                        accentedText.push(
                            <UnrecognizedWord word={segment.value} />,
                        );
                        break;
                    } else {
                        const accentedForms = Object.values(
                            matchingEntry.model.dictionary_info,
                        ).filter(
                            (form) =>
                                unaccent(form) == unaccent(segmentLowercase),
                        );

                        if (!accentedForms.length) {
                            throw new Error("How can this happen");
                        }

                        let matchingForm = accentedForms[0] as string;

                        if (
                            accentedForms.length > 1 &&
                            accentedForms.some((form) => form !== matchingForm)
                        ) {
                            matchingForm = segmentLowercase;
                        }

                        if (
                            !segment.value.startsWith(
                                segmentLowercase.charAt(0),
                            )
                        ) {
                            matchingForm =
                                matchingForm.charAt(0).toUpperCase() +
                                matchingForm.slice(1);
                        }

                        accentedText.push(
                            <AccentedWord
                                entry={matchingEntry}
                                word={matchingForm}
                            />,
                        );
                        break;
                    }
                    break;

                case "whitespace":
                    accentedText.push(
                        <span className="whitespace-pre-wrap">
                            {segment.value}
                        </span>,
                    );
                    break;
                case "punctuation":
                    accentedText.push(<span>{segment.value}</span>);
                    break;
            }
        });

        return accentedText;
    };

    const accentedText = applyAccents(vocabularyList);

    return <div className="md:text-lg">{accentedText}</div>;
};

export default Content;
