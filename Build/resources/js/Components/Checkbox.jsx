import React from "react";

export default function Checkbox({id, name, value, handleChange, className }) {
    return (
        <input
            value={value}
            id={id}
            type="checkbox"
            name={name}
            className={
                "rounded-lg text-indigo-500 shadow-sm p-2 h-4 w-4 focus:border-indigo-300 focus:ring focus:ring-indigo-500 " +
                className
            }
            onClick={() => {}}
        />
    );
}
