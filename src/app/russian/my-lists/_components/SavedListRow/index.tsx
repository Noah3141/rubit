import classNames from "classnames";
import React, { type FC } from "react";
import styles from "./index.module.css";
import Button from "../../../../../components/Common/Button";
import type { RouterOutputs } from "~/trpc/react";
import Link from "next/link";

const SavedListRow: FC<{
    savedList: RouterOutputs["list"]["russian"]["bySessionUser"][0];
}> = ({ savedList }) => {
    return (
        <div className={classNames(styles.row)}>
            <h2>{savedList.title}</h2>
            <span>({savedList.content.entry_list.length})</span>
            <Link
                className="ml-auto"
                href={`/${savedList.language.toLowerCase()}/my-lists/${savedList.id}`}
            >
                <Button>View</Button>
            </Link>
            <Link
                href={`/${savedList.language.toLowerCase()}/my-lists/${savedList.id}/study`}
            >
                <Button>Study</Button>
            </Link>
        </div>
    );
};

export default SavedListRow;
