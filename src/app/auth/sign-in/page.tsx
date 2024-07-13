"use client";

import Link from "next/link";
import React, { FC, useState } from "react";
import Header from "~/components/Base/Header";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import CenteredLayout from "~/layouts/Centered";

const SignInPage: FC = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <>
            <Header level="1">Sign In</Header>

            <section>
                <TextInput
                    className="sm:w-96"
                    value={form.email}
                    placeholder="Email"
                    onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                    }
                />
                <TextInput
                    className="sm:w-96"
                    value={form.password}
                    placeholder="Password"
                    onChange={(e) =>
                        setForm((p) => ({ ...p, password: e.target.value }))
                    }
                />
            </section>
            <section>
                <Button className={`ml-auto sm:ml-0`} onClick={() => {}}>
                    Sign In
                </Button>
            </section>

            <span>
                {`Don't have an account? `}
                <Link href={"/auth/sign-up"}>Sign Up</Link>
            </span>
        </>
    );
};

export default SignInPage;
