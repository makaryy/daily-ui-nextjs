import React, { ReactNode } from "react";
import clsx from "clsx";
import CardContent from "./CardContent";

interface Props {
    children: ReactNode[] | ReactNode;
}

const Card = ({ children }: Props) => {
    return (
        <div className={clsx("flex flex-col justify-between items-center h-full p-4 mx-4 bg-brand-7 bg-opacity-80 z-20 rounded-sm")}>
            <div className="flex flex-col justify-between items-center p-4 mx-4 h-full  hover:scale-95 transition-all overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default Card;
