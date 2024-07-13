import React, { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const P: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <div className={classNames(styles.p)}>{children}</div>;
};

export default P;
