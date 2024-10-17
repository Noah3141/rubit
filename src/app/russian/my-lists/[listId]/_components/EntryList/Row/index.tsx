"use client";

import classNames from "classnames";
import styles from "./index.module.css";
import React, { type FC } from "react";
import IPA from "~/components/Common/IPA";

const Row: FC<
    {
        lemma: string;
        selected: boolean;
        label: React.ReactNode;
    } & React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLTableRowElement>,
        HTMLTableRowElement
    >
> = ({ selected = false, label, lemma, className, ...props }) => {
    return (
        <tr
            {...props}
            className={classNames(styles.row, { [styles.selected!]: selected })}
        >
            <td className={classNames(styles.lemma)}>{lemma}</td>
            <td className="text-right text-purple-200">{label}</td>
        </tr>
    );
};

export default Row;
