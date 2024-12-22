import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Button from "~/components/Common/Button";
import Link from "next/link";
import { type RouterOutputs } from "~/trpc/react";

const PageSelector: FC<{
    vocabularyList: RouterOutputs["list"]["russian"]["get"];
}> = ({ vocabularyList }) => {
    return (
        <div className={classNames(styles.container)}>
            <button className={styles.button}>
                <Link href={`/russian/my-lists/${vocabularyList.id}/text`}>Text</Link>
            </button>
            <hr className={styles.divider} />
            <button className={styles.button}>
                <Link href={`/russian/my-lists/${vocabularyList.id}`}>List</Link>
            </button>
            <hr className={styles.divider} />
            <button className={styles.button}>
                <Link href={`/russian/my-lists/${vocabularyList.id}/study`}>Study</Link>
            </button>
            <hr className={styles.divider} />
            <button className={styles.button}>
                <Link href={`/russian/my-lists/${vocabularyList.id}/info`}>Info</Link>
            </button>
        </div>
    );
};

export default PageSelector;
