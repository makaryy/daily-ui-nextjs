import React from "react";
import Head from "next/head";
import Page from "../../components/Page";
import Wrapper from "../../components/Wrapper";
import InputField from "../../components/InputField";

const Day002 = () => {
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <Page>
                <Wrapper>
                    <form action="" className="md:w-[400px] w-72">
                        <div className="flex flex-col justify-center items-center p-4">
                            <h1 className="text-4xl mb-4 text-center">Credit Card Details</h1>
                            <InputField placeholder="Cardholder Name" required />
                            <InputField
                                required
                                placeholder="Card Number"
                                pattern="[0-9]{16}"
                                invalidMessage="Check if you entered your card number corectly. Card number must be 16 digit long"
                            />
                            <div className="flex justify-center">
                                <InputField
                                    required
                                    placeholder="Expiry date"
                                    className="mx-2 w-28"
                                    pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                                    invalidMessage="Expiry date must be in formay MM/YY"
                                />
                                <InputField
                                    required
                                    placeholder="CVC"
                                    className="mx-2 w-28"
                                    pattern="[0-9]{3}"
                                />
                            </div>
                            <button
                                className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-1 hover:-translate-y-1 hover:shadow-md"
                                type="submit"
                            >
                                Use Credit Card
                            </button>
                        </div>
                    </form>
                </Wrapper>
            </Page>
        </>
    );
};

export default Day002;
