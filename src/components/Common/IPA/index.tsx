import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import styles from "./index.module.css";

const IPA: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <span className={classNames(styles.ipa)}>{children}</span>;
};

export default IPA;
