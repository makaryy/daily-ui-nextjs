import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>Daily UI by Makary</title>
            </Head>
            <div className="bg-bg bg-cover bg-center ">
                <div className="container mx-auto min-h-screen flex flex-col justify-center items-center text-brand-text">
                    <h1 className="text-4xl text-center">Daily UI components</h1>
                    <h3>Components gathered in one place from Daily UI challenge</h3>
                    <main className="backdrop-blur-sm bg-brand-4 bg-opacity-20 w-[400px] h-[400px] rounded-xl border border-opacity-5 border-brand-4"></main>
                </div>
            </div>
        </>
    );
}
