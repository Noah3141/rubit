"use client";

import { type Session } from "next-auth";
import { usePathname } from "next/navigation";
import React, { type FC } from "react";
import LanguageNav from "~/components/Containers/LanguageNav";

const WithLanguageNav: FC<{ session: Session | null }> = ({ session }) => {
    const pathname = usePathname();
    const language = pathname.split("/").at(1)!;

    switch (language) {
        case "russian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    {!!session && (
                        <>
                            <LanguageNav.Item link={`/${language}/new-list`}>
                                Make New List
                            </LanguageNav.Item>
                            <LanguageNav.Item link={`/${language}/my-lists`}>
                                My Lists
                            </LanguageNav.Item>
                            <LanguageNav.Item
                                link={`/${language}/writing-workshop`}
                            >
                                Writing Workshop
                            </LanguageNav.Item>
                        </>
                    )}
                </LanguageNav.Bar>
            );

        case "belarusian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/${language}/new-list`}>
                        Make New List
                    </LanguageNav.Item>
                    {!!session && (
                        <LanguageNav.Item link={`/${language}/my-lists`}>
                            My Lists
                        </LanguageNav.Item>
                    )}
                </LanguageNav.Bar>
            );
        case "ukrainian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/${language}/new-list`}>
                        Make New List
                    </LanguageNav.Item>
                    {!!session && (
                        <LanguageNav.Item link={`/${language}/my-lists`}>
                            My Lists
                        </LanguageNav.Item>
                    )}
                </LanguageNav.Bar>
            );
    }
};

export default WithLanguageNav;
