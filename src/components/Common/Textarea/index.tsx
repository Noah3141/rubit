"use client";

import classNames from "classnames";
import styles from "./index.module.css";

import React, { type FC, TextareaHTMLAttributes, useState } from "react";

const Textarea: FC<
    {
        value: string;
        onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({ value, onChange, className = "", ...props }) => {
    return (
        <textarea
            className={classNames(styles.textarea, className)}
            value={value}
            onChange={(e) => {
                onChange(e);
            }}
            {...props}
        />
    );
};

export default Textarea;
