import { type Metadata } from "next";
import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";
import WithNavbar from "~/partials/withNavbar";
import WithFooter from "~/partials/withFooter";
import { getServerAuthSession } from "~/server/auth";
import FixedTop from "~/components/Containers/FixedTop";

export const metadata: Metadata = {
    title: "Russian Vocabulary",
    description: "Learn fast and break things",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function CenteredLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerAuthSession();

    return (
        <>
            <WithNavbar session={session} />
            <div className={classnames(styles.page)}>
                <div className={classnames(styles.layout)}>{children}</div>
            </div>
            <WithFooter />
        </>
    );
}
