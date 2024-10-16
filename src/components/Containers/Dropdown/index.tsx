import classNames from "classnames";
import React, { type FC, type PropsWithChildren, useState } from "react";
import styles from "./index.module.css";

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
            <div className="flex flex-row items-center gap-3 text-2xl">
                {header}
                <span
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                    className={`ml-auto cursor-pointer transition-all ${open ? "scale-100" : "scale-0"}`}
                >
                    x
                </span>
            </div>
            <div
                className={classNames(styles.contents, {
                    [styles.open!]: open,
                })}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col gap-6 p-6">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
