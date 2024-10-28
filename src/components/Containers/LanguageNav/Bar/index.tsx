"use client";

import classNames from "classnames";
import styles from "./index.module.css";
import React, {
    type FC,
    type PropsWithChildren,
    useEffect,
    useState,
} from "react";
import { toTitleCase } from "~/utils/strings";
import { FaChevronDown } from "react-icons/fa";
import type { Language } from "~/types/language";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Bar: FC<
    PropsWithChildren<{
        language: string;
    }>
> = ({ children, language }) => {
    const [navOpen, setNavOpen] = useState(false);
    const languageTitle = toTitleCase(language) as Language;
    const pathname = usePathname();

    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);

    return (
        <nav className={classNames(styles.navbar)}>
            {/* Desktop */}
            <div className="hidden w-full lg:block">
                <div className={classNames(styles.header)}>
                    <h1 className={classNames(styles.title)}>
                        <Link href={`/${language}`}> {languageTitle}</Link>
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
