import classNames from "classnames";
import styles from "./index.module.css";

import React, { type FC, type PropsWithChildren } from "react";

const Header: FC<
    PropsWithChildren<{
        level: "1" | "2" | "3" | "4" | "5";
    }>
> = ({ level, children }) => {
    switch (level) {
        case "1":
            return (
                <h1 className={classNames(styles.header, styles.h_1)}>
                    {children}
                </h1>
            );
        case "2":
            return (
                <h2 className={classNames(styles.header, styles.h_2)}>
                    {children}
                </h2>
            );
        case "3":
            return (
                <h3 className={classNames(styles.header, styles.h_3)}>
                    {children}
                </h3>
            );
        case "4":
            return (
                <h4 className={classNames(styles.header, styles.h_4)}>
                    {children}
                </h4>
            );
        case "5":
            return (
                <h5 className={classNames(styles.header, styles.h_5)}>
                    {children}
                </h5>
            );

        // default:
        //     throw new Error(
        //         "Unimplemented header level ~/components/Base/Header",
        //     );
    }
};

export default Header;
