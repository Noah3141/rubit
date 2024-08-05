"use client";

import { usePathname } from "next/navigation";
import React, { FC } from "react";
import LanguageNav from "~/components/Containers/LanguageNav";

const WithLanguageNav: FC = () => {
    const pathname = usePathname();
    const language = pathname.split("/").at(2)!;

    switch (language) {
        case "russian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/new-list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/my-lists`}>
                        My Lists
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );

        case "belarusian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/new-list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/my-lists`}>
                        My Lists
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );
        case "ukrainian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/new-list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/my-lists`}>
                        My Lists
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );
    }
};

export default WithLanguageNav;
