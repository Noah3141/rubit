import classNames from "classnames";
import styles from "./index.module.css";

import React, { FC, useState } from "react";
import Option from "./Option";

export type Option = {
    text: string;
};

const Toggler: FC<{
    selected: Option;
    onChange: (newVal: Option) => void;
    options: Option[];
}> = ({ onChange, options, selected }) => {
    return (
        <div className={classNames(styles.container)}>
            {options.map((option) => {
                return (
                    <button
                        key={option.text}
                        onMouseDown={() => {
                            onChange(option);
                        }}
                        className={classNames(styles.option, {
                            [styles.selected!]: selected.text == option.text,
                        })}
                    >
                        {option.text}
                    </button>
                );
            })}
        </div>
    );
};

export default Toggler;
