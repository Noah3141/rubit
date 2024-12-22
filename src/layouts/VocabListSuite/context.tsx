"use client";

import { createContext } from "react";
import { useContext } from "react";
import { type RouterOutputs } from "~/trpc/react";

export const VocabularyListContext = createContext<RouterOutputs["list"]["russian"]["get"] | null>(null);

/** Context dependent useHook */
export const useVocabularyList = () => {
    const context = useContext(VocabularyListContext);
    if (!context) {
        throw new Error("useVocabularyList called outside of VocabularyListContext");
    }

    return context;
};
