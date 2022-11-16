import React from "react";
import Page from "../components/Page";
import Wrapper from "../components/Wrapper";
import Link from "next/link";

const Error404 = () => {
    return (
        <Page>
            <Wrapper className="h-[540px] md:w-[420px]">
                <h3 className="text-3xl mb-4">Page Not Found</h3>
                <Link href="/" className="hover:underline underline-offset-2">
                    Return to Home Page
                </Link>
            </Wrapper>
        </Page>
    );
};

export default Error404;
