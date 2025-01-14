import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Link from "next/link";

const BracketLink: FC<{
    token: string;
}> = ({ token }) => {
    let display = token;
    let link = token;
    if (token.includes("|")) {
        const parts = token.split("|");
        display = parts.at(1)!;
        link = parts.at(0)!.replaceAll(" ", "_");
    }

    return (
        <Link
            className={classNames(styles.link)}
            target="_blank"
            href={`https://en.wiktionary.org/wiki/${link}#Russian`}
        >
            {display}
        </Link>
    );
};

export default BracketLink;
