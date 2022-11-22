import React, { useRef, useEffect, useState, SyntheticEvent } from "react";
import { MdShuffle, MdSkipNext, MdSkipPrevious, MdRepeat, MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff, MdVolumeMute } from "react-icons/md";
import Image from "next/image";
import clsx from "clsx";
import Seeker from "./Seeker";
import ricky from "../../public/rick-astley.jpg";
import Controls from "./Controls";

const MusicPlayer = () => {
    const [timer, setTimer] = useState("00:00");
    const [seeker, setSeeker] = useState(0);
    const [volume, setVolume] = useState(50);
    const [isShuffled, setIsShuffled] = useState(false);
    const [isOnLoop, setIsOnLoop] = useState(false);
    const [isMuted, setIsMuted] = useState({ prevVolume: 50, muted: false });
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) setDuration(audioRef.current.duration);
    }, []);

    useEffect(() => {
        if (audioRef.current) audioRef.current.loop = isOnLoop;
    }, [isOnLoop]);
    useEffect(() => {
        audioRef.current?.ended && setIsPlaying(false);
    }, [audioRef.current?.ended]);
    useEffect(() => {}, [isMuted]);

    const handleSeeker = (e: SyntheticEvent<HTMLInputElement>) => {
        setSeeker(Number((e.target as HTMLInputElement).value));
        if (audioRef.current) audioRef.current.currentTime = Number((e.target as HTMLInputElement).value);
    };
    const handleVolume = (e: SyntheticEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setVolume(Number(target.value));
        if (audioRef.current) audioRef.current.volume = Number(target.value) / 100;
        Number(target.value) === 0 ? setIsMuted({ prevVolume: 0, muted: true }) : setIsMuted({ prevVolume: 0, muted: false });
    };

    const handlePlay = () => {
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

    const handleLoop = () => {
        setIsOnLoop((prev) => !prev);
    };
    const handleShuffle = () => {
        setIsShuffled((prev) => !prev);
    };
    const handleMute = () => {
        if (isMuted.prevVolume === 0 && isMuted.muted) {
            setVolume(5);
            if (audioRef.current) audioRef.current.volume = 0.05;
            setIsMuted({ prevVolume: 0, muted: false });
            return;
        }
        setIsMuted((prev) => {
            if (prev.muted) {
                setVolume(prev.prevVolume);
                if (audioRef.current) audioRef.current.volume = prev.prevVolume / 100;
            } else {
                setVolume(0);
                if (audioRef.current) audioRef.current.volume = 0;
            }

            return { prevVolume: volume, muted: !prev.muted };
        });
    };

    const handleDecreaseVolume = () => {
        setVolume((prev) => (prev <= 10 ? 0 : prev - 10));
        if (audioRef.current) {
            if (audioRef.current.volume <= 0.1) {
                audioRef.current.volume = 0;
                setIsMuted({ prevVolume: 0, muted: true });
                return;
            }
            audioRef.current.volume -= 0.1;
        }
    };
    const handleIncreaseVolume = () => {
        setVolume((prev) => (prev >= 90 ? 100 : prev + 10));
        setIsMuted({ prevVolume: 0, muted: false });
        if (audioRef.current) {
            if (audioRef.current.volume >= 0.9) {
                audioRef.current.volume = 1;
                return;
            }
            audioRef.current.volume += 0.1;
        }
    };

    return (
        <>
            <Image src={ricky} alt="rickyyyy" className="m-4 rounded-md w-64 md:w-96 lg:w-[512px]" />

            <Controls isPlaying={isPlaying} onClick={handlePlay} />
            <Seeker timer={timer} seeker={seeker} duration={duration} onInput={handleSeeker} />
            <div className="flex flex-col items-center lg:flex-row lg:justify-between ">
                <div className="flex justify-around text-3xl w-64 md:w-96 lg:w-64 m-2 lg:justify-center lg:gap-12">
                    <button className={clsx(isShuffled && "text-red-400")} onClick={handleShuffle}>
                        <MdShuffle />
                    </button>
                    <button className={clsx(isOnLoop && "text-red-400")} onClick={handleLoop}>
                        <MdRepeat />
                    </button>
                    <button className={clsx(isMuted.muted && "text-red-400")} onClick={handleMute}>
                        <MdVolumeOff />
                    </button>
                </div>
                <div className="flex justify-center text-3xl w-64 md:w-96 lg:w-64 m-2 ">
                    <button onClick={handleDecreaseVolume}>
                        <MdVolumeMute />
                    </button>

                    <input type="range" className="accent-brand-text outline-0 " value={volume} onInput={handleVolume} />
                    <button onClick={handleIncreaseVolume}>
                        <MdVolumeUp />
                    </button>
                </div>
            </div>

            <audio ref={audioRef} src="/Never Gonna Give You Up.mp3" onTimeUpdate={handleTimeUpdate}></audio>
        </>
    );
};

export default MusicPlayer;
