import React from "react";
import Header from "~/components/Base/Header";

const RussianPage = () => {
    return (
        <>
            <Header level="1">Русский</Header>
            <Header level="2">Добро пожаловать!</Header>

            <Header level="3">Changelog</Header>
            <Header level="4">10/17/2024</Header>
            <ol>
                <li>
                    Changed List UI to hold one visible vocab word to the side
                </li>
                <li>Added list sorting</li>
            </ol>
        </>
    );
};

export default RussianPage;
