import React, { FC } from "react";
import { getServerAuthSession } from "~/server/auth";
import { signIn, signOut } from "next-auth/react";
import Nav from "~/components/Containers/Nav";

const WithNavbar: FC = async () => {
    const session = await getServerAuthSession();

    return (
        <Nav.Bar>
            <Nav.Item link="/">Home</Nav.Item>
            <Nav.Item link="/language/russian">Russian</Nav.Item>
            <Nav.Item link="/language/belarusian">Belarusian</Nav.Item>
            <Nav.Item link="/language/ukrainian">Ukrainian</Nav.Item>
            {!!session ? (
                <>
                    <Nav.Item>Account</Nav.Item>
                    <Nav.Item
                        onClick={async () => {
                            await signOut();
                        }}
                    >
                        Sign out
                    </Nav.Item>
                </>
            ) : (
                <Nav.Item link="/auth/sign-in">Sign in</Nav.Item>
            )}
        </Nav.Bar>
    );
};

export default WithNavbar;
