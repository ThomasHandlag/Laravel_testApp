import React from "react";

export default function NavLink({ href, active, children }) {
    return (
        <a href={href} className={"capitalize text-white p-2 font-bold font-mono text-[20px] tracking-normal transition ease-in-out duration-150 hover:bg-white hover:text-indigo-600 " + (active ? " bg-white text-indigo-600" : "")}>
            {children}
        </a>
    );
}
