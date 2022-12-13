import clsx from "clsx";
import React, { useState } from "react";
import Page from "../../components/Page";
import Wrapper from "../../components/Wrapper";
import { MdErrorOutline, MdWarningAmber, MdTaskAlt } from "react-icons/md";

const Day011 = () => {
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    return (
        <Page>
            <Wrapper className="bg-brand-2 w-96 h-96">
                <div className="grid grid-cols-2 grid-flow-col grid-rows-3">
                    <button
                        onClick={() => {
                            setIsSuccessVisible((prev) => !prev);
                        }}
                        className="border-4 text-brand-4 font-bold bg-brand-4 bg-opacity-30 border-brand-4 rounded-md p-2 m-4 hover:bg-opacity-50 hover:-translate-y-1 transition-transform active:translate-y-0 hover:shadow-[4px_4px] shadow-brand-4">
                        Toggle success
                    </button>
                    <button
                        onClick={() => {
                            setIsErrorVisible((prev) => !prev);
                        }}
                        className="border-4 text-brand-4 font-bold bg-brand-4 bg-opacity-30 border-brand-4 rounded-md p-2 m-4 hover:bg-opacity-50 hover:-translate-y-1 transition-transform active:translate-y-0 hover:shadow-[4px_4px] shadow-brand-4">
                        Toggle error
                    </button>
                    <button
                        onClick={() => {
                            setIsWarningVisible((prev) => !prev);
                        }}
                        className="border-4 text-brand-4 font-bold bg-brand-4 bg-opacity-30 border-brand-4 rounded-md p-2 m-4 hover:bg-opacity-50 hover:-translate-y-1 transition-transform active:translate-y-0 hover:shadow-[4px_4px] shadow-brand-4">
                        Toggle warning
                    </button>

                    <div
                        className={clsx(
                            "flex justify-center gap-4 text-lg items-center border-4 text-green-900 font-bold bg-green-800 bg-opacity-50 border-green-800 rounded-md p-2 m-4  shadow-[4px_4px] shadow-green-800 text-center transition-all",
                            isSuccessVisible ? "opacity-100" : "opacity-0"
                        )}>
                        <MdTaskAlt className="text-2xl" />
                        Success
                    </div>
                    <div
                        className={clsx(
                            "flex justify-center gap-4 text-lg items-center border-4 text-red-900 font-bold bg-red-800 bg-opacity-50 border-red-800 rounded-md p-2 m-4  shadow-[4px_4px] shadow-red-800 text-center transition-all",
                            isErrorVisible ? "opacity-100" : "opacity-0"
                        )}>
                        <MdErrorOutline className="text-2xl" />
                        Error
                    </div>
                    <div
                        className={clsx(
                            "flex justify-center gap-4 text-lg items-center border-4 text-yellow-900 font-bold bg-yellow-700 bg-opacity-50 border-yellow-700 rounded-md p-2 m-4  shadow-[4px_4px] shadow-yellow-700 text-center transition-all",
                            isWarningVisible ? "opacity-100" : "opacity-0"
                        )}>
                        <MdWarningAmber className="text-2xl" />
                        Warning
                    </div>
                </div>
            </Wrapper>
        </Page>
    );
};

export default Day011;
