import React, { type FC, type PropsWithChildren } from "react";

const Row: FC<
    PropsWithChildren<{
        //
    }>
> = ({ children }) => {
    return <div>{children}</div>;
};

export default Row;
