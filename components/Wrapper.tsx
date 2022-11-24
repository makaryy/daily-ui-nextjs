import React, { ReactNode } from "react";
import clsx from "clsx";

interface Props {
    children?: ReactNode[] | ReactNode;
    className?: string;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div
            className={clsx(
                className,
                "flex flex-col justify-center items-center rounded-2xl bg-opacity-40 bg-brand-3 backdrop-blur-sm border border-brand-3"
            )}
        >
            {children}
        </div>
    );
};

export default Wrapper;
