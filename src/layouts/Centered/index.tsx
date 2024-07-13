import { Metadata } from "next";
import classnames from "classnames";
import styles from "./index.module.css";
import WithNavbar from "~/partials/withNavbar";
import WithFooter from "~/partials/withFooter";
import StickyTop from "~/components/Containers/StickyTop";

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
            <StickyTop>
                <WithNavbar />
            </StickyTop>
            <div className={classnames(styles.page)}>
                <div className={classnames(styles.layout)}>{children}</div>
            </div>
            <WithFooter />
        </>
    );
}
