import clsx from "clsx";
import React, { FocusEventHandler, useState } from "react";

interface Props {
    type?: React.HTMLInputTypeAttribute;
    placeholder: string;
}

const InputField = ({ type = "text", placeholder }: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(true);
        e.target.placeholder = "";
    };
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(false);
        e.target.placeholder = placeholder;
    };

    return (
        <div className="relative m-4 w-60">
            <span
                className={clsx(
                    "absolute opacity-0 p-3 text-sm transition-all z-20 top-0 left-0 pointer-events-none",
                    isFocused && "opacity-100 -top-7"
                )}
            >
                {placeholder}
            </span>
            <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={type}
                placeholder={placeholder}
                className="p-3 rounded-md bg-brand-1 transition-transform outline-0 w-full focus:shadow-md focus:-translate-y-1"
            />
        </div>
    );
};

export default InputField;
