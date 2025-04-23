"use client";

import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import { type Color } from "~/types/colors";
import styles from "./index.module.css";
import LoadingSpinner from "../LoadingSpinner";

const Button: FC<
    PropsWithChildren<
        {
            color?: Color;
            size?: "small" | "fit" | "wide" | "full";
            status?: "pending" | "success" | "error" | "idle";
        } & React.ButtonHTMLAttributes<HTMLButtonElement>
    >
> = ({ color = "orange", size = "fit", status = "idle", className = "", children, ...props }) => {
    return (
        <button className={classNames(styles.button, styles[color], styles[size], styles[status], className)} disabled={status !== "idle"} {...props}>
            {status == "pending" && <LoadingSpinner className={styles.spinner} size="small" />}
            <div className={`${status == "pending" && "opacity-0"}`}>{children}</div>
        </button>
    );
};

export default Button;
