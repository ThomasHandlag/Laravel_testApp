import tspace from "../../images/tspace.png";
import React, { Fragment, useState } from "react";
import NavLink from "./NavLink";
import { BiMenuAltRight, BiRegistered } from "react-icons/bi/index";
import { AiFillCloseCircle } from "react-icons/ai/index";
import { RiArrowDropDownLine } from "react-icons/ri/index";
import { BsPerson } from "react-icons/bs/index";
import { usePage } from "@inertiajs/inertia-react";
import { Menu, Transition } from "@headlessui/react";
import { MdSearch, MdSettings } from "react-icons/md";
import { BiLogOut, BiLogIn } from "react-icons/bi/index";
import CartButton from "./CartButton";
import Toggle from "./Toggle";

export default function Header({ active, auth }) {
    const [isActive, setActive] = useState(false);
    const toggleNav = () => {
        setActive(!isActive);
    };
    const cart_num = usePage().props.cr_cart[0]["cart_num"];

    function scrollToTop() {
        document.body.scrollIntoView({
            behavior: "smooth",
        });
    }

    const [dark, setDark] = useState(() => {
        localStorage.getItem("theme") == "dark" ? true : false;
    });

    const [top, isTop] = useState(true);
    window.onscroll = function () {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            isTop(false);
        } else {
            isTop(true);
        }
    };

    /**
     * Toggles the theme of the document element based on the value of the 'dark' variable.
     *
     * @param {boolean} dark - A boolean value indicating whether the dark theme should be applied.
     */
    const switchTheme = () => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.getItem("theme") == "dark"
                ? null
                : localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.getItem("theme") == "light"
                ? null
                : localStorage.setItem("theme", "light");
        }
    };

    return (
        <header
            className={
                "w-full sticky top-0 z-50 lg:p-2 " +
                (top ? " dark:bg-purple-dark bg-indigo-100 " : " dark:bg-purple-active shadow-lg backdrop-blur-xl bg-indigo-100")
            }
        >
            <div className="flex justify-between w-full p-2">
                <button
                    onClick={() => {
                        scrollToTop();
                    }}
                >
                    <img
                        src={tspace}
                        style={{
                            width: "80px",
                            height: "30px",
                        }}
                    />
                </button>
                <div className="hidden flex-row justify-center border-indigo-200 items-center rounded-2xl focus:border-indigo-500 border-2">
                    <input
                        type="text"
                        placeholder="search"
                        className="rounded-l-2xl p-2 px-4 focus:outline-none bg-white"
                    />
                    <button className="rounded-r-2xl p-2 bg-white text-lg text-indigo-500">
                        <MdSearch />
                    </button>
                </div>
                <ul className="lg:flex md:flex gap-6 justify-center items-center hidden uppercase">
                    <li>
                        <NavLink
                            href="/"
                            active={active == "home" ? true : false}
                        >
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/" active={active == "" ? true : false}>
                            account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/" active={active == "" ? true : false}>
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/" active={active == "" ? true : false}>
                            news
                        </NavLink>
                    </li>
                </ul>
                <div className="flex justify-between lg:gap-10 gap-5 ">
                    <ul className="lg:flex md:flex gap-5 justify-center items-center hidden">
                        <li>
                            <CartButton num={cart_num} />
                        </li>
                        <li>
                            <Toggle
                                action={() => {
                                    setDark(!dark);
                                    switchTheme();
                                }}
                                isDark={dark}
                            />
                        </li>
                    </ul>
                    <div className="lg:hidden md:hidden">
                        <CartButton num={cart_num} />
                    </div>
                    <button
                        onClick={toggleNav}
                        className="hover:bg-white text-[30px] bg-gray-800 p-2 rounded-md hover:text-indigo-500 text-gray-300 duration-200 border-none focus:outline-0 lg:hidden md:hidden flex"
                    >
                        {isActive ? <AiFillCloseCircle /> : <BiMenuAltRight />}
                    </button>
                </div>
            </div>
            <div
                className={
                    "flex flex-col gap-5 bg-indigo-200/50 dark:bg-[#1a1c27] backdrop-blur-lg sticky transition-all duration-700  ease-in-out z-50" +
                    (isActive
                        ? " lg:hidden h-screen opacity-100"
                        : " h-0 opacity-0")
                }
            >
                <div className="flex p-5 justify-center items-start uppercase">
                    <Transition
                        className="flex flex-col items-center gap-5"
                        as="ul"
                        appear={true}
                        show={isActive}
                    >
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <NavLink
                                href="/"
                                active={active == "home" ? true : false}
                            >
                                home
                            </NavLink>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <NavLink
                                href={"/shopping"}
                                active={active == "shopping" ? true : false}
                            >
                                about
                            </NavLink>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <NavLink
                                href="/about"
                                active={active == "about" ? true : false}
                            >
                                account
                            </NavLink>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <NavLink
                                href="/orders"
                                active={active == "history" ? true : false}
                            >
                                news
                            </NavLink>
                        </Transition.Child>
                    </Transition>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 border-t-2 border-slate-500 p-5">
                    <Toggle
                        action={() => {
                            setDark(!dark);
                            switchTheme();
                        }}
                        isDark={dark}
                    />
                    <Menu as={"div"} className="inline-block">
                        <Menu.Button className="rounded-[50%] border-solid border-2 text-indigo-400 border-indigo-300 bg-indigo-200 dark:text-fill-dark dark:border-fill-dark">
                            {auth.auth.user ? (
                                <img
                                    src={auth.auth.user.path_img}
                                    className={
                                        "rounded-[50%] w-[80px] h-[80px] relative"
                                    }
                                />
                            ) : (
                                <BsPerson
                                    className={
                                        "rounded-[50%] w-[80px] h-[80px] relative "
                                    }
                                />
                            )}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className={
                                    "absolute flex flex-col w-56 origin-top-right rounded-md dark:bg-[#242736] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                                }
                            >
                                {auth.auth.user ? (
                                    <>
                                        <Menu.Item
                                            href={route("show.settings")}
                                            method="get"
                                            as="a"
                                        >
                                            <div
                                                className={
                                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize  dark:text-fill-dark gap-2 text-indigo-500"
                                                }
                                            >
                                                <MdSettings className="text-[30px]" />
                                                settings
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item
                                            href={route("logout")}
                                            method="post"
                                            as="a"
                                        >
                                            <div
                                                className={
                                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize dark:text-fill-dark gap-2 text-indigo-500"
                                                }
                                            >
                                                <BiLogOut className="text-[30px]" />
                                                log out
                                            </div>
                                        </Menu.Item>
                                    </>
                                ) : (
                                    <>
                                        <Menu.Item
                                            href={route("register")}
                                            method="get"
                                            as="a"
                                        >
                                            <div
                                                className={
                                                    "group flex w-full items-center rounded-md gap-2 px-2 py-2 text-sm capitalize dark:text-fill-dark text-indigo-500"
                                                }
                                            >
                                                <BiRegistered className="text-[30px]" />
                                                sign up
                                            </div>
                                        </Menu.Item>
                                        <Menu.Item
                                            href={route("login")}
                                            method="get"
                                            as="a"
                                        >
                                            <div
                                                className={
                                                    "group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm capitalize dark:text-fill-dark text-indigo-500"
                                                }
                                            >
                                                <BiLogIn className="text-[30px]" />
                                                log in
                                            </div>
                                        </Menu.Item>
                                    </>
                                )}
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
