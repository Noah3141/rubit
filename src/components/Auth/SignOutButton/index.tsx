"use client";
import { signOut } from "next-auth/react";
import React from "react";
import Nav from "~/components/Containers/Nav";

const SignOutButton = () => {
    return (
        <Nav.Item
            onClick={async () => {
                await signOut();
            }}
        >
            Sign out
        </Nav.Item>
    );
};

export default SignOutButton;
