import tspace from "../../images/tspace.png";
import React, { Fragment, useEffect, useState } from "react";
import NavLink from "./NavLink";
import { BiMenuAltRight, BiRegistered } from "react-icons/bi/index";
import { AiFillCloseCircle } from "react-icons/ai/index";
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsPinterest,
} from "react-icons/bs/index";
import { RiArrowDropDownLine } from "react-icons/ri/index";
import guest from "../../images/guest.png";
import { Link, usePage } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";
import { AiOutlineShoppingCart } from "react-icons/ai/index";
import { Menu, Transition } from "@headlessui/react";
import { MdSettings } from "react-icons/md";
import { BiLogOut, BiLogIn } from "react-icons/bi/index";

export default function Header({ active, auth }) {
    const [isActive, setActive] = useState(false);
    const toggleNav = () => {
        setActive(!isActive);
    };
    const cart_num = usePage().props.cr_cart[0]["cart_num"];

    function scrollToTop() {
            document.body.scrollIntoView({
                behavior: "smooth"
            })
    }
    return (
        <header className={"bg-violet-800 w-screen sticky top-0 z-50"}>
            <div className="flex justify-between w-full p-6">
                <button onClick={() => {
                    scrollToTop()
                }}>
                    <img
                        src={tspace}
                        style={{
                            width: "90px",
                            height: "40px",
                        }}
                    />
                </button>
                <div className="flex justify-between lg:gap-10 gap-5">
                    {active == "shopping" ? (
                        ""
                    ) : (
                        <div className="hover:bg-white rounded-xl bg-gray-800 text-gray-200 hover:text-indigo-700 flex">
                            <Link className="p-2 text-[30px]" href="/shopping">
                                <AiOutlineShoppingCart />
                            </Link>
                            <span className="w-[25px] h-[25px] border-rounded-[50%]">
                                {cart_num ? cart_num : 0}
                            </span>
                        </div>
                    )}
                    <button
                        onClick={toggleNav}
                        className="hover:bg-white text-[30px] bg-gray-800 p-2 rounded-md hover:text-indigo-500 text-gray-300 duration-200 border-none focus:outline-0"
                    >
                        {isActive ? <AiFillCloseCircle /> : <BiMenuAltRight />}
                    </button>
                </div>
            </div>
            <div
                className={
                    "grid grid-rows-2 bg-violet-800 fixed transition-all duration-500 w-full z-50" +
                    (isActive
                        ? "overlay is-showed opacity-100"
                        : "overlay is-hidden opacity-0")
                }
            >
                <div className="grid grid-cols-8 top-[100px]">
                    <Transition
                        show={isActive}
                        appear={true}
                        as="div"
                        className="flex flex-col items-center col-span-4 gap-5"
                    >
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <a
                                className="text-white flex gap-2 items-center"
                                target="_blank"
                                href="https:/facebook.com"
                            >
                                <BsFacebook className="text-[35px]" />
                                facebook
                            </a>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <a
                                className="text-white flex gap-2 items-center"
                                target="_blank"
                                href="https://github.com/ThomasHandlag/Laravel_testApp"
                            >
                                <BsGithub className="text-[35px]" />
                                github
                            </a>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <a
                                className="text-white flex gap-2 items-center"
                                target="_blank"
                                href="https:/instagram.com"
                            >
                                <BsInstagram className="text-[35px]" />
                                instagram
                            </a>
                        </Transition.Child>
                        <Transition.Child
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="opacity-0 -translate-x-full"
                            enterTo="opacity-100 translate-x-0"
                        >
                            <a
                                className="text-white flex gap-2 items-center"
                                target="_blank"
                                href="https:/pinterest.com"
                            >
                                <BsPinterest className="text-[35px]" />
                                pinterest
                            </a>
                        </Transition.Child>
                    </Transition>
                    <Transition
                        className="flex flex-col items-center gap-5 col-span-4"
                        as="div"
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
                                shopping
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
                                about
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
                                history
                            </NavLink>
                        </Transition.Child>
                    </Transition>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <div className="rounded-[50%]">
                        <img
                            src={
                                auth.auth.user ? auth.auth.user.path_img : guest
                            }
                            className={
                                "rounded-[50%] border-solid border-2 border-emerald-300 w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] relative"
                            }
                        />
                    </div>
                    <Menu as={"div"} className="inline-block">
                        <Menu.Button className="text-[15px] lg:text-[20px] border-b-2 border-violet-900 bg-white flex p-2 text-black rounded-md ">
                            {auth.auth.user ? auth.auth.user.name : "Options"}
                            <RiArrowDropDownLine className="text-[30px] text-black cursor-pointer" />
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
                                    "absolute flex flex-col w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
                                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize hover:bg-violet-500 hover:text-white gap-2 text-indigo-500"
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
                                                    "group flex w-full items-center rounded-md px-2 py-2 text-sm capitalize hover:bg-violet-500 hover:text-white gap-2 text-indigo-500"
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
                                                    "group flex w-full items-center rounded-md gap-2 px-2 py-2 text-sm capitalize hover:bg-violet-500 hover:text-white text-indigo-500"
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
                                                    "group flex w-full gap-2 items-center rounded-md px-2 py-2 text-sm capitalize hover:bg-violet-500 hover:text-white text-indigo-500"
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
