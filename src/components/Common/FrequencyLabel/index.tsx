import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import styles from "./index.module.css";

const FrequencyLabel: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <span className={classNames(styles.label)}>{children}</span>;
};

export default FrequencyLabel;
