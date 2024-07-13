"use client";
import classNames from "classnames";
import styles from "./index.module.css";
import React, { FC, PropsWithChildren, useState } from "react";
import Item from "../Item";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Bar: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={classNames(styles.navbar)}>
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className={classNames(styles.container)}>{children}</div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <button
                    onMouseDown={() => setNavOpen((p) => !p)}
                    className="relative ml-auto block size-12 w-16 p-3"
                >
                    <CgClose
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${navOpen ? "scale-100" : "scale-0"}`}
                        size={36}
                    />{" "}
                    <FiMenu
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${!navOpen ? "scale-100" : "scale-0"}`}
                        size={36}
                    />
                </button>

                <div
                    className={classNames(styles.mobileContainer, {
                        [styles.open!]: navOpen,
                    })}
                >
                    <div className="overflow-hidden">{children}</div>
                </div>
            </div>
        </div>
    );
};

const Nav = { Bar, Item };
export default Bar;
