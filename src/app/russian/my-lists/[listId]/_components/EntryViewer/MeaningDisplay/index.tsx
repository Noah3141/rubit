"use client";

import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import LineParser from "./LineParser";
import LoadingSpinner from "~/components/Common/LoadingSpinner";
import { api } from "~/trpc/react";
import { VocabularyListData } from "~/types/russian/list";

const MeaningDisplay: FC<{
    entry: VocabularyListData["entry_list"][0];
}> = ({ entry }) => {
    const { status } = api.autoUpdate.entry.useQuery({ entry });

    if (!entry.model.meanings && status == "pending") {
        return (
            <div className={classNames(styles.container)}>
                <LoadingSpinner fill size="small" />
            </div>
        );
    }
    if (!entry.model.meanings) return <div>No definitions yet!</div>;

    const items = entry.model.meanings.split("#").filter(
        (item) =>
            //
            !!item && !item.startsWith("*") && !item.startsWith(":"),
    );

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
        </div>
    );
};

export default MeaningDisplay;
