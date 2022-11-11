import React, { EventHandler, FocusEventHandler, useRef, useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";
import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";

const Day001 = () => {
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        if (e.target.type === "email") {
            setIsEmailFocused(true);
        }
        if (e.target.type === "password") {
            setIsPasswordFocused(true);
        }

        e.target.placeholder = "";
    };
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        if (e.target.type === "email") {
            setIsEmailFocused(false);
            e.target.placeholder = "E-mail";
        }
        if (e.target.type === "password") {
            setIsPasswordFocused(false);
            e.target.placeholder = "Password";
        }
    };
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div
                className={`flex flex-col justify-center items-center w-screen min-h-screen text-[#efedff] bg-bg bg-cover bg-center`}
            >
                <Wrapper>
                    <form action="" className="md:w-[400px] w-72">
                        <div className="flex flex-col justify-center items-center p-4">
                            <h1 className="text-4xl mb-4">Sign Up</h1>
                            <InputField type="email" placeholder="E-mail" />
                            <InputField type="password" placeholder="Password" />

                            <button
                                type="submit"
                                className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <span className="w-11/12 h-[1px] m-2 bg-brand-4"></span>
                    <div className="flex flex-col justify-center items-center m-4">
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <GoogleIcon />
                                Google
                            </button>
                        </div>
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <AppleIcon />
                                Apple
                            </button>
                        </div>
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <GitHubIcon />
                                GitHub
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default Day001;
