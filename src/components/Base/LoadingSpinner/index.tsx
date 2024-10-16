import classNames from "classnames";
import React, { type FC } from "react";

import styles from "./index.module.css";

const LoadingSpinner: FC<{
    //
}> = ({}) => {
    return <span className={classNames(styles.spinner)}></span>;
};

export default LoadingSpinner;
