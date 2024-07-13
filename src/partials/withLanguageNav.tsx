import React, { FC } from "react";
import LanguageNav from "~/components/Containers/LanguageNav";

const WithLanguageNav: FC = async () => {
    return (
        <LanguageNav.Bar>
            <LanguageNav.Item>Generate</LanguageNav.Item>
            <LanguageNav.Item>Verbs</LanguageNav.Item>
            <LanguageNav.Item>Trees</LanguageNav.Item>
        </LanguageNav.Bar>
    );
};

export default WithLanguageNav;
