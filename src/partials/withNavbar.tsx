import React, { type FC } from "react";
import Nav from "~/components/Containers/Nav";
import SignOutButton from "~/components/Auth/SignOutButton";
import { type Session } from "next-auth";

const WithNavbar: FC<{ session: Session | null }> = ({ session }) => {
    return (
        <Nav.Bar>
            <Nav.Item link="/">Home</Nav.Item>
            <Nav.Item link="/russian">Russian</Nav.Item>
            <Nav.Item link="/belarusian">Belarusian</Nav.Item>
            <Nav.Item link="/ukrainian">Ukrainian</Nav.Item>
            <div className="ml-auto flex flex-row">
                {!!session ? (
                    <>
                        <Nav.Item>Account</Nav.Item>
                        <SignOutButton />
                    </>
                ) : (
                    <Nav.Item link="/auth/sign-in">Sign in</Nav.Item>
                )}
            </div>
        </Nav.Bar>
    );
};

export default WithNavbar;
