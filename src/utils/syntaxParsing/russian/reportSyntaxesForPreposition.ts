import { type RussianToken } from ".";

export const reportSyntaxesForPreposition = (preposition: string): RussianToken["syntax"] => {
    switch (preposition) {
        case "на":
        case "в":
        case "во":
            return [
                { word: preposition, case: "pre", number: null, gender: null },
                { word: preposition, case: "acc", number: null, gender: null },
            ];

        case "у":
        case "из":
            return [{ word: preposition, case: "gen", number: null, gender: null }];

        case "с":
            return [
                { word: preposition, case: "ins", number: null, gender: null },
                { word: preposition, case: "gen", number: null, gender: null },
            ];
        case "до":
            return [{ word: preposition, case: "gen", number: null, gender: null }];

        case "под":
        case "за":
            return [
                { word: preposition, case: "ins", number: null, gender: null },
                { word: preposition, case: "acc", number: null, gender: null },
            ];

        case "по":
            return [
                { word: preposition, case: "dat", number: null, gender: null },
                { word: preposition, case: "acc", number: null, gender: null },
            ];

        case "к":
            return [{ word: preposition, case: "dat", number: null, gender: null }];

        case "через":
            return [{ word: preposition, case: "acc", number: null, gender: null }];

        case "о":
        case "об":
        case "обо":
            return [
                { word: preposition, case: "pre", number: null, gender: null },
                // { word: preposition, case: "acc", number: null, gender: null }, // This exists but it uncommon as hell
            ];

        default:
            return [
                {
                    word: preposition,
                    case: null,
                    number: null,
                    gender: null,
                },
            ];
    }
};
