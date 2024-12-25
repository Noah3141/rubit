"use client";

import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import LineParser from "./LineParser";
import LoadingSpinner from "~/components/Common/LoadingSpinner";
import { api } from "~/trpc/react";
import { type VocabularyListData } from "~/types/russian/list";

const MeaningDisplay: FC<{
    entry: VocabularyListData["entry_list"][0];
    noPassiveNotes?: boolean;
}> = ({ entry, noPassiveNotes = false }) => {
    const { status, data: autoUpdateData } = api.autoUpdate.entry.useQuery({
        entry,
    });

    if (!entry.model.meanings && status == "pending") {
        return (
            <div className={classNames(styles.container)}>
                <LoadingSpinner fill size="small" />
            </div>
        );
    }

    const meanings = entry.model.meanings ?? autoUpdateData ?? null;

    if (!meanings) return <div>No definitions yet!</div>;

    const items = meanings.split("#").filter((item) => {
        if (noPassiveNotes) {
            if (item.includes("Passive of")) {
                return false;
            }
        }
        return !!item && !item.startsWith("*") && !item.startsWith(":");
    });

    return (
        <div className={classNames(styles.container)}>
            <ol className="list-decimal ps-5">
                {items.map((item) => {
                    return (
                        <li key={item}>
                            <LineParser text={item} />
                        </li>
                    );
                })}
            </ol>
            <span>{!entry.model.meanings && "(meanings autoparsed)"}</span>
        </div>
    );
};

export default MeaningDisplay;
