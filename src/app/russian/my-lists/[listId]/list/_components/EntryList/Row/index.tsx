"use client";

import classNames from "classnames";
import styles from "./index.module.css";
import React, { type FC } from "react";

const Row: FC<
    {
        lemma: string;
        selected: boolean;
        label: React.ReactNode;
    } & React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>
> = ({ selected = false, label, lemma, className = "", ...props }) => {
    return (
        <div className={classNames(styles.row, { [styles.selected!]: selected }, className)} {...props}>
            <div className={classNames(styles.lemma)}>{lemma}</div>
            <div className="select-none px-3 text-right text-neutral-200">{label}</div>
        </div>
    );
};

export default Row;
