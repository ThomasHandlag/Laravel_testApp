import React, { Children } from "react";
export default function FilterButton({
    className,
    type = "submit",
    children,
    processing,
    active,
}) {
    return (
        <button
            type={type}
            className={
                active
                    ? "active "
                    : "" +
                      "hover:bg-purple-800 hover:text-cyan-300 px-5 bg-transparent border-solid border-purple-500 border-2 rounded-full capitalize" +
                      " " +
                      className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
