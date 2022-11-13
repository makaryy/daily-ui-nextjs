import Head from "next/head";
import Image from "next/image";
import Divider from "../components/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as Scroll } from "react-scroll";
import Slider from "../components/Slider";
import clsx from "clsx";

export default function Home() {
    return (
        <>
            <Head>
                <title>Daily UI by Makary</title>
            </Head>
            <div className="flex flex-col justify-around items-center w-full min-h-screen bg-landing bg-cover bg-top text-brand-text scroll-smooth">
                <span className="h-32"></span>
                <main className={clsx(" flex flex-col lg:flex-row animate-zoom-in gap-4 m-8")}>
                    <Image src="/galaxy.svg" alt="Welcome" width={480} height={720} className=" opacity-90 "></Image>
                    <div className=" rounded-full flex justify-center items-center bg-brand-7 bg-opacity-30 shadow-landing w-[320px] lg:w-[480px] ">
                        <div className="bg-clip-text text-transparent bg-gradient-to-r from-brand-1 to-brand-text">
                            <h1 className="text-6xl text-center ">Daily UI components</h1>
                            <Divider></Divider>
                            <h3 className="text-3xl text-center">Components gathered in one place from Daily UI challenge</h3>
                        </div>
                    </div>
                </main>
                <Scroll to="slider" smooth={true}>
                    <button className="hover:bg-white hover:bg-opacity-20 rounded-full transition-all active:bg-opacity-30 m-8">
                        <KeyboardArrowDownIcon className="w-24 h-24 border-2 rounded-full" />
                    </button>
                </Scroll>
                <div id="slider" className="h-screen flex items-center">
                    <Slider />
                </div>
            </div>
        </>
    );
}
