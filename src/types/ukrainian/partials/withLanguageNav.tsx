"use client";

import { usePathname } from "next/navigation";
import React, { type FC } from "react";
import LanguageNav from "~/components/Containers/LanguageNav";
import { Language } from "~/types/language";
import { toTitleCase } from "~/utils/strings";

const WithLanguageNav: FC = () => {
    const pathname = usePathname();
    const language = pathname.split("/").at(2)!;

    switch (language) {
        case "russian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );

        case "belarusian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );
        case "ukrainian":
            return (
                <LanguageNav.Bar language={language}>
                    <LanguageNav.Item link={`/language/${language}/list`}>
                        Make New List
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/verbs`}>
                        Verbs
                    </LanguageNav.Item>
                    <LanguageNav.Item link={`/language/${language}/trees`}>
                        Trees
                    </LanguageNav.Item>
                </LanguageNav.Bar>
            );
    }
};

export default WithLanguageNav;
