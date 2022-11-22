import React, { ReactNode } from "react";
import clsx from "clsx";

interface Props {
    children: ReactNode[] | ReactNode;
    className?: string;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <main
            className={clsx(
                "flex flex-col justify-center items-center h-fit w-fit rounded-2xl bg-opacity-40 bg-brand-3 backdrop-blur-sm border border-brand-3 p-2 m-4 container",
                className
            )}>
            {children}
        </main>
    );
};

export default Wrapper;
