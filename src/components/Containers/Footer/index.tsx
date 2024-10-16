import classNames from "classnames";
import React, { type FC } from "react";
import styles from "./index.module.css";

const Footer: FC = () => {
    return (
        <footer className={classNames(styles.footer)}>
            <div>Noah Steckley</div>
            <div>LinkedIn</div>
            <div></div>
        </footer>
    );
};

export default Footer;
