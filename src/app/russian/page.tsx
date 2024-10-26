import React from "react";
import Header from "~/components/Base/Header";

const RussianPage = () => {
    return (
        <>
            <Header level="1">Русский</Header>
            <Header level="2">Добро пожаловать!</Header>

            <Header level="3">To Do</Header>
            <ol className="list-disc ps-5">
                <li>
                    Verify some kind of way to allow users to help fill out
                    commonality scores that {`isn't...`} Completely arbitrary
                </li>
                <li>
                    Currenltly saved lists save a previous data state, and need
                    some way of catching up to the back-end database when it
                    acquires further data. (This means old saved lists will
                    completely lack new features, too)
                </li>
            </ol>
            <Header level="3">Changelog</Header>
            <Header level="4">10/26/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Added English meanings for approx 40,000 terms. This is
                    quite substantial. High school vocabulary is allegedly
                    around 20,000.
                </li>
                <li>
                    Began implementing a form that will allow various aspects of
                    the information for given vocab terms to be flagged for
                    verification, and filling in missing data
                </li>
            </ol>

            <Header level="4">10/22/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Added commonality rating to most vocabulary, statistically
                    representing the chance of encountering the term in 1 page
                    of a book, <i>on average</i>. This is converted for now into{" "}
                    {"number of pages needed to encounter"}, such that beginner
                    vocab is near 1-5, and advanced vocab may have scores in the
                    hundreds.
                </li>
                <li>Added sorting by commonality</li>
                <li>(Planned: commonality thresholds/borders)</li>
            </ol>
            <Header level="4">10/17/2024</Header>
            <ol className="list-disc ps-5">
                <li>
                    Changed List UI to hold one visible vocab word to the side
                </li>
                <li>Added list sorting</li>
            </ol>
        </>
    );
};

export default RussianPage;
