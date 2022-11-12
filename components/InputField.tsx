import clsx from "clsx";
import React, { ChangeEvent, EventHandler, FocusEventHandler, InvalidEvent, useState } from "react";

interface Props {
    type?: React.HTMLInputTypeAttribute;
    placeholder: string;
    className?: string;
    pattern?: string;
    invalidMessage?: string;
    required?: boolean;
}

const InputField = ({
    type = "text",
    placeholder,
    className,
    pattern,
    invalidMessage,
    required = false,
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(true);
        e.target.placeholder = "";
    };
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(false);
        e.target.placeholder = placeholder;
    };

    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        if (!invalidMessage) return;
        e.target.setCustomValidity(invalidMessage);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity("");
    };

    return (
        <div className={clsx("relative m-4 w-60", className)}>
            <span
                className={clsx(
                    "absolute opacity-0 p-3 text-sm transition-all z-20 top-0 left-0 pointer-events-none",
                    isFocused && "opacity-100 -translate-y-7"
                )}
            >
                {placeholder}
            </span>
            <input
                onChange={handleChange}
                onInvalid={handleInvalid}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={type}
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className="p-3 rounded-md bg-brand-1 transition-transform outline-0 w-full focus:shadow-md focus:-translate-y-1"
            />
        </div>
    );
};

export default InputField;
