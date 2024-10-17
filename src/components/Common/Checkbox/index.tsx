import classNames from "classnames";
import React, { useState, type FC } from "react";
import styles from "./index.module.css";

const Checkbox: FC<
    {
        value: boolean;
    } & React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >
> = ({ value, className, ...props }) => {
    return (
        <div
            {...props}
            className={classNames(styles.box, { [styles.checked!]: value })}
        ></div>
    );
};

export default Checkbox;
