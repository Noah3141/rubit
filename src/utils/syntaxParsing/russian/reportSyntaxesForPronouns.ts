import { RussianToken } from ".";

export const russianPronouns = ["он", "она", "оно", "мне", "его", "я"];

export const reportSyntaxesForPronouns = (pronoun: string, withinNounPhrase: boolean): { syntax: RussianToken["syntax"]; pos: "Adjective" | "Noun" } => {
    switch (pronoun) {
        case "я":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "nom",
                        gender: "m",
                        number: "singular",
                        word: pronoun,
                    },
                    {
                        case: "nom",
                        gender: "f",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
        case "его":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "gen",
                        gender: "m",
                        number: "singular",
                        word: pronoun,
                    },
                    {
                        case: "acc",
                        gender: "m",
                        number: "singular",
                        word: pronoun,
                    },
                    {
                        case: "gen",
                        gender: "n",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };

        case "мне":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "dat",
                        gender: "m",
                        number: "singular",
                        word: pronoun,
                    },
                    {
                        case: "dat",
                        gender: "f",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
        case "он":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "nom",
                        gender: "m",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
        case "оно":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "nom",
                        gender: "n",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
        case "она":
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "nom",
                        gender: "f",
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":
        case "":

        default:
            return {
                pos: "Noun",
                syntax: [
                    {
                        case: "nom",
                        gender: null,
                        number: "singular",
                        word: pronoun,
                    },
                ],
            };
    }
};
