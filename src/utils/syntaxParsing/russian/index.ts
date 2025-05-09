import { VocabularyListData } from "~/types/russian/list";
import { reduceAmbiguities } from "./reduceAmbiguities";
import { TextCrawler } from "~/utils/TextCrawler";
import { unaccent } from "~/utils/strings";
import { reportSyntaxesForPreposition } from "./reportSyntaxesForPreposition";
import { russianPrepositions } from "~/utils/coreWords/russian";
import { reportSyntaxesForPronouns, russianPronouns } from "./reportSyntaxesForPronouns";

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
    predicate: boolean;
    pos: "Preposition" | "Noun" | "Verb" | "Adjective" | "Adverb" | null;
    model: Entry["model"] | null;
};

type Entry = VocabularyListData["entry_list"][0];

type RussianSentence = RussianToken[];
export type RussianText = RussianSentence[];

export default function parseSyntax(text: string, models: Entry["model"][]): RussianText {
    let position = 0;

    const sentences = text.split(".");

    const parsedSentences = sentences.map((sentence) => {
        const tokens = new TextCrawler(sentence).map((segment): RussianToken => {
            position += 1;
            let withinNounPhrase = false;

            switch (segment.type) {
                case "word":
                    const normalizedSegment = segment.value.toLowerCase().replace("ё", "е");

                    if (russianPrepositions.includes(normalizedSegment)) {
                        withinNounPhrase = true;
                        return {
                            syntax: reportSyntaxesForPreposition(normalizedSegment),
                            model: null,
                            predicate: false,
                            position,
                            pos: "Preposition",
                        };
                    }

                    if (russianPronouns.includes(normalizedSegment)) {
                        if (["него", "них", "нее", "ним", "ней", "нему", "ними", "нем"].includes(normalizedSegment)) {
                            withinNounPhrase = false;
                        }

                        return {
                            ...reportSyntaxesForPronouns(normalizedSegment, withinNounPhrase),
                            model: null,
                            predicate: false,
                            position,
                        };
                    }

                    const possibleModels = models
                        .filter((model) => {
                            if (withinNounPhrase) {
                                if (model.type == "Verb") {
                                    return false;
                                }
                            }

                            return true;
                        })
                        .filter((model) => {
                            return Object.values(model.dictionary_info)
                                .map((str) => unaccent({ str }))
                                .includes(normalizedSegment);
                        });

                    const bestModel = possibleModels.sort((a, b) => {
                        return (b.commonality ?? 0) - (a.commonality ?? 0);
                    })[0]!;

                    if (bestModel?.type == "Noun") {
                        withinNounPhrase = false;
                    }

                    if (!bestModel) {
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
                            model: null,
                            predicate: false,
                        };
                    }

                    const forms = determineCase(normalizedSegment, bestModel);
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
                            model: null,
                            predicate: false,
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
                        predicate: false, // TODO
                        pos: bestModel.type,
                        model: bestModel,
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
                        model: null,
                        predicate: false,
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
                        model: null,
                        predicate: false,
                        position,
                    };
            }
        });

        const siftedParts = reduceAmbiguities(tokens);

        return siftedParts;
    });
    parsedSentences.forEach((sentence, sentenceIdx) => {
        if (sentenceIdx < parsedSentences.length - 1) {
            sentence.push({ model: null, predicate: false, position: sentence.length + 1, syntax: [{ word: ".", case: null, gender: null, number: null }], pos: null });
        }
    });
    return parsedSentences;
}

export const determineCase = (
    word: string,
    model: Entry["model"],
): ({
    accented: string;
    case: RussianCase | null;
    number: RussianNumber | null;
    gender: RussianGender | null;
} | null)[] => {
    const lowerCaseWord = word.toLowerCase();
    const normalizedWord = unaccent({
        str: lowerCaseWord,
        removeЁ: true,
    });

    switch (model.type) {
        case "Noun":
            const gender = model.dictionary_info.gender.charAt(0).toLowerCase() as RussianGender;
            return Object.entries(model.dictionary_info)
                .filter(
                    ([key, form]) =>
                        unaccent({
                            //
                            str: form,
                            removeЁ: true,
                        }) == normalizedWord && key !== "lemma",
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
            return Object.entries(model.dictionary_info)
                .filter(([key, form]) => unaccent({ str: form, removeЁ: true }) == normalizedWord && key !== "lemma")
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
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                                gender: "m",
                            };
                        case "f_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                                gender: "f",
                            };
                        case "n_short":
                            return {
                                case: null,
                                number: "singular",
                                accented: form ?? word,
                                gender: "n",
                            };
                        case "p_short":
                            return {
                                case: null,
                                number: "plural",
                                accented: form ?? word,
                                gender: null,
                            };

                        default:
                            return null;
                    }
                });
        case "Verb":
            return Object.entries(model.dictionary_info)
                .filter(([key, form]) => unaccent({ str: form, removeЁ: true }) == normalizedWord) //  && key !== "lemma"
                .map(([key, form]) => {
                    return {
                        number: null, // !
                        case: null,
                        gender: key.includes("_past") ? (key.charAt(0) as RussianGender) : null,
                        accented: (form as string) ?? word,
                    };
                });
        case "Adverb":
            return [
                {
                    case: null,
                    accented: model.lemma,
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
