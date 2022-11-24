import React from "react";
import Head from "next/head";
import { FaApple, FaGoogle, FaGithub } from "react-icons/fa";
import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";
import Page from "../../components/Page";
import Divider from "../../components/Divider";

const Day001 = () => {
    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <Page>
                <Wrapper>
                    <form action="" className="md:w-[400px] w-72">
                        <div className="flex flex-col justify-center items-center p-4">
                            <h1 className="text-4xl mb-4">Sign Up</h1>
                            <InputField type="email" placeholder="E-mail" className="w-60 m-4" />
                            <InputField
                                type="password"
                                placeholder="Password"
                                className="w-60 m-4"
                            />

                            <button
                                type="submit"
                                className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <Divider />
                    <div className="flex flex-col justify-center items-center m-4">
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md">
                                <FaGoogle />
                                Google
                            </button>
                        </div>
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md">
                                <FaApple />
                                Apple
                            </button>
                        </div>
                        <div>
                            <button className=" w-48 md:w-60 gap-2 flex justify-center items-center m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md">
                                <FaGithub />
                                GitHub
                            </button>
                        </div>
                    </div>
                </Wrapper>
            </Page>
        </>
    );
};

export default Day001;
