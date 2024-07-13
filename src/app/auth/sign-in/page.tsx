import React, { FC } from "react";
import Header from "~/components/Base/Header";
import CenteredLayout from "~/layouts/Centered";

const SignInPage: FC = async () => {
    return (
        <CenteredLayout>
            <Header level="1">Sign In</Header>
        </CenteredLayout>
    );
};

export default SignInPage;
