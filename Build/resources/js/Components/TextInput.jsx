import React, { useEffect, useRef } from "react";

export default function TextInput({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    defaultValue,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={
                "border-slate-300 rounded-md border-2 focus:border-indigo-400 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-indigo-500 shadow-sm p-2 " +
                className
            }
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            defaultValue={defaultValue}
        />
    );
}
