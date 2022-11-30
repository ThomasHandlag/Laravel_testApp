import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import FilterButton from "@/Components/FilterButton";
import IntroScene from "@/Components/IntroScene";
import TextInput from "@/Components/TextInput";
import { AiOutlineSearch } from "react-icons/ai/index";
import Footer from "@/Components/Footer";
import Catalog from "@/Components/Catalog";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Post from "@/Components/Post";

export default function Home(props) {
    const [searchKey, setSearchKey] = useState("");

    let filter = [];

    // const sorting = (ck, catalog) => {
    //     return catalog 
    //         .splice(
    //             catalog.findIndex((e) => e.catalog_name === ck.target.value),
    //             1
    //         )
    //         .concat(catalog);
    // };

    props.data.map((e) => {
        filter.push(
            <FilterButton
                onClick={() => {
                    Inertia.get("filter.catalog", {
                        catalog_id: e.id,
                    });
                }}
                key={e.id}
                value={e.catalog_name}
            >
                {e.catalog_name}
            </FilterButton>
        );
    });

    const handlerSearch = (e) => {
        setSearchKey(e.target.value);
    };
    const search = () => {
        Inertia.get("search", { s_key: searchKey });
    };

    return (
        <>
            <Head title="Home" />
            <Header active={"home"} auth={props} />
            <IntroScene attr={props.best_sale} />
            <div className="lg:p-10 p-6">
                <div className="flex flex-row p-2 gap-5 lg:p-10 lg:gap-28 justify-center shadow-lg uppercase font-mono font-medium">
                    <span className="text-center">Secure payment</span>
                    <span className="text-center">Free Delivery</span>
                    <span className="text-center">24/7 Support</span>
                    <span className="text-center">Genuine</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-7 gap-10 ml-4 grid-rows-1">
                <div className="flex flex-col gap-4 lg:col-span-2 h-min justify-center">
                    <div className="flex justify-center items-center">
                        <button
                            onClick={search}
                            className="p-2 text-[21px] flex border-gray-300 border-r-0 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-2xl"
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
                    <div className="gap-5 flex flex-col justify-center p-2">
                        {filter}
                    </div>
                    <div className="shadow-lg flex-col p-2">
                        <button
                            onClick={() => {
                                Inertia.get("about");
                            }}
                            className="text-[25px] p-2 bg-violet-800 text-white shadow-lg text-center px-5 w-full rounded-t-lg"
                        >
                            News
                        </button>
                        {props.news.map((e) => (
                            <Post
                                key={e.id}
                                img={e.path_img}
                                tit={e.title}
                                cont={e.cont}
                                date={e.date_post}
                            />
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-1 md:gap-3 lg:gap-5 lg:col-span-5">
                    {props.data.map((element) => (
                        <Catalog
                            title={element.catalog_name}
                            key={element.id}
                            key_s={element.key_s}
                            books={element.books}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
