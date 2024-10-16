import React from "react";
import LoadingSpinner from "~/components/Base/LoadingSpinner";

const LoadingMyLists = () => {
    return (
        <div className="flex flex-row justify-center">
            <LoadingSpinner />
        </div>
    );
};

export default LoadingMyLists;
