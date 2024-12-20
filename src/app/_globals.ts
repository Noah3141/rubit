import { type Metadata } from "next";

export const globalIcons: Metadata["icons"] = [
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
];
