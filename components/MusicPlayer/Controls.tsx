import React from "react";
import { MdPause, MdPlayArrow, MdSkipNext, MdSkipPrevious } from "react-icons/md";

interface Props {
    onClick: () => void;
    isPlaying: boolean;
}

const Controls = ({ onClick, isPlaying }: Props) => {
    return (
        <div className=" text-5xl flex justify-around m-2 w-64 md:w-96">
            <button>
                <MdSkipPrevious />
            </button>
            <button className="" onClick={onClick}>
                {isPlaying ? <MdPause /> : <MdPlayArrow />}
            </button>
            <button className="">
                <MdSkipNext />
            </button>
        </div>
    );
};

export default Controls;
