import classNames from "classnames";
import React, { type FC } from "react";

import styles from "./index.module.css";

const LoadingSpinner: FC<{
    fill?: boolean;
    size?: "small" | "medium";
}> = ({ fill = false, size = "medium" }) => {
    if (!fill) {
        return (
            <span className={classNames(styles.spinner, styles[size])}></span>
        );
    } else {
        return (
            <div className={classNames(styles.wrapper)}>
                <span
                    className={classNames(styles.spinner, styles[size])}
                ></span>
            </div>
        );
    }
};

export default LoadingSpinner;
