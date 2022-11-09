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

export default function Home(props) {
    const [searchKey, setSearchKey] = useState("");
    const [catalog, setCatalog] = useState(props.data);
    const [isCatalog, setIsCatalog] = useState(true);

    let filter = [];

    const sorting = (ck, catalog) => {
        return catalog
            .splice(
                catalog.findIndex((e) => e.catalog_name === ck.target.value),
                1
            )
            .concat(catalog);
    };
    const sort_catalog = (e) => {
        setCatalog(sorting(e, catalog));
        setIsCatalog(true);
    };

    props.data.map((e) => {
        filter.push(
            <FilterButton
                onClick={sort_catalog}
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
            <IntroScene />
            <div className="lg:p-10 p-6">
                <div className="flex flex-row p-2 gap-5 lg:p-10 lg:gap-28 justify-center shadow-lg uppercase font-mono font-medium">
                    <span className="text-center">Secure payment</span>
                    <span className="text-center">Free Delivery</span>
                    <span className="text-center">24/7 Support</span>
                    <span className="text-center">Genuine</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-7 gap-10 ml-4 grid-rows-1">
                <div className="lg:flex flex-col gap-4 lg:col-span-2 h-min justify-center">
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
                    <div className="gap-5 flex flex-wrap justify-center">
                        <FilterButton onClick={() => setIsCatalog(false)}>
                            Default
                        </FilterButton>
                        {filter}
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-1 md:gap-3 lg:gap-5 lg:col-span-5">
                    {(isCatalog ? catalog : props.data).map((element) => (
                        <Catalog
                            slice={isCatalog ? false : true}
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
