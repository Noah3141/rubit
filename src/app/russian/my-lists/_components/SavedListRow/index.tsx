import classNames from "classnames";
import React, { type FC } from "react";
import styles from "./index.module.css";
import type { RouterOutputs } from "~/trpc/react";
import Link from "next/link";

const SavedListRow: FC<{
    savedList: RouterOutputs["list"]["russian"]["bySessionUser"][0];
}> = ({ savedList }) => {
    return (
        <Link className="" href={`/${savedList.language.toLowerCase()}/my-lists/${savedList.id}/text`}>
            <div className={classNames(styles.row)}>
                <h2>{savedList.title}</h2>
                <span>({savedList.content.entry_list.length})</span>
            </div>
        </Link>
    );
};

export default SavedListRow;
