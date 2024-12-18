"use client";

import React, { useEffect, useRef, useState, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import useClickOutside from "~/hooks/useClickOutside";

const Select: FC<{
    value: string;
    options: string[];
    onChange: (newVal: string) => void;
}> = ({ value, options, onChange }) => {
    const [open, setOpen] = useState(false);

    const selectRef = useRef<HTMLDivElement>(null);

    useClickOutside(() => {
        setOpen(false);
    }, selectRef);

    return (
        <div ref={selectRef} className={classNames(styles.select)}>
            <div
                className={classNames(styles.selected)}
                onMouseDown={() => {
                    setOpen((p) => !p);
                }}
            >
                {value}
            </div>
            <div className={classNames(styles.options, { [styles.open!]: open })}>
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
