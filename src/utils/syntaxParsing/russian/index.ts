import { VocabularyListData } from "~/types/russian/list";
import { reduceAmbiguities } from "./reduceAmbiguities";
import { TextCrawler } from "~/utils/TextCrawler";
import { unaccent } from "~/utils/strings";

type RussianCase = "nom" | "acc" | "gen" | "dat" | "ins" | "pre" | "special";

type RussianNumber = "singular" | "plural";

export type RussianToken = {
    syntax: {
        word: string;
        number: RussianNumber | null;
        case: RussianCase | null;
    }[];
    position: number;
    pos: "Preposition" | "Noun" | "Verb" | "Adjective" | "Adverb" | null;
    entry: Entry | null;
};

type Entry = VocabularyListData["entry_list"][0];

type RussianSentence = RussianToken[];
type RussianText = RussianSentence[];

export default function parseSyntax(
    text: string,
    entries: Entry[],
): RussianText {
    let position = 0;

    const sentences = text.split(". ");

    const parsedSentences = sentences.map((sentence) => {
        const tokens = new TextCrawler(sentence).map(
            (segment): RussianToken => {
                position += 1;

                switch (segment.type) {
                    case "word":
                        const entry = entries.find((entry) => {
                            return Object.values(entry.model.dictionary_info)
                                .map((str) => unaccent({ str }))
                                .includes(segment.value.toLowerCase());
                        });

                        if (!entry) {
                            return {
                                syntax: [
                                    {
                                        word: segment.value,
                                        case: null,
                                        number: null,
                                    },
                                ],
                                pos: null,
                                position,
                                entry: null,
                            };
                        }

                        const forms = determineCase(segment.value, entry);
                        const firstForm = forms[0];

                        if (!firstForm) {
                            return {
                                syntax: [
                                    {
                                        word: segment.value,
                                        case: null,
                                        number: null,
                                    },
                                ],
                                pos: null,
                                entry: null,
                                position,
                            };
                        }

                        return {
                            syntax: forms
                                .filter((form) => !!form)
                                .map((form) => ({
                                    word: form.accented,
                                    case: form.case,
                                    number: form.number,
                                })),
                            pos: entry.model.type,
                            entry,
                            position,
                        };
                    case "punctuation":
                        return {
                            syntax: [
                                {
                                    word: segment.value,
                                    case: null,
                                    number: null,
                                },
                            ],
                            pos: null,
                            entry: null,
                            position,
                        };
                    case "whitespace":
                        return {
                            syntax: [
                                {
                                    word: segment.value,
                                    case: null,
                                    number: null,
                                },
                            ],
                            pos: null,
                            entry: null,
                            position,
                        };
                }
            },
        );

        // const siftedParts = reduceAmbiguities(tokens);

        return tokens;
    });

    return parsedSentences;
}

export const determineCase = (
    word: string,
    entry: Entry,
): ({
    case: RussianCase | null;
    number: RussianNumber | null;
    accented: string;
} | null)[] => {
    switch (entry.model.type) {
        case "Noun":
            return Object.entries(entry.model.dictionary_info)
                .filter(
                    ([key, form]) =>
                        unaccent({ str: form, removeЁ: true }) ==
                            unaccent({
                                str: word.toLowerCase(),
                                removeЁ: true,
                            }) && key !== "lemma",
                )
                .map(([key, form]) => {
                    switch (key) {
                        case "nom_sing":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "nom_plur":
                            return {
                                case: "nom",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "acc_sing":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "acc_plur":
                            return {
                                case: "acc",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "gen_sing":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "gen_plur":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "ins_sing":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "ins_plur":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "dat_sing":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "dat_plur":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "pre_sing":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "pre_plur":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                            };
                        default:
                            return null;
                    }
                });
        case "Adjective":
            return Object.entries(entry.model.dictionary_info)
                .filter(
                    ([key, form]) =>
                        unaccent({ str: form, removeЁ: true }) ==
                            unaccent({
                                str: word.toLowerCase(),
                                removeЁ: true,
                            }) && key !== "lemma",
                )
                .map(([key, form]) => {
                    switch (key) {
                        case "nom_masc":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "acc_masc":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "gen_masc":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "dat_masc":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "ins_masc":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "pre_masc":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "nom_fem":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "acc_fem":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "gen_fem":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "dat_fem":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "ins_fem":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "pre_fem":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "nom_neut":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "acc_neut":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "gen_neut":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "dat_neut":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "ins_neut":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "pre_neut":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "nom_plur":
                            return {
                                case: "nom",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "acc_plur":
                            return {
                                case: "acc",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "gen_plur":
                            return {
                                case: "gen",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "dat_plur":
                            return {
                                case: "dat",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "ins_plur":
                            return {
                                case: "ins",
                                number: "plural",
                                accented: form ?? word,
                            };
                        case "pre_plur":
                            return {
                                case: "pre",
                                number: "plural",
                                accented: form ?? word,
                            };

                        case "m_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "f_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "n_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                            };
                        case "p_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                            };

                        default:
                            return null;
                    }
                });
        case "Verb":
            return Object.entries(entry.model.dictionary_info)
                .filter(
                    ([key, form]) =>
                        unaccent({ str: form, removeЁ: true }) ==
                            unaccent({
                                str: word.toLowerCase(),
                                removeЁ: true,
                            }) && key !== "lemma",
                )
                .map(([key, form]) => {
                    return {
                        number: null, // !
                        case: null,
                        accented: (form as string) ?? word,
                    };
                });
        case "Adverb":
            return [{ case: null, accented: entry.model.lemma, number: null }];
    }
};
