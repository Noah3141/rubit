import classNames from "classnames";
import React, { type FC } from "react";

import styles from "./index.module.css";

const LoadingSpinner: FC<{
    fill?: boolean;
}> = ({ fill = false }) => {
    if (!fill) {
        return <span className={classNames(styles.spinner)}></span>;
    } else {
        return (
            <div className={classNames(styles.wrapper)}>
                <span className={classNames(styles.spinner)}></span>
            </div>
        );
    }
};

export default LoadingSpinner;
