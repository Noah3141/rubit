import React from "react";
import LoadingSpinner from "~/components/Base/LoadingSpinner";

const LoadingVerbsPage = () => {
    return (
        <div className="-z-10 flex flex-row justify-center">
            <LoadingSpinner />
        </div>
    );
};

export default LoadingVerbsPage;
