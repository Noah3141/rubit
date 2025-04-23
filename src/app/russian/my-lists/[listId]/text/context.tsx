"use client";

import { createContext, useState, type FC, type PropsWithChildren } from "react";
import { RussianModel, type VocabularyListData } from "~/types/russian/list";

export type DialogState =
    | { dialog: null } //
    | { dialog: "AddNewWord"; word: string }
    | { dialog: "UpdateWord"; model: RussianModel };

export type DialogContext = [DialogState, React.Dispatch<React.SetStateAction<DialogState>>];

export const DialogContext = createContext<DialogContext>([
    { dialog: null },
    () => {
        return;
    },
]);

const DialogProvider: FC<PropsWithChildren> = ({ children }) => {
    const dialogState = useState<DialogState>({ dialog: null });
    return <DialogContext.Provider value={dialogState}>{children}</DialogContext.Provider>;
};

export default DialogProvider;
