import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html className="min-h-screen">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="relative min-h-screen w-full flex-col bg-stone-950 text-stone-100">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
