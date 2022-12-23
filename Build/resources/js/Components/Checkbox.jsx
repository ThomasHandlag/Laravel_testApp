import React from "react";

export default function Checkbox({ name, value, handleChange, className }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm p-2 focus:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 h-4 w-4 " +
                className
            }
            onChange={(e) => handleChange(e)}
        />
    );
}
