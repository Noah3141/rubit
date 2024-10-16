"use client";
import classNames from "classnames";
import styles from "./index.module.css";
import React, { type FC, type PropsWithChildren, useState } from "react";
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
        <nav className={classNames(styles.navbar)}>
            {/* Desktop */}
            <div className="hidden lg:block">
                <div className={classNames(styles.container)}>{children}</div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <button
                    onMouseDown={() => setNavOpen((p) => !p)}
                    className={classNames(styles.mobileNavButton)}
                >
                    <CgClose
                        size={36}
                        className={classNames(styles.icon, {
                            [styles.show!]: navOpen,
                        })}
                    />
                    <FiMenu
                        size={36}
                        className={classNames(styles.icon, {
                            [styles.show!]: !navOpen,
                        })}
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
        </nav>
    );
};

const Nav = { Bar, Item };
export default Bar;
