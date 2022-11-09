import React, { EventHandler, FocusEventHandler, useRef, useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import GitHubIcon from "@mui/icons-material/GitHub";

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
                <main className="flex flex-col justify-center items-center md:w-[400px] w-72 rounded-2xl bg-opacity-20 bg-[#efedff33] backdrop-blur-sm border border-[#efedff33]">
                    <form action="" className="w-full">
                        <div className="flex flex-col justify-center items-center p-4">
                            <h1 className="text-4xl mb-4">Sign Up</h1>
                            <div className="relative">
                                <span
                                    className={clsx(
                                        "absolute opacity-0 px-1 text-sm transition-all z-20 top-7 left-7 pointer-events-none",
                                        isEmailFocused && "opacity-100 top-0"
                                    )}
                                >
                                    E-mail
                                </span>
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    className="p-3 m-4 rounded-md bg-brand-1 transition-transform outline-0 w-60 focus:shadow-md focus:-translate-y-1"
                                />
                            </div>
                            <div className="relative">
                                <span
                                    className={clsx(
                                        "absolute opacity-0 px-1 text-sm transition-all z-20 top-7 left-7 pointer-events-none",
                                        isPasswordFocused && "opacity-100 top-0"
                                    )}
                                >
                                    Password
                                </span>
                                <input
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    type="password"
                                    placeholder="Password"
                                    className="p-3 m-4 rounded-md bg-brand-1 transition-transform outline-0 w-60 focus:shadow-md focus:-translate-y-1"
                                />
                            </div>
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
                            <button className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <div className="w-48 md:w-60 gap-2 flex justify-center items-center">
                                    <GoogleIcon />
                                    Google
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <div className="w-48 md:w-60 gap-2 flex justify-center items-center">
                                    <AppleIcon />
                                    Apple
                                </div>
                            </button>
                        </div>
                        <div>
                            <button className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md">
                                <div className="w-48 md:w-60 gap-2 flex justify-center items-center">
                                    <GitHubIcon />
                                    GitHub
                                </div>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Day001;
