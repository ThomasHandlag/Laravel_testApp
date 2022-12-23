import React, { Fragment, useMemo } from "react";
import { Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import IntroScene from "@/Components/IntroScene";
import TextInput from "@/Components/TextInput";
import { AiOutlineSearch } from "react-icons/ai/index";
import Footer from "@/Components/Footer";
import Catalog from "@/Components/Catalog";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Post from "@/Components/Post";
import { MdClose } from "react-icons/md";
import { Disclosure, Transition } from "@headlessui/react";
import { FaFilter, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";

export default function Home(props) {
    const [searchKey, setSearchKey] = useState("");

    const setSk = useMemo(() => {
        return searchKey;
    }, [searchKey]);

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

    const [s_bar, setSBar] = useState(false);

    const [s_button, setSButton] = useState(false);

    const [amount, setMount] = useState({ from: 0, to: 500 });

    const [lang, setLang] = useState(1);

    const [type, setType] = useState(1);

    const [sortType, setSortType] = useState(0);

    const [fButton, setFButton] = useState(false);

    const [mobileDialog, setMobileDialog] = useState(false);

    const [lim, setLim] = useState(props.lim);

    const filter = () => {
        Inertia.get(
            "search.filter",
            {   s_key: searchKey,
                lim: lim,
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
            setSButton(true);
            setFButton(true);
        } else {
            setSButton(false);
            setFButton(false);
        }
    };

    return (
        <>
            <Head title="Home" />
            <Header active={"home"} auth={props} />
            <IntroScene attr={props.best_sale} />
            <Transition
                show={s_button}
                appear={true}
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-y-full"
            >
                <button
                    className={
                        "fixed z-40 lg:right-10 right-5 bottom-20 lg:text-[35px] text-[25px] bg-indigo-700 rounded-full lg:p-5 p-4 text-white"
                    }
                    onClick={() => {
                        setSButton(false);
                        setSBar(true);
                    }}
                >
                    <AiOutlineSearch />
                </button>
            </Transition>
            <div
                className={
                    "fixed z-[60] w-full h-screen top-0 bg-black/60 backdrop-blur-lg transition-all ease-out duration-300 gap-5" +
                    (s_bar
                        ? " flex justify-center items-center opacity-100"
                        : " hidden opacity-0")
                }
            >
                <div className="flex justify-center items-center h-max rounded-md border-2 border-indigo-400 bottom-[50vh] bg-violet-600">
                    <button
                        onClick={search}
                        className="p-2 px-4 text-[21px] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-md text-white"
                    >
                        <AiOutlineSearch />
                    </button>
                    <TextInput
                        name={"s_key"}
                        className="rounded-r-md rounded-l-none p-5 lg:w-[40vw]"
                        placeholder="Search..."
                        handleChange={handlerSearch}
                    />
                </div>
                <button
                    className="bg-indigo-700 rounded-full p-2 text-white text-[30px] h-max hover:bg-indigo-500"
                    onClick={() => {
                        setSBar(false);
                        setSButton(true);
                    }}
                >
                    <MdClose />
                </button>
            </div>
            <div className="lg:p-10 p-6">
                <div className="flex flex-row p-2 gap-5 lg:p-10 lg:gap-28 justify-center shadow-lg uppercase font-mono font-medium bg-violet-700 text-white">
                    <span className="text-center">Secure payment</span>
                    <span className="text-center">Free Delivery</span>
                    <span className="text-center">24/7 Support</span>
                    <span className="text-center">Genuine</span>
                </div>
            </div>
            <div
                className="flex gap-10 ml-4 lg:flex-row flex-col"
                preservescroll="true"
            >
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
                <div className="shadow-lg flex-col p-2 gap-2">
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
            <Transition
                as={Fragment}
                show={fButton}
                appear={true}
                enter="transition ease-in-out duration-300"
                enterFrom="opacity-0 -translate-x-full"
                enterTo="opacity-100 translate-x-0"
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
            >
                <button
                    className={
                        "text-white text-[20px] bg-violet-600 w-max h-max py-4 px-2 rounded-r-xl fixed z-20 top-[200px] transition ease-in-out duration-150 focus:outline-none " +
                        (mobileDialog
                            ? " translate-x-[65vw] lg:translate-x-[50vw]"
                            : " translate-x-0")
                    }
                    onClick={() => {
                        setMobileDialog(!mobileDialog);
                    }}
                >
                    <FaArrowRight />
                </button>
            </Transition>
            <Transition
                as="div"
                className="flex flex-col fixed gap-4 h-max justify-center z-20 top-[200px] bg-white shadow-lg lg:w-[50vw] w-[65vw] pl-5 py-5"
                show={mobileDialog}
                appear={true}
            >
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-full"
                >
                    <div className="flex flex-row lg:gap-5 gap-2">
                        <span className="text-[20px] text-indigo-800 p-2 text-center">
                            Filters
                        </span>
                        <select
                            className="p-2 focus:outline-violet-600 font-medium border-slate-300 border-2 rounded-md capitalize w-max"
                            onChange={(e) => {
                                setSortType(e.target.value);
                            }}
                            defaultValue={sortType}
                        >
                            <option value={0}>a-z</option>
                            <option value={1}>z-a</option>
                            <option value={2}>latest</option>
                            <option value={3}>popular</option>
                        </select>
                        <button
                            className="text-slate-900 lg:text-[30px] text-[18px] p-2 hover:bg-violet-800 hover:text-white"
                            onClick={filter}
                        >
                            <FaFilter />
                        </button>
                    </div>
                </Transition.Child>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-full"
                >
                    <Disclosure
                        as={"div"}
                        className="gap-5 flex flex-col p-2 border-t border-gray-200 px-4 py-6"
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={"flex flex-row justify-between"}
                                >
                                    <span className="font-medium text-gray-900">
                                        Category
                                    </span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <FaMinus
                                                className="text-slate-600 text-[20px]"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <FaPlus
                                                className="text-slate-600 text-[20px]"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </span>
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className={"flex flex-col gap-2"}
                                >
                                    <select
                                        className="p-2 focus:outline-violet-600 font-medium border-slate-300 border-2 rounded-md capitalize"
                                        onChange={(e) => {
                                            setType(e.target.value);
                                        }}
                                        defaultValue={type}
                                    >
                                        {props.data.map((e) => (
                                            <option value={e.id} key={e.id}>
                                                {e.catalog_name}
                                            </option>
                                        ))}
                                    </select>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </Transition.Child>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-full"
                >
                    <Disclosure
                        as={"div"}
                        className="gap-5 flex flex-col p-2 border-t border-gray-200 px-4 py-6"
                    >
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={"flex flex-row justify-between"}
                                >
                                    <span className="font-medium text-gray-900">
                                        Price
                                    </span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <FaMinus
                                                className="text-slate-600 text-[20px]"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <FaPlus
                                                className="text-slate-600 text-[20px]"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </span>
                                </Disclosure.Button>
                                <Disclosure.Panel
                                    className={"flex flex-col gap-2"}
                                >
                                    <TextInput
                                        className={""}
                                        name="from"
                                        handleChange={(e) => {
                                            setMount({
                                                from: e.target.value,
                                                to: amount.to,
                                            });
                                        }}
                                        placeholder="From"
                                        defaultValue={amount.from}
                                    />
                                    <TextInput
                                        className={""}
                                        name="to"
                                        handleChange={(e) => {
                                            setMount({
                                                from: amount.from,
                                                to: e.target.value,
                                            });
                                        }}
                                        placeholder="To"
                                        defaultValue={amount.to}
                                    />
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </Transition.Child>
                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="opacity-0 -translate-x-full"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-in-out duration-300"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 -translate-x-full"
                >
                    <div className="flex flex-col gap-2 px-4 py-6">
                        <span className="font-medium text-slate-800">
                            Language
                        </span>
                        <select
                            className="p-2 focus:outline-violet-600 font-medium border-slate-300 border-2"
                            onChange={(e) => {
                                setLang(e.target.value);
                            }}
                        >
                            <option value={1}>English</option>
                            <option value={2}>Vietnamese</option>
                            <option value={3}>Japanese</option>
                        </select>
                    </div>
                </Transition.Child>
            </Transition>
            <Footer />
        </>
    );
}
