"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Nav from "~/components/Containers/Nav";

const SignOutButton = () => {
    const router = useRouter();
    return (
        <Nav.Item
            onClick={async () => {
                await signOut();
                router.refresh();
            }}
        >
            Sign out
        </Nav.Item>
    );
};

export default SignOutButton;
