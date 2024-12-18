import React, { useState } from "react";
import Header from "~/components/Base/Header";
import AnalysisTextArea from "./_components/AnalysisTextArea";
import { RouterOutputs } from "~/trpc/react";

const WritingWorkshopPage = () => {
    return (
        <>
            <Header level="1">Writing Workshop</Header>
            <AnalysisTextArea />
        </>
    );
};

export default WritingWorkshopPage;
