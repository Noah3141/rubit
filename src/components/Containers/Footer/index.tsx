import classNames from "classnames";
import React, { type FC } from "react";
import styles from "./index.module.css";
import Link from "~/components/Common/Link";

const Footer: FC = () => {
    return (
        <footer className={classNames(styles.footer)}>
            <div className={classNames(styles.items)}>
                <Link target="_blank" href={"https://NoahSteckley.com"}>
                    Noah Steckley
                </Link>
                <Link
                    target="_blank"
                    href={`https://www.linkedin.com/in/noah-steckley/`}
                >
                    LinkedIn
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
