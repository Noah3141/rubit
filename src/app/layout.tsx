import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import BaseLayout from "~/layouts/Base";

export const metadata: Metadata = {
    title: "Russian Vocabulary List Maker",
    description: "Learn fast and break things",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
                <TRPCReactProvider>
                    <BaseLayout>{children}</BaseLayout>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
