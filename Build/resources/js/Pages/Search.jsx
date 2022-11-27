import React from "react";
import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { AiOutlineSearch } from "react-icons/ai/index";
import TextInput from "@/Components/TextInput";
import BookCategory from "@/Components/BookCategory";
import { FaMoneyBillAlt } from "react-icons/fa/index";
import { Inertia } from "@inertiajs/inertia";

const Search = (props) => {
    const [searchKey, setSearchKey] = useState("");

    const handlerSearch = (e) => {
        setSearchKey(e.target.value);
    };
    const search = () => {
        Inertia.get("search.back", { s_key: searchKey });
    };
    const [act, setAct] = useState(false);

    const [limS, setLimS] = useState(0);

    const [limE, setLimE] = useState(0);

    return (
        <>
            <Header auth={props} />
            <div className="grid lg:grid-cols-7 gap-10 ml-4 grid-rows-1 lg:p-5 p-2">
                <div className="lg:flex flex-col gap-4 lg:col-span-2 h-min justify-center">
                    <div className="flex flex-col justify-center items-center top-[95px] fixed z-20 gap-2 bg-black/50 backdrop-blur-xl rounded-xl">
                        <div className="flex flex-row">
                            <button
                                onClick={search}
                                className="hover:bg-blue-400 p-2 text-[21px] flex bg-white border-gray-300 border-r-0 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-2xl"
                            >
                                <AiOutlineSearch />
                            </button>
                            <TextInput
                                name={"s_key"}
                                className="rounded-r-2xl rounded-l-none"
                                placeholder="Search..."
                                handleChange={handlerSearch}
                            ></TextInput>
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="text-[30px] px-2 border-2 rounded-xl bg-white border-slate-300 focus:outline-none hover:bg-purple-800 hover:text-white"
                                onClick={() => {
                                    setAct(!act);
                                }}
                            >
                                <FaMoneyBillAlt />
                            </button>
                        </div>
                        {act ? (
                            <div className="flex flex-col gap-2">
                                <input
                                    type={"number"}
                                    className="rounded-xl border-slate-400 focus:outline-none shadow-xl w-[140px]"
                                    min={0}
                                    defaultValue="0"
                                    name="num1"
                                    onChange={(e) => {
                                        setLimS(e.target.value);
                                    }}
                                />
                                <input
                                    type={"number"}
                                    className="rounded-xl border-slate-400 focus:outline-none shadow-xl w-[140px]"
                                    defaultValue="0"
                                    min={0}
                                    name="num2"
                                    onChange={(e) => {
                                        setLimE(e.target.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        Inertia.get("search.price", {
                                            from_p: limS,
                                            to_p: limE,
                                            s_key: searchKey,
                                        });
                                    }}
                                    className="p-2 bg-green-500 hover:bg-blue-600 rounded-xl shadow-xl mb-5"
                                >
                                    Filter
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 md:gap-3 lg:gap-5 lg:col-span-5">
                    {props.s_key.length < 1 ? (
                        <h1 className="text-[40px] text-red-500 text-center">
                            Can not find your book
                        </h1>
                    ) : (
                        props.s_key.map((element) => (
                            <BookCategory
                                title={element.title}
                                price={element.price}
                                key={element.id}
                                id={element.id}
                                image={element.path_img}
                                des={element.description}
                                author={element.author}
                                category={element.category}
                                quantity={element.quantity}
                                authenticated={
                                    props.auth ? props.auth.user : null
                                }
                            />
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Search;
