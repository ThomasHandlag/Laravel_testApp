import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { FaShoppingCart } from "react-icons/fa/index";
import { BiSend } from "react-icons/bi/index";
import { Inertia } from "@inertiajs/inertia";

export default function Detail(props) {
    const buyNow = () => {
        Inertia.get("buy.book", {
            id: props.book[0].id,
        });
    };
    const addCart = () => {
        Inertia.post("addcart.auth", {
            id: props.auth.user.id,
            book_id: props.book[0].id,
        });
    };
    return (
        <>
            <Header auth={props} active={""} />
            <div className="container">
                <div className="flex flex-col lg:pl-20 lg:pr-20 mt-20">
                    <div className="grid xl:grid-cols-7 grid-rows-2 lg:grid-rows-1">
                        <div className="lg:col-span-2">
                            <img
                                src={props.book[0].path_img}
                                className="object-fill relative lg:p-0 pl-5 pr-5 shadow-xl border-2 "
                            />
                        </div>
                        <div className="flex flex-col lg:col-span-5 pl-5 h-fit">
                            <div className="p-2 border-b-2 border-gray-300">
                                <span className="text-[35px] font-mono">
                                    {props.book[0].title}
                                </span>
                            </div>
                            <div className="flex flex-row border-b-2 border-gray-300 pt-5 gap-10">
                                <div className="text-red-500 text-[30px] font-bold text-center">
                                    ${props.book[0].price}
                                </div>
                                <div className="line-through text-gray-400 text-[30px]">
                                    ${190}
                                </div>
                            </div>
                            <div className="grid lg:grid-cols-2 lg:pt-10 pt-5">
                                <ul className="flex flex-col gap-2 pl-10">
                                    <li className="text-[20px]">
                                        Author: {props.book[0].author}
                                    </li>
                                    <li className="text-[20px]">
                                        Format: {props.book[0].type_book}
                                    </li>
                                    <li className="text-[20px]">
                                        Mass: {props.book[0].mass}
                                    </li>
                                </ul>
                                <div className="grid grid-rows-3">
                                    <div className="grid p-2 border-solid border-2 rounded-lg grid-cols-3 w-max">
                                        <span className="p-2 pl-5 pr-5 text-center">
                                            {props.book[0].quantity > 0 ? "Special" : "Out of order"}
                                        </span>
                                    </div>
                                    <div className="flex flex-row gap-5 mt-5">
                                        <button
                                            className="fs-30 bg-green-500 p-2 rounded-2xl pl-10 pr-10"
                                            onClick={addCart}
                                        >
                                            <FaShoppingCart />
                                        </button>
                                        <button
                                            className="bg-red-500 p-2 pr-5 pl-5 rounded-2xl text-center font-bold"
                                            onClick={buyNow}
                                        >
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-7 mt-20 grid-rows-2 xl:grid-rows-1">
                        <div className="xl:col-span-5 lg:col-span-5 flex flex-col">
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-center text-[20px] w-full p-2">
                                Description
                            </div>
                            <div className="border-l-2 h-max rounded-sm p-2">
                                <p className="p-5 indent-8">
                                    {props.book[0].description}
                                </p>
                            </div>
                        </div>
                        <div className="xl:col-span-2 lg:col-span-2 flex flex-col w-full">
                            <div className="bg-blue-500 text-[20px] w-full text-center p-2">
                                Comment
                            </div>
                            <div>
                                <div></div>
                                <div className="shadow-xl w-max rounded-md flex flex-row sticky z-20 bottom-0">
                                    <input
                                        className="rounded-l-xl border-2 focus:outline-none p-2 focus:border-cyan-300"
                                        type="test"
                                        name="comment"
                                    />
                                    <button className="bg-gray-400 p-2 rounded-r-xl border-2 text-[25px] text-center hover:bg-sky-400">
                                        <BiSend />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
