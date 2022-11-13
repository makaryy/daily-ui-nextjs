import React, { ReactNode } from "react";
import clsx from "clsx";
interface Props {
    children: ReactNode[] | ReactNode;
}
const CardTitle = ({ children }: Props) => {
    return <h3 className={clsx("text-3xl text-center m-3")}>{children}</h3>;
};

export default CardTitle;
