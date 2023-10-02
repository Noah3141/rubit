import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Header from "~/components/header";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "~/components/footer";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider session={session}>
            <Header />
            <Toaster position="bottom-left" />
            <Component {...pageProps} />
            <Footer />
        </SessionProvider>
    );
};

export default api.withTRPC(MyApp);
