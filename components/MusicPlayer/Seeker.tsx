import { SyntheticEvent } from "react";

interface Props {
    seeker: number;
    duration: number;
    timer: string;
    onInput: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const Seeker = ({ seeker, duration, timer, onInput }: Props) => {
    const str_pad_left = (string: number, pad: string, length: number) => {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    };
    const makeDurationString = () => {
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration - minutes * 60);
        const durationString = str_pad_left(minutes, "0", 1) + ":" + str_pad_left(seconds, "0", 2);
        return durationString;
    };

    return (
        <div className="flex flex-col justify-center m-4 w-64 md:w-96 lg:w-[512px]">
            <div className="flex justify-between">
                <p>{timer}</p>
                <p>{makeDurationString()}</p>
            </div>
            <input type="range" min={0} max={duration} value={seeker} className="accent-brand-text outline-0 w-full" onInput={onInput} />
        </div>
    );
};

export default Seeker;
