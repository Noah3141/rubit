import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Link from "next/link";

const BracketLink: FC<{
    token: string;
}> = ({ token }) => {
    return (
        <Link
            className={classNames(styles.link)}
            target="_blank"
            href={`https://en.wiktionary.org/wiki/${token}`}
        >
            {token}
        </Link>
    );
};

export default BracketLink;
