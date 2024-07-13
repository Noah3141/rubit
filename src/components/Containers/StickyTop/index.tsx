import React, { FC, PropsWithChildren } from "react";

const StickyTop: FC<PropsWithChildren> = ({ children }) => {
    return <div className="sticky left-0 top-0 w-full">{children}</div>;
};

export default StickyTop;
