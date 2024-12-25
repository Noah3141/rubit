import toast from "react-hot-toast";
import { intersection, type RussianToken } from ".";

export function reduceAmbiguities(tokens: RussianToken[]): RussianToken[] {
    ///
    /// Fix nouns
    ///

    // If there is a surefire Nominative in the sentence, then there are no others, it must be either genitive or accusative
    const certainNominatives = tokens.filter((token) => token.syntax.length == 1 && token.syntax[0]!.case == "nom");

    if (!!certainNominatives.length) {
        tokens.forEach((token, i) => {
            if (token.pos == "Noun" && !certainNominatives.some((nom) => token.position == nom.position)) {
                tokens[i]!.syntax = token.syntax.filter((syntax) => syntax.case !== "nom");
            }
        });
    }

    // I am not a case that my adjectives are not

    const nouns = tokens.filter((token) => token.pos == "Noun");
    nouns.forEach((noun) => {
        const precedingAdjective = tokens.find((token) => {
            token.pos == "Adjective" && token.position < noun.position;
        });
    });

    ///
    /// Prepositions
    //
    const prepositions = tokens.filter((token) => token.pos == "Preposition");
    prepositions.forEach((preposition, prepositionIdx) => {
        const nextNounIdx = tokens.findIndex((token) => token.position > preposition.position && token.pos == "Noun");

        if (nextNounIdx == -1) {
            return;
        }

        const prepositionsCases = preposition.syntax.map((syn) => syn.case);
        const possibleMatchingForms = tokens[nextNounIdx]!.syntax.filter((form) => prepositionsCases.includes(form.case));
        const possibleMatchingCases = possibleMatchingForms.map((item) => item.case);

        if (possibleMatchingForms.length == 0) {
            return;
        }

        tokens[nextNounIdx]!.syntax = possibleMatchingForms;
        preposition.syntax = preposition.syntax.filter((syntax) => possibleMatchingCases.includes(syntax.case));

        for (let i = prepositionIdx; i < nextNounIdx; i++) {
            if (tokens[i]!.pos !== "Adjective" && tokens[i]!.pos !== "Preposition") {
                return;
            }
            tokens[i]!.syntax = tokens[prepositionIdx]!.syntax.filter((preposition) => possibleMatchingCases.includes(preposition.case));
        }
    });

    ///
    /// Adjectives
    ///
    const adjectives = tokens.filter((token) => token.pos == "Adjective");
    adjectives.forEach((adjective) => {
        /// RECONSIDER SHORT ADJECTIVES AS VERBS
        if (adjective.syntax.length == 1) {
            const syntax = adjective.syntax.at(0)!;

            // If is a short adjective
            if (syntax.case == null && !!syntax.number) {
                tokens[adjective.position - 1] = {
                    ...adjective,
                    pos: "Verb",
                };
                return;
            }
        }

        /// LINK WITH FOLLOWING NOUN
        // Look ahead for a noun that matches one of my cases
        const adjectivesCases = adjective.syntax.map((syntax) => syntax.case);
        const adjectivesGenders = adjective.syntax.map((syntax) => syntax.gender);
        const plausibleNextNounIdx = tokens.findIndex((noun) => {
            const nounsCases = noun.syntax.map((syntax) => syntax.case);
            const nounsGenders = noun.syntax.map((syntax) => syntax.gender);

            return (
                noun.pos == "Noun" && // Is a noun
                noun.position > adjective.position &&
                !!intersection(nounsCases, adjectivesCases).length &&
                !!intersection(nounsGenders, adjectivesGenders).length
            );
        });

        const plausibleNextNoun = tokens[plausibleNextNounIdx];

        if (plausibleNextNounIdx === -1 || !plausibleNextNoun) {
            return;
        }

        const plausibleNextNounsCases = plausibleNextNoun.syntax.map((syntax) => syntax.case);
        const plausibleNounGenders = plausibleNextNoun.syntax.map((syntax) => syntax.gender);
        const plausibleNounNumbers = plausibleNextNoun.syntax.map((syntax) => syntax.number);

        const plausibleAdjectiveSyntaxes = adjective.syntax
            .filter((syntax) => plausibleNextNounsCases.includes(syntax.case))
            .filter((syntax) => plausibleNounNumbers.includes(syntax.number))
            .filter((syntax) => plausibleNounGenders.includes(syntax.gender));

        if (plausibleAdjectiveSyntaxes.length == 0) {
            return;
        }

        adjective.syntax = plausibleAdjectiveSyntaxes;
    });

    /// Verbs
    /// FIRST: Determine who is the subject, especially based on Gender and Number matching
    /// THEN: Determine who could be the Acc object (based on animacy)
    /// THEN: Shove everyone else into the genitive
    const subjectDetermined = tokens.find((token) => token.syntax.length == 1 && token.syntax.at(0)!.case == "nom");

    if (!subjectDetermined) {
        const verbs = tokens.filter((token) => token.pos == "Verb");
        verbs.forEach((verb) => {
            if (verb.syntax.length == 1) {
                const verbGender = verb.syntax.at(0)!.gender;
                if (!!verbGender) {
                    tokens.forEach((token, tokenI) => {
                        if (token.pos == "Noun") {
                            const matchingSubjectPossibility = token.syntax.find((syn) => syn.gender == verbGender && syn.case == "nom");
                            if (!!matchingSubjectPossibility) {
                                tokens[tokenI] = { ...token, syntax: [matchingSubjectPossibility] };
                            }
                        }
                    });
                }
            }
        });
    }
    return tokens;
}
