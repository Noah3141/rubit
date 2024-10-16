import React from "react";
import LoadingSpinner from "~/components/Base/LoadingSpinner";

const LoadingViewMyListPage = () => {
    return (
        <div className="flex flex-row justify-center">
            <LoadingSpinner />
        </div>
    );
};

export default LoadingViewMyListPage;
