import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";
import styles from "./index.module.css";

const IPA: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <span className={classNames(styles.ipa)}>{children}</span>;
};

export default IPA;
