import tspace from "../../images/tspace.png";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { BiMenuAltRight } from "react-icons/bi/index";
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

export default function Header({ active, auth }) {
    const [isActive, setActive] = useState(false);
    const toggleNav = () => {
        setActive(!isActive);
    };
    const cart_num = usePage().props.cr_cart[0]['cart_num'];
    return (
        <header
            className={
                "bg-gradient-to-r from-slate-800 to-slate-800 w-full sticky top-0 z-50"
            }
        >
            <div className="flex">
                <div className="flex justify-between w-full p-6">
                    <Link href="/">
                        {" "}
                        <img
                            src={tspace}
                            style={{
                                width: "90px",
                                height: "40px",
                            }}
                        />
                    </Link>
                    <div className="flex justify-between lg:gap-10 gap-5">
                        {active == "shopping" ? (
                            ""
                        ) : (
                            <div className="hover:bg-white rounded-xl text-cyan-500 hover:text-black flex">
                                <Link
                                    className="p-2 text-[30px]"
                                    href="/shopping"
                                >
                                    <AiOutlineShoppingCart />
                                </Link>
                                <span className="w-[25px] h-[25px] border-rounded-[50%]">
                                    {cart_num ? cart_num : 0}
                                </span>
                            </div>
                        )}
                        <button
                            onClick={toggleNav}
                            className="hover:bg-white fs-30 rounded-md hover:text-gray-900 text-cyan-300 duration-200"
                        >
                            <BiMenuAltRight />
                        </button>
                    </div>
                </div>
                <div
                    className={
                        isActive
                            ? "overlay grid grid-cols-3 lg:gap-3 gap-2 is-showed"
                            : "overlay grid grid-cols-3 lg:gap-3 gap-2 is-hidden"
                    }
                >
                    <div>
                        <ul className="flex flex-col items-center h-screen pt-10 gap-10">
                            <li className="flex items-center px-1 pt-1 m-t-10">
                                <a
                                    className="circle text-[35px] text-black hover:text-white duration-150"
                                    target="_blank"
                                    href="https:/facebook.com"
                                >
                                    <BsFacebook />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="circle text-[35px] text-black hover:text-white duration-150"
                                    target="_blank"
                                    href="https://github.com/ThomasHandlag/Laravel_testApp"
                                >
                                    <BsGithub />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="circle text-[35px] text-black hover:text-white duration-150"
                                    target="_blank"
                                    href="https:/instagram.com"
                                >
                                    <BsInstagram />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="circle text-[35px] text-black hover:text-white duration-150"
                                    target="_blank"
                                    href="https:/pinterest.com"
                                >
                                    <BsPinterest />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col justify-items-center items-center gap-6 pt-10">
                            <li className="p-2 uppercase m-t-10 text-cyan-400">
                                <NavLink
                                    href="/"
                                    active={active == "home" ? true : false}
                                >
                                    home
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase text-cyan-400">
                                <NavLink
                                    href={"/shopping"}
                                    active={active == "shopping" ? true : false}
                                >
                                    shopping
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase">
                                <NavLink
                                    href="/about"
                                    active={active == "about" ? true : false}
                                >
                                    about
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase">
                                <NavLink
                                    href="/orders"
                                    active={active == "history" ? true : false}
                                >
                                    history
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex h-fit justify-end p-3">
                            <button
                                onClick={toggleNav}
                                className="btn btn-white circle fs-30"
                            >
                                <AiFillCloseCircle />
                            </button>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="rounded-[50%]">
                                <img
                                    src={
                                        auth.auth.user
                                            ? auth.auth.user.path_img
                                            : guest
                                    }
                                    className={
                                        auth.auth.user
                                            ? "rounded-[50%] border-solid border-2 border-emerald-300 w-[50px] h-[50px] lg:w-[150px] lg:h-[150px] relative"
                                            : "bg-white " +
                                              "rounded-[50%] border-solid border-2 border-emerald-300 w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] relative"
                                    }
                                />
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className="text-[15px] lg:text-[20px] pt-5 border-b-2 border-violet-900">
                                            {auth.auth.user
                                                ? auth.auth.user.name
                                                : ""}
                                            <RiArrowDropDownLine className="text-[30px] text-black cursor-pointer" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        {auth.auth.user ? (
                                            <>
                                                <Dropdown.Link
                                                    href={route(
                                                        "show.settings"
                                                    )}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Setting
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Link
                                                    href={route("register")}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Register
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("login")}
                                                    method="get"
                                                    as="button"
                                                >
                                                    Log in
                                                </Dropdown.Link>
                                            </>
                                        )}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
