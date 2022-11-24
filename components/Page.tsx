import React, { ReactNode } from "react";

interface Props {
    children: ReactNode[] | ReactNode;
}

const Page = ({ children }: Props) => {
    return (
        <div
            className={`flex flex-col justify-center items-center w-full min-h-screen text-brand-text bg-bg bg-cover bg-center`}
        >
            {children}
        </div>
    );
};

export default Page;
