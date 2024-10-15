"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";
import Header from "~/components/Base/Header";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import CenteredLayout from "~/layouts/Centered";

const SignInPage: FC = () => {
    const router = useRouter();
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
                    type="password"
                    className="sm:w-96"
                    value={form.password}
                    placeholder="Password"
                    onChange={(e) =>
                        setForm((p) => ({ ...p, password: e.target.value }))
                    }
                />
            </section>
            <section>
                <Button
                    className={`ml-auto sm:ml-0`}
                    onClick={async () => {
                        if (form.email == "") {
                            toast.error("Please provide an email!");
                            return;
                        }

                        if (form.password == "") {
                            toast.error("Please provide a password!");
                            return;
                        }

                        const res = await signIn("credentials", {
                            redirect: false,
                            email: form.email,
                            password: form.password,
                        });

                        if (!!res) {
                            if (res.ok) {
                                toast.success("Welcome back!");
                                router.push("/");
                            } else {
                                toast.error(
                                    res.error ?? "Something went wrong!",
                                );
                            }
                        }
                    }}
                >
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
