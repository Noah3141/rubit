"use client";

import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import styles from "./index.module.css";
import Link from "next/link";

const Item: FC<
    PropsWithChildren<{
        link?: string;
        onClick?: () => void;
    }>
> = ({ children, link, onClick }) => {
    if (!!link) {
        return (
            <Link href={link} className={classNames(styles.item)}>
                {children}
            </Link>
        );
    }

    return (
        <div
            onMouseDown={() => {
                if (typeof onClick !== "undefined") {
                    onClick();
                }
            }}
            className={classNames(styles.item)}
        >
            {children}
        </div>
    );
};

export default Item;
