import React from "react";
import LoadingSpinner from "~/components/Common/LoadingSpinner";
import CenteredLayout from "~/layouts/Centered";

const MainLoadingPage = () => {
    return (
        <CenteredLayout>
            <LoadingSpinner fill />
        </CenteredLayout>
    );
};

export default MainLoadingPage;
