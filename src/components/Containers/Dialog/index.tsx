"use client";

import React, { PropsWithChildren, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import CloseButton from "~/components/Icons/CloseButton";

const Dialog: FC<
    PropsWithChildren<{
        title: string;
        open: boolean;
        setOpen: (newVal: boolean) => void;
    }>
> = ({ children, open, setOpen, title }) => {
    return (
        <div className={classNames(styles.dialog, { [styles.open!]: open })}>
            <div className={classNames(styles.content, { [styles.open!]: open })}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <CloseButton onClick={() => setOpen(false)} />
                </div>
                <div className={classNames(styles.children)}>{children}</div>
            </div>
        </div>
    );
};

export default Dialog;
