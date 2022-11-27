import React, { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { FaShoppingCart } from "react-icons/fa/index";
import { BiSend } from "react-icons/bi/index";
import { Inertia } from "@inertiajs/inertia";

export default function Detail(props) {
    const [quantity, setQuantity] = useState(1);

    const buyNow = () => {
        Inertia.get("buy.book", {
            id: props.book[0].id,
            num: [quantity],
        });
    };

    const addCart = () => {
        Inertia.post("addcart.auth", {
            id: props.auth.user.id,
            book_id: props.book[0].id,
            num: quantity,
        });
    };
    const [com, setCom] = useState("");
    return (
        <>
            <Header auth={props} active={""} />
            <div className="container">
                <div className="flex flex-col lg:pl-20 mt-20">
                    <div className="grid xl:grid-cols-7 flex-col lg:grid-rows-1">
                        <div className="lg:col-span-2 relative flex">
                            <img
                                src={props.book[0].path_img}
                                className="object-fill relative lg:p-0 px-5 shadow-xl border-2"
                                alt="Image_BOOK"
                            />
                            {props.book[0].discount_offer ? (
                                <div className="rounded-[50%] bg-red-700 p-2 top-0 text-center absolute">
                                    <p className="text-white">
                                        {props.book[0].discount_offer}
                                        <small>%</small>
                                    </p>
                                </div>
                            ) : (
                                ""
                            )}
                            {props.book[0].quantity > 0 ? (
                                ""
                            ) : (
                                <span className="p-2 px-5 text-center absolute bg-slate-600 text-white rounded-xl">
                                    Sale out
                                </span>
                            )}
                        </div>
                        <div className="flex flex-col lg:col-span-5 pl-5 h-fit">
                            <div className="p-2 border-b-2 border-gray-300">
                                <span className="text-[35px] font-mono">
                                    {props.book[0].title}
                                </span>
                            </div>
                            <div className="flex flex-row border-b-2 border-gray-300 pt-5 gap-10">
                                {props.book[0].discount_offer ? (
                                    <div className="text-red-500 text-[30px] font-bold text-center">
                                        $
                                        {props.book[0].price -
                                            props.book[0].price /
                                                props.book[0].discount_offer}
                                    </div>
                                ) : (
                                    <div className="text-red-500 text-[30px] font-bold text-center">
                                        ${props.book[0].price}
                                    </div>
                                )}
                                {props.book[0].discount_offer ? (
                                    <div className="line-through text-gray-400 text-[30px]">
                                        ${props.book[0].price}
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="grid lg:grid-cols-2 lg:pt-10 pt-5">
                                <ul className="flex flex-col gap-2 pl-10">
                                    <li className="text-[20px]">
                                        <a href="">
                                            Author: {props.book[0].author}
                                        </a>
                                    </li>
                                    <li className="text-[20px]">
                                        Format: {props.book[0].type_book}
                                    </li>
                                    <li className="text-[20px]">
                                        Mass: {props.book[0].mass}
                                    </li>
                                </ul>
                                <div className="flex flex-col">
                                    <div className="p-2 border-solid border-2 rounded-lg">
                                        {props.book[0].quantity > 0 ? (
                                            <div className="p-5 flex items-center justify-center flex-col gap-5">
                                                <div className="flex flex-row rounded-xl shado w-xl border-2 border-gray-300">
                                                    <button
                                                        className="p-2 pl-5 pr-5 rounded-l-xl  hover:bg-blue-600"
                                                        onClick={() =>
                                                            setQuantity(
                                                                quantity + 1
                                                            )
                                                        }
                                                    >
                                                        +
                                                    </button>
                                                    <span
                                                        className="p-2 border-l-2 border-r-2 pl-4 pr-4"
                                                        onChange={() =>
                                                            setTol(
                                                                quantity *
                                                                    props
                                                                        .book[0]
                                                                        .price
                                                            )
                                                        }
                                                    >
                                                        {quantity < 1
                                                            ? 1
                                                            : quantity}
                                                    </span>
                                                    <button
                                                        className="p-2 pl-5 pr-5 rounded-r-xl hover:bg-red-600"
                                                        onClick={() =>
                                                            setQuantity(
                                                                quantity - 1
                                                            )
                                                        }
                                                        disabled={
                                                            quantity <= 1
                                                                ? true
                                                                : false
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                                <div className="border-2 border-slate-400 p-2 px-5 rounded-xl shadow-md bg-green-200">
                                                    <span className="p-2 pl-4 pr-4">
                                                        Total price:
                                                    </span>
                                                    {quantity *
                                                        props.book[0].price}
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="p-2 pl-5 pr-5 text-center">
                                                Sale out
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex flex-row gap-5 mt-5 justify-center items-center">
                                        {props.book[0].quantity > 0 ? (
                                            <>
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
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="fs-30 bg-green-900 p-2 rounded-2xl pl-10 pr-10"
                                                >
                                                    <FaShoppingCart />
                                                </button>
                                                <button
                                                    className="bg-red-900 p-2 pr-5 pl-5 rounded-2xl text-center font-bold"
                                                >
                                                    Buy now
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-7 mt-20 grid-rows-2 xl:grid-rows-1">
                        <div className="xl:col-span-4 lg:col-span-4 flex flex-col">
                            <div className="bg-gradient-to-r from-red-500 to-red-600 text-center text-[20px] w-full p-2">
                                Description
                            </div>
                            <div className="border-l-2 h-max rounded-sm p-2">
                                <p className="p-5 indent-8">
                                    {props.book[0].description}
                                </p>
                            </div>
                        </div>
                        <div className="xl:col-span-3 lg:col-span-3 flex flex-col w-full">
                            <div className="bg-blue-500 text-[20px] w-full text-center p-2">
                                Comment
                            </div>
                            <div className="lg:h-[40vh] h-[30vh] relative overflow-auto p-2">
                                <div className="flex flex-col gap-2">
                                    {props.com.map((e) => (
                                        <div
                                            className="flex flex-row gap-2 shadow-md rounded-md"
                                            key={e.id}
                                        >
                                            <img
                                                src={e.path_img}
                                                alt={"user_image"}
                                                className="w-[50px] h-[50px] rounded-full border-2"
                                            />
                                            <div className="flex gap-2 p-2 text-slate-500">
                                                <p className="text-blue-500">
                                                    {e.name}:
                                                </p>
                                                <p>
                                                    <span className="text-blue-400 text-sm">
                                                        {e.date_comt}
                                                    </span>
                                                    {"/" + e.content}
                                                </p>
                                                {props.auth.user ? (
                                                    props.auth.user.id ==
                                                    e.user_id ? (
                                                        ""
                                                    ) : (
                                                        <button
                                                            className="text-blue-500"
                                                            onClick={() => {
                                                                setCom(
                                                                    "@" +
                                                                        e.name +
                                                                        com
                                                                );
                                                            }}
                                                        >
                                                            reply
                                                        </button>
                                                    )
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="shadow-xl w-max rounded-md flex flex-row sticky z-20 bottom-0">
                                    <input
                                        className="rounded-l-xl border-2 border-slate-300 focus:outline-none p-2 focus:border-cyan-300"
                                        type="text"
                                        name="comment"
                                        onChange={(e) => {
                                            setCom(e.target.value);
                                        }}
                                        placeholder="Comment"
                                    />
                                    <button
                                        onClick={() => {
                                            Inertia.post("add.comm", {
                                                cont: com,
                                                b_id: props.book[0].id,
                                            });
                                        }}
                                        className="bg-gray-400 p-2 rounded-r-xl border-2 text-[25px] text-center hover:bg-sky-400"
                                    >
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
