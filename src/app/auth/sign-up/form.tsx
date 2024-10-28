"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { type FC, useState } from "react";
import toast from "react-hot-toast";
import Header from "~/components/Base/Header";
import Button from "~/components/Common/Button";
import TextInput from "~/components/Common/TextInput";
import { api } from "~/trpc/react";
import { signUpForm } from "~/types/auth";
import { RiErrorWarningFill } from "react-icons/ri";

const SignUpForm: FC = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const signUp = api.auth.signUp.useMutation({
        onMutate: () => {
            toast.loading("Great! Signing you up...", { id: "signUp" });
        },
        onError: (e) => {
            toast.error(e.message, {
                id: "signUp",
                icon: (
                    <RiErrorWarningFill className="!size-6 !fill-violet-700" />
                ),
                duration: 5_000,
            });
        },
        onSuccess: async () => {
            router.refresh();
            router.push("/");
            const res = await signIn("credentials", {
                email: form.email,
                password: form.password,
                redirect: false,
            });
            if (res?.ok) {
                toast.success("Welcome!", { id: "signUp" });
                router.push("/");
            } else if (res?.error) {
                toast.error(
                    "Your account has been created, but we had trouble signing you in!",
                    {
                        id: "signUp",
                        icon: (
                            <RiErrorWarningFill className="!size-6 !fill-violet-700" />
                        ),
                    },
                );
            }
        },
    });

    return (
        <>
            <Header level="1">Sign Up</Header>

            <section>
                <TextInput
                    className="sm:w-96"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                    }
                />
                <TextInput
                    className="sm:w-96"
                    placeholder="Password"
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                        setForm((p) => ({ ...p, password: e.target.value }))
                    }
                />
                <TextInput
                    className="sm:w-96"
                    type="password"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                        setForm((p) => ({
                            ...p,
                            confirmPassword: e.target.value,
                        }))
                    }
                />
            </section>
            <section>
                <Button
                    className="ml-auto sm:ml-0"
                    onClick={() => {
                        // validate
                        const input = signUpForm.safeParse(form);

                        if (input.success) {
                            if (
                                input.data.password ===
                                input.data.confirmPassword
                            ) {
                                signUp.mutate(input.data);
                            } else {
                                toast.error("Passwords must match!");
                            }
                        } else {
                            toast.error(
                                input.error.errors.at(0)?.message ??
                                    "Something went wrong",
                            );
                        }
                    }}
                >
                    Sign Up
                </Button>
            </section>
        </>
    );
};

export default SignUpForm;
