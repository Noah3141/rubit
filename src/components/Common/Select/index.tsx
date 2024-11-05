"use client";

import React, { useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const Select: FC<{
    value: string;
    options: string[];
    onChange: (newVal: string) => void;
}> = ({ value, options, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={classNames(styles.select)}>
            <div
                className={classNames(styles.selected)}
                onMouseDown={() => {
                    setOpen((p) => !p);
                }}
            >
                {value}
            </div>
            <div
                className={classNames(styles.options, { [styles.open!]: open })}
            >
                {options.map((option) => (
                    <div
                        className={classNames(styles.option)}
                        onClick={() => {
                            onChange(option);
                            setOpen(false);
                        }}
                        key={option}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Select;
