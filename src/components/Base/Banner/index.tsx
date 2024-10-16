import type {  FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import type { Color } from "~/types/colors";

const Banner: FC<PropsWithChildren<{ color: Color }>> = ({
    color,
    children,
}) => {
    return (
        <div className={classNames(styles.banner, styles[color])}>
            {children}
        </div>
    );
};

export default Banner;
