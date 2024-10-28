import React, { type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { CgClose } from "react-icons/cg";

const CloseButton: FC<
    {
        //
    } & React.HTMLAttributes<HTMLDivElement>
> = ({ className = "", ...props }) => {
    return (
        <div className={classNames(styles.button, className)} {...props}>
            <CgClose className={classNames(styles.icon)} size={24} />
        </div>
    );
};

export default CloseButton;
