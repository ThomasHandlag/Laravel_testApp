import React, { useState } from "react";

const FilterButton = ({ type = "button", children , className, onClick, value}) => {
    const [isActive, setActive] = useState(false);
    return (
        <button
            value={value}
            onClick={(e) => {onClick(e); setActive(!isActive)}}
            type={type}
            className={ (isActive ? "active " : "")
               + "active:bg-purple-800 active:text-cyan-300 hover:bg-purple-800 hover:text-cyan-300 px-5 bg-transparent border-solid border-purple-500 border-2 rounded-full capitalize " +
                className
            }
        >
            {children}
        </button>
    );
};
export default FilterButton;
