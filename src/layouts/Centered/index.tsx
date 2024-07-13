import { Metadata } from "next";
import classnames from "classnames";
import styles from "./index.module.css";
import WithNavbar from "~/partials/withNavbar";
import WithFooter from "~/partials/withFooter";

export const metadata: Metadata = {
    title: "Russian Vocabulary",
    description: "Learn fast and break things",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function CenteredLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <WithNavbar />
            <div className={classnames(styles.layout)}>{children}</div>
            <WithFooter />
        </>
    );
}
