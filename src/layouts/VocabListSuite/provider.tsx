"use client";

import React, { type FC, type PropsWithChildren } from "react";
import { VocabularyListContext } from "./context";
import { type RouterOutputs } from "~/trpc/react";

const VocabularyListContextProvider: FC<
    PropsWithChildren<{
        vocabularyList: RouterOutputs["list"]["russian"]["get"];
    }>
> = ({ children, vocabularyList }) => {
    return (
        <VocabularyListContext.Provider value={vocabularyList}>
            {children}
        </VocabularyListContext.Provider>
    );
};

export default VocabularyListContextProvider;
