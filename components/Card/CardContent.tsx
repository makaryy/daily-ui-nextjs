import clsx from "clsx";
import React, { ReactNode } from "react";
interface Props {
    children: ReactNode[] | ReactNode;
}
const CardContent = ({ children }: Props) => {
    return <p className={clsx("text-xl text-center ")}>{children}</p>;
};

export default CardContent;
