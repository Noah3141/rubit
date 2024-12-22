import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const Legend: FC<{
    //
}> = ({}) => {
    return (
        <div className={classNames(styles.legend)}>
            <span className="text-orange-500">Nominative</span>
            <span className="text-red-400">Accusative </span>
            <span className="text-green-400">Genitive</span>
            <span className="text-yellow-500">Dative</span>
            <span className="text-blue-400">Instrumental</span>
            <span className="text-neutral-500">Prepositional</span>
        </div>
    );
};

export default Legend;
