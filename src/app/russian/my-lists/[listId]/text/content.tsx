"use client";

import React, { useState, type FC } from "react";
import { useVocabularyList } from "~/layouts/VocabListSuite/context";
import { TextCrawler } from "~/utils/TextCrawler";
import AccentedWord from "./_components/AccentedWord";
import UnrecognizedWord from "./_components/UnrecognizedWord";
import { accentStopWord, russianStopWords } from "~/utils/stopWords/russian";
import StopWord from "./_components/StopWord";
import Button from "~/components/Common/Button";
import { unaccent } from "~/utils/strings";
import { russianPrepositions } from "~/utils/coreWords/russian";
import AmbiguousWord from "./_components/AmbiguousWord";
import DialogProvider from "./context";
import Dialogs from "./_components/Dialogs";

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

                    if (russianStopWords.includes(segmentLowercase)) {
                        let accented = accentStopWord(segment.value.toLowerCase());
                        if (segment.value.charAt(0).toUpperCase() == segment.value.charAt(0)) {
                            accented = accented.charAt(0).toUpperCase() + accented.slice(1);
                        }
                        accentedText.push(<StopWord word={accented} />);
                        break;
                    }

                    if (russianPrepositions.includes(segmentLowercase)) {
                        accentedText.push(<StopWord word={segment.value} />); //TODO MAKE AN ENTRY?
                        break;
                    }

                    const matchingEntries = vocabularyList.entry_list.filter((entry) => {
                        return Object.values(entry.model.dictionary_info)
                            .map((str) => unaccent({ str, removeЁ: true }))
                            .includes(segmentLowercase);
                    });

                    if (matchingEntries.length > 1) {
                        if (matchingEntries.length == 2 && matchingEntries[0]!.model.lemma == matchingEntries[1]!.model.lemma) {
                            // console.log(matchingEntries[0]!.model.lemma);
                        } else {
                            accentedText.push(<AmbiguousWord entries={matchingEntries} word={segment.value} />);
                            break;
                        }
                    }

                    const matchingEntry = matchingEntries.at(0);

                    if (!matchingEntry) {
                        accentedText.push(<UnrecognizedWord word={segment.value} />);
                        break;
                    } else {
                        const accentedForms = Object.values(matchingEntry.model.dictionary_info).filter(
                            (form): form is string =>
                                unaccent({ str: form, removeЁ: true }) ==
                                unaccent({
                                    str: segmentLowercase,
                                    removeЁ: true,
                                }),
                        );
                        if (!accentedForms.length) {
                            throw new Error("How can this happen");
                        }

                        let matchingForm = accentedForms[0]!;

                        if (accentedForms.length > 1 && accentedForms.some((form) => form !== matchingForm)) {
                            matchingForm = segmentLowercase;
                        }

                        if (!segment.value.startsWith(segmentLowercase.charAt(0))) {
                            matchingForm = matchingForm.charAt(0).toUpperCase() + matchingForm.slice(1);
                        }

                        accentedText.push(<AccentedWord entry={matchingEntry} word={matchingForm} matchingForms={accentedForms} />);
                        break;
                    }
                    break;

                case "whitespace":
                    if (segment.value == "  ") {
                        accentedText.push(<> </>);
                    } else if (/[\n\t]+/.test(segment.value)) {
                        const dedupped = segment.value.replace(/\n{2,}/, "\n");
                        const htmlized = dedupped.split("").map((char) => {
                            switch (char) {
                                case "\n":
                                    return <br />;
                                case "\t":
                                    return "    ";
                                default:
                                    return char;
                            }
                        });
                        //.replaceAll("\n", "\n").replaceAll("\t", "    ");
                        accentedText.push(htmlized);
                    } else {
                        accentedText.push(<>{segment.value}</>);
                    }
                    break;
                case "punctuation":
                    accentedText.push(<>{segment.value}</>);
                    break;
            }
        });

        return accentedText;
    };

    const accentedText = applyAccents(vocabularyList);

    return (
        <DialogProvider>
            <div className={`md:text-lg ${fontSerif && "font-serif md:text-xl"}`}>
                <Button color="neutral" size="small" onMouseDown={() => setFontSerif((p) => !p)}>
                    {fontSerif ? "Serif" : "Sans-serif"}
                </Button>

                <div className="mx-auto max-w-screen-lg whitespace-pre-wrap py-12 leading-8">{accentedText}</div>
            </div>
            <Dialogs />
        </DialogProvider>
    );
};

export default Content;
