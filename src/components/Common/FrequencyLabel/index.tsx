import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import styles from "./index.module.css";

const FrequencyLabel: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <span className={classNames(styles.label)}>{children}</span>;
};

export default FrequencyLabel;
