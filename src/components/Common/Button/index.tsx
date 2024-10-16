"use client";

import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import { type Color } from "~/types/colors";
import styles from "./index.module.css";

const Button: FC<
    PropsWithChildren<
        {
            color?: Color;
            size?: "fit" | "wide" | "full";
            status?: "pending" | "success" | "error" | "idle";
        } & React.ButtonHTMLAttributes<HTMLButtonElement>
    >
> = ({
    color = "orange",
    size = "fit",
    status = "idle",
    className = "",
    children,
    ...props
}) => {
    return (
        <button
            className={classNames(
                styles.button,
                styles[color],
                styles[size],
                styles[status],
                className,
            )}
            disabled={status !== "idle"}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
