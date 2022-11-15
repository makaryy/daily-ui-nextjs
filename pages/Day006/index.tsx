import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Wrapper from "../../components/Wrapper";
import Page from "../../components/Page";

interface ContactDetailsProps {
    name: string;
    value: string;
}

function ContactDetails({ name, value }: ContactDetailsProps) {
    return (
        <div className="flex flex-col mx-2 mb-2">
            <h3 className="font-semibold mb-1 text-md">{name}</h3>
            <p className="text-sm ">{value}</p>
        </div>
    );
}

const Day006 = () => {
    const [arePicturesExpanded, setArePicturesExpanded] = useState(false);
    const handleShow = () => {
        setArePicturesExpanded(true);
    };
    const handleHide = () => {
        setArePicturesExpanded(false);
    };

    const arr = Array(15).fill("");
    return (
        <>
            <Head>
                <title>User Profile</title>
            </Head>
            <Page>
                <Wrapper>
                    <div className="flex">
                        <div className="flex flex-col max-w-xs min-w-fit items-stretch gap-2 m-4">
                            <Image src="/profile.svg" width={120} height={120} alt="Profile picture" className="" />
                            <ContactDetails name="Date of birth" value="02.02.2000"></ContactDetails>
                            <ContactDetails name="E-mail address" value="example@gmail.com"></ContactDetails>
                            <ContactDetails name="Phone number" value="+48666123456"></ContactDetails>
                            <ContactDetails name="Facebook" value="/examplename"></ContactDetails>
                            <ContactDetails name="Twitter" value="/examplename"></ContactDetails>
                            <ContactDetails name="Instagram" value="/examplename"></ContactDetails>
                            <ContactDetails name="GitHub" value="/examplename"></ContactDetails>
                            <ContactDetails name="LinkedIn" value="/examplename"></ContactDetails>
                        </div>
                        <div className="m-4 flex flex-col items-center min-w-[540px]">
                            <h2 className="text-3xl mx-3 mb-3">John Kovalski</h2>
                            <h3 className="text-xl mb-2">CEO of Random Company </h3>
                            <div className="m-4 w-full">
                                <p className="self-start mb-2 text-lg border-b">Pictures</p>
                                <div className="grid grid-cols-4 gap-2 items-stretch justify-items-center">
                                    {arePicturesExpanded && (
                                        <>
                                            {arr.map((el, i) => {
                                                return <Image src="/trip.png" key={i} width={100} height={100} alt={`picture${i}`} />;
                                            })}

                                            <div
                                                onClick={handleHide}
                                                className="w-[100px] bg-black bg-opacity-70 flex items-center justify-center cursor-pointer">
                                                Show less
                                            </div>
                                        </>
                                    )}
                                    {!arePicturesExpanded && (
                                        <>
                                            {arr.slice(0, 7).map((el, i) => {
                                                return <Image src="/trip.png" key={i} width={100} height={100} alt={`picture${i}`} />;
                                            })}

                                            <div
                                                onClick={handleShow}
                                                className="w-[100px] bg-black bg-opacity-70 flex items-center justify-center cursor-pointer">
                                                Show more
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="m-4 w-full">
                                <p className="self-start mb-2 text-lg border-b">Technologies</p>
                                <div className="grid grid-cols-2 items-stretch gap-2">
                                    <div className="bg-black bg-opacity-60 p-2">HTML</div>
                                    <div className="bg-black bg-opacity-60 p-2">CSS</div>
                                    <div className="bg-black bg-opacity-60 p-2">JavaScript</div>
                                    <div className="bg-black bg-opacity-60 p-2">TypeScript</div>
                                    <div className="bg-black bg-opacity-60 p-2">React</div>
                                </div>
                            </div>
                            <div className="m-4 w-full">
                                <p className="self-start mb-2 text-lg border-b">Another section</p>
                                <div className="flex flex-col items-stretch gap-2">
                                    <div className="bg-black bg-opacity-60 p-2">First element of section</div>
                                    <div className="bg-black bg-opacity-60 p-2">Second element of section</div>
                                    <div className="bg-black bg-opacity-60 p-2">Third element of section</div>
                                    <div className="bg-black bg-opacity-60 p-2">Fourth element of section</div>
                                    <div className="bg-black bg-opacity-60 p-2">Fifth element of section</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Page>
        </>
    );
};

export default Day006;
