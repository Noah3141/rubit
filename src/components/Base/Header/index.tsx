import classNames from "classnames";
import styles from "./index.module.css";

import React, { type FC, type PropsWithChildren } from "react";

const Header: FC<
    PropsWithChildren<{
        level: "1" | "2" | "3";
    }>
> = ({ level, children }) => {
    switch (level) {
        case "1":
            return <h1 className={classNames(styles.header, styles.h_1)}>{children}</h1>;
        case "2":
            return <h2 className={classNames(styles.header, styles.h_2)}>{children}</h2>;
        case "3":
            return <h3 className={classNames(styles.header, styles.h_3)}>{children}</h3>;

        // default:
        //     throw new Error(
        //         "Unimplemented header level ~/components/Base/Header",
        //     );
    }
};

export default Header;
