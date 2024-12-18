import { type RussianText } from "~/utils/syntaxParsing/russian";

export type Score = {
    average: number;
    middleHits: number;
    rareHits: number;
};

/** Generate a writing workshop input Score, describing the rarity of the user's input text vocabulary */
export const score = (text: RussianText): Score => {
    const averageCommonality =
        text.reduce((acc, syntax) => {
            return acc + (syntax.at(0)?.model?.commonality ?? 0);
        }, 0) / text.length;

    let middleHits = 0;
    let rareHits = 0;

    text.forEach((sentence) => {
        sentence.forEach((token) => {
            const commonality = token.model?.commonality ?? 1;
            if (1 / commonality > 100) {
                middleHits += 1;
            }
            if (1 / commonality > 500) {
                rareHits += 1;
            }
        });
    });

    return {
        average: averageCommonality,
        middleHits,
        rareHits,
    };
};

export const defaultScore: Score = {
    average: 0,
    middleHits: 0,
    rareHits: 0,
};
