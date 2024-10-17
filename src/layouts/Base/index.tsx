import { Metadata } from "next";
import classnames from "classnames";
import styles from "./index.module.css";
import { globalIcons } from "~/app/_globals";

export const metadata: Metadata = {
    title: "Russian Vocabulary",
    description: "Learn fast and break things",
    icons: globalIcons,
};

/**
 * Base layout should do NOTHING but frame within the page. Adds no content but styling.
 */
export default async function BaseLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return <main className={classnames(styles.layout)}>{children}</main>;
}
