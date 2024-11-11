import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";

const Legend: FC<{
    //
}> = ({}) => {
    return (
        <div className={classNames(styles.legend)}>
            <span>
                {`&.nom {
                @apply text-neutral-400;
                } `}
            </span>
            <span>
                {`&.acc {
        @apply text-red-400;
        } `}
            </span>
            <span>
                {`&.gen {
        @apply text-green-400;
        } `}
            </span>
            <span>
                {`&.dat {
        @apply text-yellow-500;
        } `}
            </span>
            <span>
                {`&.ins {
        @apply text-blue-400;
        } `}
            </span>
            <span>
                {`&.pre {
        @apply text-purple-500;
        } `}
            </span>
        </div>
    );
};

export default Legend;
