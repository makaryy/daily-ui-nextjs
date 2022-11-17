import React, { useRef, useLayoutEffect, useState, SyntheticEvent } from "react";
import Page from "../../components/Page";
import Wrapper from "../../components/Wrapper";
import { MdLoop, MdSkipNext, MdSkipPrevious, MdRepeat, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff } from "react-icons/md";
import Image from "next/image";

const Day009 = () => {
    const [timer, setTimer] = useState("00:00");
    const [seeker, setSeeker] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [isVolumeBarVisible, setIsVolumeBarVisible] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useLayoutEffect(() => {
        audioRef.current && setDuration(audioRef.current.duration);
    });
    const makeDurationString = () => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration - minutes * 60);
        const durationString = str_pad_left(minutes, "0", 1) + ":" + str_pad_left(seconds, "0", 2);
        return durationString;
    };

    const handleSeeker = (e: SyntheticEvent<HTMLInputElement>) => {
        setSeeker(Number((e.target as HTMLInputElement).value));
        audioRef.current!.currentTime = Number((e.target as HTMLInputElement).value);
    };

    const handlePlay = (e: SyntheticEvent<HTMLButtonElement>) => {
        if (audioRef.current) {
            if (!isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            }
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement>) => {
        const target = e.target as HTMLAudioElement;
        setSeeker((prev) => prev + (target.currentTime - prev));
        timeUpdate(e);
    };

    const str_pad_left = (string: number, pad: string, length: number) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };

    const timeUpdate = (event: SyntheticEvent<HTMLAudioElement>) => {
        const target = event.target as HTMLAudioElement;
        const minutes = Math.floor(target.currentTime / 60);
        const seconds = Math.floor(target.currentTime - minutes * 60);
        const currentTime = str_pad_left(minutes, "0", 1) + ":" + str_pad_left(seconds, "0", 2);
        setTimer(currentTime);
    };
    return (
        <Page>
            <Wrapper className="text-brand-text">
                <Image src="/rick-astley.jpg" width={256} height={256} alt="rickyyyy" className="m-4 rounded-md" />
                <div className=" text-5xl flex justify-around m-2 w-64">
                    <button>
                        <MdSkipPrevious />
                    </button>
                    <button className="" onClick={handlePlay}>
                        {isPlaying ? <MdPause /> : <MdPlayArrow />}
                    </button>
                    <button className="">
                        <MdSkipNext />
                    </button>
                </div>

                <div className="flex flex-col justify-center m-4">
                    <div className="flex justify-between">
                        <p>{timer}</p>
                        <p>{makeDurationString()}</p>
                    </div>
                    <input type="range" min={0} max={duration} value={seeker} className="accent-brand-text  outline-0  w-64" onInput={handleSeeker} />
                </div>
                <div className=" text-3xl flex justify-around m-2 w-64">
                    <button>
                        <MdLoop />
                    </button>
                    <button>
                        <MdRepeat />
                    </button>
                    <div className="relative" onMouseEnter={() => setIsVolumeBarVisible(true)} onMouseLeave={() => setIsVolumeBarVisible(false)}>
                        {/* TODO: make it pretty and functional */}
                        {isVolumeBarVisible && (
                            <input
                                type="range"
                                className="accent-brand-text outline-0 h-12 absolute -translate-x-12 -translate-y-8 slider-vertical bg-black"
                                // onInput={handleSeeker}
                            />
                        )}
                        <button>
                            <MdVolumeUp />
                        </button>
                    </div>
                </div>
                <audio ref={audioRef} src="/Never Gonna Give You Up.mp3" onTimeUpdate={handleTimeUpdate}></audio>
            </Wrapper>
        </Page>
    );
};

export default Day009;
