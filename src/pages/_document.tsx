import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html className="min-h-screen">
                <Head></Head>
                <body className="relative min-h-screen w-full flex-col bg-stone-950 text-stone-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
