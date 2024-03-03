import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
const Toggle = ({ action, isDark }) => {
    return (
        <button
            className={
                "flex p-1 border-2 rounded-xl relative items-center justify-center text-indigo-400 border-indigo-500 dark:border-purple-container"
            }
            onClick={() => {
                action();
            }}
        >
            <div className="flex flex-row justify-center items-center gap-4 relative ">
                <MdLightMode />
                <MdDarkMode />
            </div>
            <div className={"flex items-center absolute "}>
                <span
                    className={
                        "w-8 box-border h-6 rounded-lg transform bg-indigo-500 dark:bg-purple-container duration-300 ease-in-out " +
                        (isDark ? " translate-x-3" : " -translate-x-3")
                    }
                ></span>
            </div>
        </button>
    );
};

export default Toggle;
