import React, { ReactNode } from "react";

interface Props {
    children: ReactNode[] | ReactNode;
}

const Wrapper = ({ children }: Props) => {
    return (
        <main className="flex flex-col justify-center items-center h-fit w-fit rounded-2xl bg-opacity-40 bg-brand-4 backdrop-blur-sm border border-brand-4 p-2 m-2">
            {children}
        </main>
    );
};

export default Wrapper;
