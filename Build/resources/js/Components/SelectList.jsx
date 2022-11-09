import React from "react";

const SelectList = (list, className, name) => {
    return (
        <div className={className}>
            <select className="" name={name}>
                {list.map((item) => {
                    <option>{item}</option>;
                })}
            </select>
        </div>
    );
};

export default SelectList;
