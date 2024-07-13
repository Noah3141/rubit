"use client";

import classNames from "classnames";
import styles from "./index.module.css";
import React, { FC, PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";
import { toTitleCase } from "~/utils/strings";

import { FaChevronDown } from "react-icons/fa";
import { Language } from "~/types/language";

const Bar: FC<
    PropsWithChildren<{
        language: string;
    }>
> = ({ children, language }) => {
    const [navOpen, setNavOpen] = useState(false);

    const languageTitle = toTitleCase(language) as Language;

    return (
        <nav className={classNames(styles.navbar)}>
            {/* Desktop */}
            <div className="hidden w-full lg:block">
                <div className={classNames(styles.header)}>
                    <h1 className={classNames(styles.title)}>
                        {languageTitle}
                    </h1>
                    <div className={classNames(styles.contents)}>
                        {children}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="w-full lg:hidden">
                <div className={classNames(styles.headerMobile)}>
                    <h1 className={classNames(styles.title)}>
                        {languageTitle}
                    </h1>
                    <button
                        onMouseDown={() => setNavOpen((p) => !p)}
                        className={classNames(styles.button)}
                    >
                        <FaChevronDown
                            className={classNames(styles.icon, {
                                [styles.flip!]: navOpen,
                            })}
                        />
                    </button>
                </div>
                <div
                    className={classNames(styles.container, {
                        [styles.open!]: navOpen,
                    })}
                >
                    <div className="overflow-hidden">
                        <div className={classNames(styles.content)}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Bar;
