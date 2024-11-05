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
        <div className={classNames(styles.container)}>
            <table className={classNames(styles.list)}>
                <tbody className={classNames(styles.body)}>
                    <tr></tr>
                    {/* blank row prevents styling flash */}
                    {children}
                </tbody>
            </table>
        </div>
    );
};

export default EntryList;

export { Row };
