import clsx from "clsx";
import React, { ReactNode } from "react";
interface Props {
    children: ReactNode[] | ReactNode;
}
const CardFooter = ({ children }: Props) => {
    return <div className={clsx("flex justify-center items-center m-4 text-sm")}>{children}</div>;
};

export default CardFooter;
