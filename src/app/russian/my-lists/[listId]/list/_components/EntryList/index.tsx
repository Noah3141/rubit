import React, { type PropsWithChildren, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Row from "./Row";

const EntryList: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.list)}>
                {/* blank row prevents styling flash */}
                {children}
            </div>
        </div>
    );
};

export default EntryList;

export { Row };
