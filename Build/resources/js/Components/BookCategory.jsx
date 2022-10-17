import React, { useEffect, useRef, useState } from "react";
export default function BookCategory(book) {
    const [addCart] = useState();
    return (
        <>
            <div className="gap-2 shadow-xl w-11/12 mb-20 hover:shadow-slate-900 rounded-b-xl duration-500 bg-white">
                <div className="break-words relative">
                    <img src={book.image} className="object-fill relative" />
                    <div className="absolute bg-opacity-20 justify-between top-0">
                        <div className="rounded-[50%] bg-red-700 p-2 top-0 text-center">
                            <p className="text-white">
                                -10<small>%</small>
                            </p>
                        </div>
                        {true ? null : (
                            <div className="rounded-md bg-slate-60 p-2">
                                <p className="text-stone-200">Sold out</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-5">
                    <div className="">
                        <p className="text-ellipsis text-left whitespace-nowrap overflow-hidden">
                            {book.title}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-center text-red-700 font-bold">
                            ${book.price == null ? "100" : book.price}
                        </p>
                        <p className="text-slate-600 line-through">${true ? "399": "399"}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
