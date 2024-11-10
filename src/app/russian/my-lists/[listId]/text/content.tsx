"use client";

import React, { useState, type FC } from "react";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import { TextCrawler } from "~/utils/TextCrawler";
import AccentedWord from "./_components/AccentedWord";
import UnrecognizedWord from "./_components/UnrecognizedWord";
import { russianStopWords } from "~/utils/stopWords/russian";
import StopWord from "./_components/StopWord";
import toast from "react-hot-toast";
import Button from "~/components/Common/Button";
import { unaccent } from "~/utils/strings";
import { russianPrepositions } from "~/utils/coreWords/russian";

const Content: FC<{
    //
}> = ({}) => {
    const vocabularyList = useVocabularyList();
    const [fontSerif, setFontSerif] = useState(false);

    const applyAccents = (list: typeof vocabularyList): React.ReactNode[] => {
        const accentedText: React.ReactNode[] = [];

        new TextCrawler(list.inputText).forEach((segment) => {
            switch (segment.type) {
                case "word":
                    const segmentLowercase = unaccent({
                        str: segment.value.toLowerCase(),
                        removeЁ: true,
                    });
                    if (russianPrepositions.includes(segmentLowercase)) {
                        accentedText.push(<StopWord word={segment.value} />); //TODO MAKE AN ENTRY?
                        break;
                    }
                    if (russianStopWords.includes(segmentLowercase)) {
                        accentedText.push(<StopWord word={segment.value} />);
                        break;
                    }

                    const matchingEntry = vocabularyList.entry_list.find(
                        (entry) => {
                            return Object.values(entry.model.dictionary_info)
                                .map((str) => unaccent({ str, removeЁ: true }))
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
                                unaccent({ str: form, removeЁ: true }) ==
                                unaccent({
                                    str: segmentLowercase,
                                    removeЁ: true,
                                }),
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

    return (
        <div className={`md:text-lg ${fontSerif && "font-serif md:text-xl"}`}>
            <Button color="orange" onMouseDown={() => setFontSerif((p) => !p)}>
                {fontSerif ? "Serif" : "Sans-serif"}
            </Button>
            <div className="mx-auto max-w-screen-lg leading-8">
                {accentedText}
            </div>
        </div>
    );
};

export default Content;
