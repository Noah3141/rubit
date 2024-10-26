import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import LineParser from "./LineParser";

const MeaningDisplay: FC<{
    meanings: string | null;
}> = ({ meanings }) => {
    if (!meanings) return <div>No definitions yet!</div>;

    const items = meanings.split("#").filter(
        (item) =>
            //
            !!item && !item.startsWith("*") && !item.startsWith(":"),
    );

    return (
        <div className={classNames(styles.container)}>
            <ol className="list-decimal ps-5">
                {items.map((item) => {
                    return (
                        <li key={item}>
                            <LineParser text={item} />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default MeaningDisplay;
