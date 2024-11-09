"use client";

import React, { useState } from "react";
import Header from "~/components/Base/Header";
import parseSyntax from "~/utils/syntaxParsing/russian";
import AnalysisTextArea from "./_components/AnalysisTextArea";

const WritingWorkshopPage = () => {
    const [text, setText] = useState("");

    return (
        <>
            <Header level="1">Writing Workshop</Header>
        </>
    );
};

export default WritingWorkshopPage;
