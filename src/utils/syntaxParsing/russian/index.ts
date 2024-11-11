import { VocabularyListData } from "~/types/russian/list";
import { reduceAmbiguities } from "./reduceAmbiguities";
import { TextCrawler } from "~/utils/TextCrawler";
import { unaccent } from "~/utils/strings";
import { reportSyntaxesForPreposition } from "./reportSyntaxesForPreposition";
import { russianPrepositions } from "~/utils/coreWords/russian";

type RussianCase = "nom" | "acc" | "gen" | "dat" | "ins" | "pre" | "special";
type RussianGender = "m" | "f" | "n";
type RussianNumber = "singular" | "plural";

export type RussianToken = {
    syntax: {
        word: string;
        number: RussianNumber | null;
        case: RussianCase | null;
        gender: RussianGender | null;
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
                let withinNounPhrase = false;

                switch (segment.type) {
                    case "word":
                        if (russianPrepositions.includes(segment.value)) {
                            withinNounPhrase = true;
                            return {
                                syntax: reportSyntaxesForPreposition(
                                    segment.value,
                                ),
                                entry: null,
                                position,
                                pos: "Preposition",
                            };
                        }

                        const entry = entries
                            .filter((entry) => {
                                if (withinNounPhrase) {
                                    if (entry.model.type == "Verb") {
                                        return false;
                                    }
                                }

                                return true;
                            })
                            .find((entry) => {
                                return Object.values(
                                    entry.model.dictionary_info,
                                )
                                    .map((str) => unaccent({ str }))
                                    .includes(segment.value.toLowerCase());
                            });

                        if (entry?.model.type == "Noun") {
                            withinNounPhrase = false;
                        }

                        if (!entry) {
                            return {
                                syntax: [
                                    {
                                        word: segment.value,
                                        case: null,
                                        number: null,
                                        gender: null,
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
                                        gender: null,
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
                                    gender: form.gender,
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
                                    gender: null,
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
                                    gender: null,
                                },
                            ],
                            pos: null,
                            entry: null,
                            position,
                        };
                }
            },
        );

        const siftedParts = reduceAmbiguities(tokens);

        return siftedParts;
    });

    return parsedSentences;
}

export const determineCase = (
    word: string,
    entry: Entry,
): ({
    accented: string;
    case: RussianCase | null;
    number: RussianNumber | null;
    gender: RussianGender | null;
} | null)[] => {
    switch (entry.model.type) {
        case "Noun":
            const gender = entry.model.dictionary_info.gender
                .charAt(0)
                .toLowerCase() as RussianGender;

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
                                gender,
                            };
                        case "nom_plur":
                            return {
                                case: "nom",
                                number: "plural",
                                accented: form ?? word,
                                gender,
                            };
                        case "acc_sing":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "acc_plur":
                            return {
                                case: "acc",
                                number: "plural",
                                accented: form ?? word,
                                gender,
                            };
                        case "gen_sing":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "gen_plur":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "ins_sing":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "ins_plur":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "dat_sing":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "dat_plur":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "pre_sing":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                                gender,
                            };
                        case "pre_plur":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                                gender,
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
                                gender: "m",
                            };
                        case "acc_masc":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "gen_masc":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "dat_masc":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "ins_masc":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "pre_masc":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "nom_fem":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "acc_fem":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "gen_fem":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "dat_fem":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "ins_fem":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "pre_fem":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "nom_neut":
                            return {
                                case: "nom",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "acc_neut":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "gen_neut":
                            return {
                                case: "gen",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "dat_neut":
                            return {
                                case: "dat",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "ins_neut":
                            return {
                                case: "ins",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "pre_neut":
                            return {
                                case: "pre",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "nom_plur":
                            return {
                                case: "nom",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };
                        case "acc_plur":
                            return {
                                case: "acc",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };
                        case "gen_plur":
                            return {
                                case: "gen",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };
                        case "dat_plur":
                            return {
                                case: "dat",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };
                        case "ins_plur":
                            return {
                                case: "ins",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };
                        case "pre_plur":
                            return {
                                case: "pre",
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };

                        case "m_short":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "f_short":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "n_short":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "p_short":
                            return {
                                case: "acc",
                                number: "singular",
                                accented: form ?? word,
                                gender,
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
                        gender: key.includes("_past")
                            ? (key.charAt(0) as RussianGender)
                            : null,
                        accented: (form as string) ?? word,
                    };
                });
        case "Adverb":
            return [
                {
                    case: null,
                    accented: entry.model.lemma,
                    number: null,
                    gender: null,
                },
            ];
    }
};

/** Returns those items present in both lists */
export function intersection<T>(a: T[], b: T[]): T[] {
    return a.filter((item) => b.includes(item));
}
