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
            <Button size="small">
                <Link href={`/russian/my-lists/${vocabularyList.id}`}>
                    View
                </Link>
            </Button>
            <Button size="small">
                <Link href={`/russian/my-lists/study/${vocabularyList.id}`}>
                    Study
                </Link>
            </Button>
            <Button size="small">
                <Link href={`/russian/my-lists/info/${vocabularyList.id}`}>
                    Info
                </Link>
            </Button>
        </div>
    );
};

export default PageSelector;
