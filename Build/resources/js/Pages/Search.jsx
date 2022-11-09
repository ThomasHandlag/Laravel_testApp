import React from "react";
import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { AiOutlineSearch } from "react-icons/ai/index";
import TextInput from "@/Components/TextInput";
import BookCategory from "@/Components/BookCategory";
const Search = (props) => {
    const [searchKey, setSearchKey] = useState("");

    const handlerSearch = (e) => {
        setSearchKey(e.target.value);
    };
    const search = () => {
        Inertia.get("search", { s_key: searchKey });
    };
    return (
        <>
            <Header auth={props} />
            <div className="grid lg:grid-cols-7 gap-10 ml-4 grid-rows-1">
                <div className="lg:flex flex-col gap-4 lg:col-span-2 h-min justify-center">
                    <div className="flex justify-center items-center top-[90px] fixed z-20">
                        <button
                            onClick={search}
                            className="p-2 text-[21px] flex bg-white border-gray-300 border-r-0 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-2xl"
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
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 md:gap-3 lg:gap-5 lg:col-span-5">
                    { props.s_key.length < 1 ? <span className="text-[30] text-red-500">Can not find your book</span> :
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
                                authenticated={props.auth ? props.auth.user : null}
                            />
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Search;
