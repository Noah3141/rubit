import { type Metadata } from "next";
import React from "react";
import classnames from "classnames";
import styles from "./index.module.css";
import WithNavbar from "~/partials/withNavbar";
import WithFooter from "~/partials/withFooter";
import WithLanguageNav from "~/partials/withLanguageNav";
import { getServerAuthSession } from "~/server/auth";
import { globalIcons } from "~/app/globals";

export const metadata: Metadata = {
    title: "Russian Vocabulary",
    description: "Learn fast and break things",
    icons: globalIcons,
};

export default async function LanguageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerAuthSession();

    return (
        <>
            <WithNavbar session={session} />
            <WithLanguageNav session={session} />
            <div className={classnames(styles.page)}>
                <div className={classnames(styles.layout)}>{children}</div>
            </div>
            <WithFooter />
        </>
    );
}
