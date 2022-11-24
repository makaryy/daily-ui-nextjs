import React, { ChangeEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import Page from "../../components/Page";
import Wrapper from "../../components/Wrapper";
import tools01Img from "../../public/tools01.jpg";
import tools02Img from "../../public/tools02.jpg";
import tools03Img from "../../public/tools03.jpg";
import tools04Img from "../../public/tools04.jpg";
import tools05Img from "../../public/tools05.jpg";
import { MdStar } from "react-icons/md";
import InputField from "../../components/InputField";
import { useState } from "react";

const Day012 = () => {
    const [amount, setAmount] = useState("1");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleIncrease = () => {
        if (amount === "999") return;
        setAmount((prev) => (Number(prev) + 1).toString());
    };
    const handleDecrease = () => {
        if (amount === "1") return;
        setAmount((prev) => (Number(prev) - 1).toString());
    };

    return (
        <>
            <Head>
                <title>Shop Item</title>
            </Head>
            <Page>
                <div className="grid grid-cols-3 container gap-4 m-4">
                    <Wrapper className="col-span-2 p-4">
                        <div className="self-start mb-4">
                            <h1 className=" text-2xl font-bold mb-2">
                                Tools - everything the handyman needs
                            </h1>
                            <p className="inline text-sm mb-1">
                                5,00{" "}
                                <span className="text-yellow-500 text-lg">
                                    <MdStar className="inline" />
                                    <MdStar className="inline" />
                                    <MdStar className="inline" />
                                    <MdStar className="inline" />
                                    <MdStar className="inline" />
                                </span>{" "}
                                67 reviews, 16 comments
                            </p>
                        </div>
                        <div>
                            <div className="bg-black bg-opacity-30 m-2 rounded-md">
                                <Image
                                    src={tools01Img}
                                    alt="Tools"
                                    className="  aspect-square w-full max-w-lg min-w-[256px] object-contain object-center"
                                />
                            </div>
                            <div className="flex w-full max-w-lg min-w-[256px] m-2 gap-2 overflow-x-auto">
                                <Image
                                    src={tools02Img}
                                    alt="Tools"
                                    className="aspect-square min-w-[25%] object-cover object-center rounded-md"
                                />
                                <Image
                                    src={tools03Img}
                                    alt="Tools"
                                    className="aspect-square min-w-[25%] object-cover object-center rounded-md"
                                />
                                <Image
                                    src={tools04Img}
                                    alt="Tools"
                                    className="aspect-square min-w-[25%] object-cover object-center rounded-md"
                                />
                                <Image
                                    src={tools05Img}
                                    alt="Tools"
                                    className="aspect-square min-w-[25%] object-cover object-center rounded-md"
                                />
                            </div>
                        </div>
                    </Wrapper>
                    <Wrapper className="h-fit p-4">
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold mb-2">
                                Set of tools - hammers, screwdrivers, saws, wrenches - everything in
                                one set{" "}
                            </h2>
                            <h3 className="text-4xl font-thin text-center">100,00€</h3>
                            <div className="flex justify-center">
                                <button
                                    onClick={handleDecrease}
                                    className="bg-brand-7 border-2 border-brand-text my-4 w-12 rounded-md transition-transform hover:-translate-y-1 hover:shadow-md"
                                >
                                    -
                                </button>
                                <InputField
                                    type="number"
                                    value={amount}
                                    max="999"
                                    min="1"
                                    onChange={handleChange}
                                    className="my-4 w-24 border-brand-text border-2 rounded-md text-2xl"
                                />
                                <button
                                    onClick={handleIncrease}
                                    className="bg-brand-7 border-2 border-brand-text my-4 w-12 rounded-md transition-transform hover:-translate-y-1 hover:shadow-md"
                                >
                                    +
                                </button>
                            </div>
                            <button className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md">
                                Add to cart
                            </button>
                            <button className="m-4 p-3 rounded-md pointer transition-transform outline-0 bg-brand-7 hover:-translate-y-1 hover:shadow-md">
                                Buy Now
                            </button>
                        </div>
                    </Wrapper>
                    <Wrapper className="col-span-3 p-4">
                        <h4 className="font-medium text-2xl self-start mb-2">Description</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
                            eaque molestiae quisquam ducimus debitis accusamus veritatis cupiditate
                            nesciunt cumque tempora, corporis necessitatibus similique saepe
                            quibusdam nostrum. Fugiat voluptate nobis neque? Rem eligendi sint
                            itaque, aut id corporis ratione ut vitae quas voluptates! Minima
                            perspiciatis cum quas repellendus eaque ad sint, sequi eligendi
                            praesentium maxime laboriosam laborum excepturi doloremque magni
                            perferendis. Aut nihil perferendis quisquam autem adipisci aspernatur
                            repudiandae architecto ipsum fugit vero voluptatem quam veniam
                            temporibus saepe, tempore quae quos id recusandae, consequatur animi sed
                            nobis officiis? Amet, iure autem. Totam ut error, ipsam esse maxime ad
                            ullam officia cupiditate. Esse excepturi voluptatem eaque cum, officiis
                            numquam nulla quis incidunt natus provident? Sequi eaque velit minima
                            dolore quasi placeat perspiciatis! Assumenda debitis consequatur fugit
                            recusandae adipisci, modi dolorem, ad ratione quo obcaecati vitae, illo
                            officiis corporis rerum molestiae. Earum dolores eaque suscipit ullam
                            officia exercitationem in voluptate illum amet magni. Eum, delectus,
                            atque voluptatibus alias aperiam nisi et labore ullam eveniet earum
                            recusandae dignissimos dolores reprehenderit illo iure ipsum corporis
                            commodi adipisci cum, saepe hic accusantium. Cupiditate adipisci nostrum
                            ex. Sunt velit nam dicta, id ab quae libero est saepe! Quibusdam
                            delectus veniam quo natus aut, deleniti doloribus vero sed tenetur
                            doloremque animi iusto explicabo non, dicta neque numquam aperiam. Unde
                            cumque numquam ipsum consequatur alias optio in. Amet optio expedita est
                            animi odio, vero, dolore totam assumenda tenetur atque commodi ipsa iure
                            neque excepturi mollitia delectus corporis necessitatibus corrupti?
                            Eligendi enim ratione quibusdam distinctio, numquam deleniti quidem,
                            possimus soluta, doloremque iste quasi repellendus commodi? Dolore, odio
                            est obcaecati libero sint laboriosam sequi hic. Mollitia distinctio
                            rerum molestias ratione quis! Reprehenderit deserunt, placeat, nesciunt
                            similique blanditiis facere, cumque delectus incidunt accusamus culpa
                            provident sit sed autem. Harum eos debitis dolores mollitia recusandae
                            hic necessitatibus suscipit! Iure culpa vel quaerat officiis.
                        </p>
                    </Wrapper>
                </div>
            </Page>
        </>
    );
};

export default Day012;
