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
import lake from "../../images/lake.png";
import { Link } from "@inertiajs/inertia-react";
import Dropdown from "@/Components/Dropdown";

export default function Header({ active, auth }) {
    const [isActive, setActive] = useState(false);
    console.log(auth);
    const toggleNav = () => {
        setActive(!isActive);
    };
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
                    <button
                        onClick={toggleNav}
                        className="btn-white fs-30 round-r-md"
                    >
                        <BiMenuAltRight />
                    </button>
                </div>
                <div
                    className={
                        isActive
                            ? "overlay grid grid-cols-3 lg:gap-3 gap-2 is-showed"
                            : "overlay grid grid-cols-3 lg:gap-3 gap-2 is-hidden"
                    }
                >
                    <div>
                        <ul className="flex flex-col justify-between items-center">
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="btn-ln circle fs-30 tx-cl-white"
                                    target="_blank"
                                    href="https:/facebook.com"
                                >
                                    <BsFacebook />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="btn-ln circle fs-30 tx-cl-white"
                                    target="_blank"
                                    href="https:/github.com"
                                >
                                    <BsGithub />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="btn-ln circle fs-30 tx-cl-white"
                                    target="_blank"
                                    href="https:/instagram.com"
                                >
                                    <BsInstagram />
                                </a>
                            </li>
                            <li className="items-center px-1 pt-1 m-t-10">
                                <a
                                    className="btn-ln circle fs-30 tx-cl-white"
                                    target="_blank"
                                    href="https:/pinterest.com"
                                >
                                    <BsPinterest />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col justify-items-center items-center gap-10">
                            <li className="p-2 uppercase m-t-10 text-cyan-400">
                                <NavLink
                                    href="/"
                                    active={active == "home" ? true : false}
                                >
                                    home
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase m-t-10 text-cyan-400">
                                <NavLink
                                    href="/shopping"
                                    active={active == "shopping" ? true : false}
                                >
                                    shopping
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase m-t-10">
                                <NavLink
                                    href="/about"
                                    active={active == "about" ? true : false}
                                >
                                    about
                                </NavLink>
                            </li>
                            <li className="p-2 uppercase m-t-10">
                                <NavLink
                                    href="/contact"
                                    active={active == "contact" ? true : false}
                                >
                                    contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex h-fit justify-end p-3">
                            <button
                                onClick={toggleNav}
                                className="btn btn-white circle fs-30"
                            >
                                <AiFillCloseCircle />
                            </button>
                        </div>
                        <div className="flex flex-col">
                            <div className="rounded-[50%]">
                                <img
                                    src={lake}
                                    className="rounded-[50%] border-solid border-2 border-emerald-300 w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]"
                                />
                            </div>
                            <div>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button>
                                            <RiArrowDropDownLine className="text-[30px] text-white cursor-pointer" />
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('home')} method="post" as="button">Setting</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
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
