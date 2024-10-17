import React, { type FC, type PropsWithChildren } from "react";

import classNames from "classnames";
import styles from "./index.module.css";

const StickyTop: FC<PropsWithChildren> = ({ children }) => {
    return <div className={classNames(styles.container)}>{children}</div>;
};

export default StickyTop;
