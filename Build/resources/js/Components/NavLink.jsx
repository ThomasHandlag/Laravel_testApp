import React from "react";

export default function NavLink({ href, active, children }) {
    return (
        <a
            href={href}
            className={
                "p-2 px-4 rounded-md text-center transform duration-150 " +
                (active
                    ? "dark:bg-purple-container bg-indigo-900 text-indigo-100 "
                    : "text-indigo-400 hover:text-white dark:text-fill-dark hover:bg-indigo-900 dark:hover:text-indigo-100  dark:hover:bg-purple-container")
            }
        >
            {children}
        </a>
    );
}
