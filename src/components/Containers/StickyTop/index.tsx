import React, { type FC, type PropsWithChildren } from "react";

const StickyTop: FC<PropsWithChildren> = ({ children }) => {
    return <div className="sticky left-0 top-0 z-50 w-full">{children}</div>;
};

export default StickyTop;
