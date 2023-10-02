import * as React from "react";
const SvgComponent = ({
    className = "",
    size,
}: {
    className?: string;
    size?: number;
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={size ?? 24}
        height={size ?? 24}
        fill="currentColor"
        className={` ${className}`}
    >
        <path d="M0 9v2h50V9Zm0 15v2h50v-2Zm0 15v2h50v-2Z" />
    </svg>
);
export default SvgComponent;
