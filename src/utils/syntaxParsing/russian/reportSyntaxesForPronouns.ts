import { RussianToken } from ".";

export const russianPronouns = [
    "он",
    "она",
    "оно",
    "они",
    //
    "я",
    "мне",
    //
    "его",
    //
    "том",
    //
    "мы",
    //
    "ты",
    "тебя",
    "тобой",
];

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
            const datives: RussianToken["syntax"] = [
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
            ];
            const prepositionals: RussianToken["syntax"] = withinNounPhrase
                ? [
                      {
                          case: "pre",
                          gender: "m",
                          number: "singular",
                          word: pronoun,
                      },
                      {
                          case: "pre",
                          gender: "f",
                          number: "singular",
                          word: pronoun,
                      },
                  ]
                : [];

            return {
                pos: "Noun",
                syntax: [...datives, ...prepositionals],
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
        case "том":
            return {
                pos: "Noun",
                syntax: [
                    { word: pronoun, case: "pre", number: "singular", gender: "m" },
                    { word: pronoun, case: "pre", number: "singular", gender: "n" },
                ],
            };
        case "мы":
            return {
                pos: "Noun",
                syntax: [{ word: pronoun, case: "nom", number: "plural", gender: null }],
            };
        case "они":
            return {
                pos: "Noun",
                syntax: [{ word: pronoun, case: "nom", number: "plural", gender: null }],
            };
        case "ты":
            return {
                pos: "Noun",
                syntax: [
                    {
                        word: pronoun,
                        case: "nom",
                        number: "singular",
                        gender: "f",
                    },
                    {
                        word: pronoun,
                        case: "nom",
                        number: "singular",
                        gender: "m",
                    },
                ],
            };
        case "тебя":
            return {
                pos: "Noun",
                syntax: [
                    {
                        word: pronoun,
                        case: "gen",
                        number: "singular",
                        gender: "f",
                    },
                    {
                        word: pronoun,
                        case: "gen",
                        number: "singular",
                        gender: "m",
                    },
                ],
            };
        case "тобой":
            return {
                pos: "Noun",
                syntax: [
                    {
                        word: pronoun,
                        case: "ins",
                        number: "singular",
                        gender: "f",
                    },
                    {
                        word: pronoun,
                        case: "ins",
                        number: "singular",
                        gender: "m",
                    },
                ],
            };
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
