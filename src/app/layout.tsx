import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import BaseLayout from "~/layouts/Base";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Russian Vocabulary List Maker",
    description: "Learn fast and break things",
    icons: [
        { rel: "icon", url: "/favicon.ico" },

        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        { rel: "manifest", url: "/site.webmanifest" },
    ],
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
