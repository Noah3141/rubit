import classNames from "classnames";
import React, { type FC } from "react";

import styles from "./index.module.css";
import { Color } from "~/types/colors";

const LoadingSpinner: FC<{
    color?: Color;
    fill?: boolean;
    size?: "small" | "medium";
    className?: string;
}> = ({ fill = false, size = "medium", color = "orange", className = "" }) => {
    return (
        <div
            className={classNames(
                styles.wrapper,
                { [styles.fill!]: fill },
                className,
            )}
        >
            <span
                className={classNames(
                    styles.spinner,
                    styles[size],
                    styles[color],
                )}
            ></span>
        </div>
    );
};

export default LoadingSpinner;
