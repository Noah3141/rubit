import { Metadata } from "next";
import classnames from "classnames";
import styles from "./index.module.css";

export const metadata: Metadata = {
    title: "Russian Vocabulary",
    description: "Learn fast and break things",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function BaseLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <main className={classnames(styles.layout)}>{children}</main>;
}
