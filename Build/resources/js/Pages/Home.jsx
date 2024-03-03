import React, { Fragment, useMemo } from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import IntroScene from "@/Components/IntroScene";
import TextInput from "@/Components/TextInput";
import Footer from "@/Components/Footer";
import Catalog from "@/Components/Catalog";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Checkbox from "@/Components/Checkbox";
import Slider from "@/Components/Slider";
import { MdFilterList } from "react-icons/md";

export default function Home(props) {
    const [searchKey, setSearchKey] = useState("");

    const handlerSearch = (e) => {
        setSearchKey(e.target.value);
    };
    const search = () => {
        Inertia.get(
            "search",
            {
                s_key: searchKey,
                amount: amount,
            },
            { preserveScroll: true }
        );
    };

    const [amount, setMount] = useState({ from: 0, to: 500 });

    const [language, setLanguage] = useState(1);

    const [type, setType] = useState(1);

    const [sortType, setSortType] = useState(0);

    const [fButton, setFButton] = useState(false);

    const [mobileDialog, setMobileDialog] = useState(false);

    const [limit, setLimit] = useState(props.lim);

    const filter = () => {
        Inertia.get(
            "search.filter",
            {
                s_key: searchKey,
                lim: limit,
                from: amount.from,
                to: amount.to,
                cat_id: type,
                sortT: sortType,
                // lang: lang,
            },
            { preserveScroll: true }
        );
    };

    window.onscroll = function () {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
        } else {
        }
    };

    return (
        <>
            <Head title="Home" />
            <Header active={"home"} auth={props} />
            <main className="w-full bg-indigo-100 dark:bg-purple-dark transform ease-in-out flex-col p-2">
                <div className="flex flex-row p-2 lg:p-5 justify-between shadow-lg uppercase font-mono font-medium bg-indigo-900 dark:bg-purple-container text-white lg:mx-32 mb-10">
                    <span className="text-center">Secure payment</span>
                    <span className="text-center">Free Delivery</span>
                    <span className="text-center">24/7 Support</span>
                    <span className="text-center">Genuine</span>
                </div>
                <div
                    className="flex gap-2 lg:flex-row relative"
                    preservescroll="true"
                >
                    <div className="flex flex-col h-max gap-4 justify-start z-20 col-span-2 dark:bg-purple-container sticky top-20 dark:rounded">
                        <div className="flex flex-col p-2 lg:p-5 items-start gap-4">
                            <div className="flex flex-row justify-between items-start text-xl w-[200px]">
                                <h4 className="capitalize">filter</h4>
                                <button className="rounded-md p-2 bg-indigo-400 text-white">
                                    <MdFilterList />
                                </button>
                            </div>
                            <span className="text-gray-700">Category</span>
                            <div className="flex flex-col w-[200px] gap-2">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Checkbox value={true} name={""} />
                                        <span className="">Math</span>
                                    </div>
                                    <span>109</span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Checkbox value={true} name={""} />
                                        <span className="">Math</span>
                                    </div>
                                    <span>109</span>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row gap-2 items-center">
                                        <Checkbox value={true} name={""} />
                                        <span className="">Math</span>
                                    </div>
                                    <span>109</span>
                                </div>
                            </div>
                            <span className="text-gray-700">Price</span>
                            <div className="">
                                <Slider />
                                <TextInput
                                    placeholder={"Price"}
                                    type="number"
                                />
                            </div>
                            <span className="text-gray-700">Type</span>
                            <div className="flex flex-col gap-2 w-[200px]">
                                <div className="flex flex-row justify-between items-center">
                                    <input className="w-4 h-4" type="radio" radioGroup="type" name="type" value={2} />
                                    <label>e-book</label>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <input className="w-4 h-4" type="radio" radioGroup="type" name="type" value={1} />
                                    <label>paper book</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 md:gap-3 lg:gap-5 lg:col-span-5 ">
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
            </main>
            <Footer />
        </>
    );
}
