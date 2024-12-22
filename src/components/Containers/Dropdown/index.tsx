"use client";

import classNames from "classnames";
import React, { type FC, type PropsWithChildren, useState } from "react";
import styles from "./index.module.css";
import CloseButton from "~/components/Icons/CloseButton";

const Dropdown: FC<
    PropsWithChildren<{
        header: React.ReactNode;
        contentClassName?: string;
        open: boolean;
        setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }>
> = ({ header, children, contentClassName = "", open, setOpen }) => {
    return (
        <div onClick={() => setOpen(() => true)} className={classNames(styles.dropdown)}>
            <div className={classNames(styles.header)}>
                {header}
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                    className={`transition-all ${open ? "scale-100" : "scale-0"}`}
                >
                    <CloseButton />
                </span>
            </div>
            <div
                className={classNames(styles.wrapper, {
                    [styles.open!]: open,
                })}
            >
                <div className="overflow-hidden">
                    <div className={classNames(styles.content, contentClassName)}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
