import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const Select: FC<{
    value: string;
    options: string[];
    onChange: (newVal: string) => void;
}> = ({ value, options, onChange }) => {
    return (
        <div>
            <div className="font-bold">{value}</div>
            <div className="mt-3">
                {options.map((option) => (
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            onChange(option);
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
