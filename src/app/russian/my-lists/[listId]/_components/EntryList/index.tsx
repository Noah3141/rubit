import React, { PropsWithChildren, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import Row from "./Row";

const EntryList: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return (
        <table className={classNames(styles.list)}>
            <tbody className={classNames(styles.body)}>{children}</tbody>
        </table>
    );
};

export default EntryList;

export { Row };
