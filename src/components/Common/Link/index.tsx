import React, { type PropsWithChildren, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import NextLink, { type LinkProps } from "next/link";
import { GrNewWindow } from "react-icons/gr";

const Link: FC<
    PropsWithChildren<
        {
            //
        } & LinkProps &
            React.AnchorHTMLAttributes<HTMLAnchorElement>
    >
> = ({ children, target, ...props }) => {
    return (
        <NextLink
            className={classNames(styles.link)}
            target={target}
            {...props}
        >
            {children}

            {target == "_blank" && (
                <GrNewWindow className={classNames(styles.icon)} />
            )}
        </NextLink>
    );
};

export default Link;
