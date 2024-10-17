import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import BaseLayout from "~/layouts/Base";
import { Toaster } from "react-hot-toast";
import { globalIcons } from "./_globals";

export const metadata: Metadata = {
    title: "Russian Vocabulary List Maker",
    description: "Learn fast and break things",
    icons: globalIcons,
};

export default async function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${GeistSans.variable}`}>
            <body>
                <TRPCReactProvider>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            className: "!bg-violet-950 !text-violet-200",
                        }}
                    />
                    <BaseLayout>{children}</BaseLayout>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
