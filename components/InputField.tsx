import clsx from "clsx";
import React, { ChangeEvent, EventHandler, FocusEventHandler, InvalidEvent, useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    // type?: React.HTMLInputTypeAttribute;
    // placeholder: string;
    // className?: string;
    // pattern?: string;
    // required?: boolean;
    invalidMessage?: string;
}

const InputField = ({
    type = "text",
    placeholder,
    className,
    pattern,
    invalidMessage,
    required = false,
    onChange,
    value,
}: Props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(true);
        e.target.placeholder = "";
    };
    const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsFocused(false);
        if (placeholder) e.target.placeholder = placeholder;
    };

    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
        if (!invalidMessage) return;
        e.target.setCustomValidity(invalidMessage);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity("");
        if (onChange) onChange(e);
    };

    return (
        <div
            className={clsx(
                "relative",
                className,
                isFocused ? "-translate-y-1 shadow-md transition-transform" : "translate-y-0"
            )}
        >
            <span
                className={clsx(
                    "absolute  p-3 text-sm transition-all z-20 top-0 left-0 pointer-events-none",
                    isFocused ? "opacity-100 -translate-y-7" : "opacity-0"
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
                value={value}
                placeholder={placeholder}
                pattern={pattern}
                required={required}
                className="p-3 rounded-md bg-brand-7 outline-0 w-full"
            />
        </div>
    );
};

export default InputField;
