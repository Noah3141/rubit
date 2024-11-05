"use client";

import classNames from "classnames";
import styles from "./index.module.css";

import React, { type FC, TextareaHTMLAttributes, useState } from "react";

const Textarea: FC<
    {
        value: string;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ value, onChange, ...props }) => {
    return (
        <textarea
            className={classNames(styles.textarea)}
            onChange={(e) => {
                onChange(e);
            }}
            {...props}
        />
    );
};

export default Textarea;
