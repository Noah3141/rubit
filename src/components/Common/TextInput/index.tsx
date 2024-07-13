"use client";

import classNames from "classnames";
import styles from "./index.module.css";

import React, { FC } from "react";

const TextInput: FC<
    {
        //
    } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ className = "", ...props }) => {
    return (
        <input
            type="text"
            className={classNames(styles.input, className)}
            {...props}
        />
    );
};

export default TextInput;
