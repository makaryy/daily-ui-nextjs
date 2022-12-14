import Link from "next/link";
import React from "react";
import Card from "./Card/Card";
import CardContent from "./Card/CardContent";
import CardFooter from "./Card/CardFooter";
import CardTitle from "./Card/CardTitle";

const Slider = () => {
    const data = [
        { day: 1, challenge: "Sign Up Form", footer: "Click here to see" },
        { day: 2, challenge: "Credit Card Details component", footer: "Click here to see" },
        { day: 3, challenge: "Landing Page", footer: "You are here :D", disableLink: true },
        { day: 5, challenge: "App Icon", footer: "My focus is on development not design, skipped this one", disableLink: true },
        { day: 6, challenge: "User Profile", footer: "Click here to see" },
        { day: 8, challenge: "404 Page", footer: "Click here to see" },
        { day: 11, challenge: "Alerts", footer: "Click here to see" },
        { day: 12, challenge: "E-commerce item", footer: "Click here to see" }
    ];
    return (
        <div className="w-[300px] md:w-[720px] lg:w-[960px] xl-[1200px] 2xl:w-[1400px] flex items-center overflow-x-auto gap-4 scrollbar-thin scrollbar-track-brand-7 scrollbar-thumb-brand-1 scrollbar-thumb-rounded-md scrollbar-track-rounded-md py-4">
            {data.map((el, i) => {
                return (
                    <div key={el.day} className="h-[300px] min-w-[300px]">
                        <Card>
                            <CardTitle>Day {el.day}</CardTitle>
                            <CardContent>
                                Challenge was to make <span className="underline underline-offset-2">{el.challenge}</span>
                            </CardContent>
                            <CardFooter>
                                {el.disableLink ? (
                                    <span>{el.footer}</span>
                                ) : (
                                    <Link
                                        className="hover:underline"
                                        href={el.day < 10 ? `Day00${el.day}` : el.day < 100 ? `Day0${el.day}'` : `Day${el.day}`}>
                                        {el.footer}
                                    </Link>
                                )}
                            </CardFooter>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;
