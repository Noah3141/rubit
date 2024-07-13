import { redirect } from "next/navigation";
import React from "react";
import { getServerAuthSession } from "~/server/auth";
import SignUpForm from "./form";

const SignUpPage = async () => {
    const session = await getServerAuthSession();

    if (session?.user) {
        redirect("/");
    }

    return (
        <>
            <SignUpForm />
        </>
    );
};

export default SignUpPage;
