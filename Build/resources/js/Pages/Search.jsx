import React, { Fragment } from "react";
import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { AiOutlineSearch } from "react-icons/ai/index";
import TextInput from "@/Components/TextInput";
import BookCategory from "@/Components/BookCategory";
import { Inertia } from "@inertiajs/inertia";
import { MdClose } from "react-icons/md";
import { Disclosure, Transition } from "@headlessui/react";
import { FaFilter, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";
import { toInteger } from "lodash";

const Search = (props) => {
    const [searchKey, setSearchKey] = useState(props.s_key);

    const handlerSearch = (e) => {
        setSearchKey(e.target.value);
    };

    const [s_bar, setSBar] = useState(false);

    const [s_button, setSButton] = useState(false);

    const [amount, setMount] = useState({ from: 0, to: 500 });

    const [lang, setLang] = useState(1);

    const [sortType, setSortType] = useState(0);

    const [fButton, setFButton] = useState(false);

    const [mobileDialog, setMobileDialog] = useState(false);

    const filter = () => {
        Inertia.get(
            "search.fil",
            {
                s_key: searchKey,
                amount: amount,
                sortT: sortType,
                from: toInteger(props.from),
                to: toInteger(props.to),
                k: 1
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
            <Header auth={props} />
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
                        onClick={filter}
                        className="p-2 px-4 text-[21px] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-md text-white"
                    >
                        <AiOutlineSearch />
                    </button>
                    <TextInput
                        name={"s_key"}
                        className="rounded-r-md rounded-l-none p-5 lg:w-[40vw]"
                        placeholder="Search..."
                        handleChange={handlerSearch}
                        defaultValue={searchKey}
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
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-1 md:gap-3 lg:gap-5 lg:p-10 p-5">
                {props.data.length < 1 ? (
                    <h1 className="text-[40px] text-red-500 text-center">
                        Can not find your book
                    </h1>
                ) : (
                    props.data.map((element) => (
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
                            authenticated={props.auth ? props.auth.user : null}
                        />
                    ))
                )}
            </div>
            <div className="flex sm:flex-1 items-center justify-between w-screen p-5">
                <nav
                    className="inline-flex -space-x-px rounded-md shadow-sm"
                    aria-label="Pagination"
                >
                    <button
                        href="#"
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Previous
                    </button>
                    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                    {props.page.map((e) => (
                        <button
                            href="#"
                            aria-current="page"
                            key={e}
                            className={
                                "relative inline-flex items-center border p-2 " +
                                (props.k == e
                                    ? " z-10 bg-indigo-50 border-indigo-500 text-indigo-600"
                                    : " bg-white border-gray-300 text-gray-500 hover:bg-gray-50")
                            }
                            onClick={() => {
                                Inertia.get(
                                    "search.fil",
                                    {
                                        s_key: searchKey,
                                        amount: amount,
                                        sortT: sortType,
                                        from: toInteger((e - 1) * 20),
                                        to: toInteger(e * 20),
                                        k: e,
                                        pages: props.page.length,
                                    },
                                    { preserveScroll: true }
                                );
                            }}
                        >
                            {e}
                        </button>
                    ))}
                    <button
                        href="#"
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Next
                    </button>
                </nav>
            </div>
            <Footer />
        </>
    );
};

export default Search;
