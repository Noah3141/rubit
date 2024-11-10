import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const NumberInput: FC<
    {
        //
    } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ type: _, ...props }) => {
    return (
        <input type="number" className={classNames(styles.input)} {...props} />
    );
};

export default NumberInput;
