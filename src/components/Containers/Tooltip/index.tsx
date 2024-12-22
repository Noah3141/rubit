import React, { type PropsWithChildren, type FC } from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { Tooltip as ReactTooltip, type TooltipRefProps, type ITooltip } from "react-tooltip";

const Tooltip: FC<
    PropsWithChildren<
        {
            //
        } & ITooltip &
            React.RefAttributes<TooltipRefProps>
    >
> = ({ children, className = "", ...props }) => {
    return (
        <ReactTooltip opacity={1} className={classNames(styles.tooltip, className)} {...props}>
            {children}
        </ReactTooltip>
    );
};

export default Tooltip;
