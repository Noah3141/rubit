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
            <Button color="green" size="small">
                <Link href={`/russian/my-lists/${vocabularyList.id}/text`}>
                    Text
                </Link>
            </Button>
            <Button color="green" size="small">
                <Link href={`/russian/my-lists/${vocabularyList.id}`}>
                    List
                </Link>
            </Button>
            <Button color="green" size="small">
                <Link href={`/russian/my-lists/${vocabularyList.id}/study`}>
                    Study
                </Link>
            </Button>
            <Button color="green" size="small">
                <Link href={`/russian/my-lists/${vocabularyList.id}/info`}>
                    Info
                </Link>
            </Button>
        </div>
    );
};

export default PageSelector;
