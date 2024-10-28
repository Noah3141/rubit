import classNames from "classnames";
import React, { type FC, type PropsWithChildren, useState } from "react";
import styles from "./index.module.css";
import CloseButton from "~/components/Icons/CloseButton";

const Dropdown: FC<
    PropsWithChildren<{
        header: React.ReactNode;
    }>
> = ({ header, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            onClick={() => setOpen((p) => true)}
            className={classNames(styles.dropdown)}
        >
            <div className="flex flex-row items-center justify-between gap-3 text-xl">
                {header}
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                    className={`transition-all ${open ? "scale-100" : "scale-0"}`}
                >
                    <CloseButton />
                </span>
            </div>
            <div
                className={classNames(styles.wrapper, {
                    [styles.open!]: open,
                })}
            >
                <div className="overflow-hidden">
                    <div className={classNames(styles.content)}>{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
