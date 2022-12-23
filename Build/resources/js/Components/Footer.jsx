import React from "react";
import tspace from "../../images/tspace.png";
import NavLink from "@/Components/NavLink";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillGithub,
    AiFillRedditCircle,
    AiFillPhone,
    AiOutlineLink,
    AiOutlineMail,
    AiOutlinePhone,
} from "react-icons/ai/index";
import { MdLocationPin } from "react-icons/md/index";
import { FaIntercom } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col bg-white">
            <div className="flex lg:flex-row flex-col bg-violet-800 justify-between px-5">
                <NavLink href={"/"} className={" bg-transparent"}>
                    <img src={tspace} className="w-[180px] h-[60px]" />
                </NavLink>
                <div className="flex flex-row gap-5 items-center justify-start">
                    <div className="text-[25px] font-bold  text-white p-2 text-center">
                        Follow us
                    </div>
                    <a
                        href={"https://facebook.com"}
                        className="text-[35px] text-white"
                    >
                        <AiFillFacebook />
                    </a>
                    <a
                        href={"https://instagram.com"}
                        className="text-[35px] text-white"
                    >
                        <AiFillInstagram />
                    </a>
                    <a
                        href="https://github.com/ThomasHandlag/Laravel_testApp"
                        className="text-[35px] text-white "
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href={"https://reddit.com"}
                        className="text-[35px] text-white"
                    >
                        <AiFillRedditCircle />
                    </a>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:px-10 lg:pb-10 px-5 pb-5 pt-5 gap-5 justify-between">
                <div className="flex flex-col">
                    <span className="text-[25px] flex flex-row gap-2 items-center">
                        Address <MdLocationPin />
                    </span>
                    <span className="break-words">
                        120 Tran Dai Nghia Street, Ngu Hanh Son, Da Nang city
                    </span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1671625775792!5m2!1svi!2s"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-md lg:w-[400px] lg:h-[400px]"
                    ></iframe>
                </div>
                <div className="flex flex-col">
                    <span className="text-[25px] flex flex-row gap-2 items-center">
                        Contact <AiFillPhone />
                    </span>
                    <span className="flex items-center gap-2 break-words p-2 border-b-2 hover:border-indigo-500">
                        Email <AiOutlineMail />:
                        <a
                            className="underline text-indigo-600"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=tspaceinc@gmail.com"
                            target={"_blank"}
                        >
                            tspaceinc@gmail.com
                        </a>
                    </span>
                    <span className="flex items-center gap-2 p-2 border-b-2 hover:border-indigo-500">
                        Phone <AiOutlinePhone />:{" "}
                        <a className="underline text-indigo-600">
                            (84+) 24119038
                        </a>
                    </span>
                    <span className="p-2 border-b-2 hover:border-indigo-500">
                        @TSpace.Inc 2019
                    </span>
                </div>
                <div className="flex flex-col gap-5 capitalize">
                    <span className="text-[25px] flex flex-row gap-2 items-center">
                        usefull links <AiOutlineLink />
                    </span>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="/about"
                    >
                        science
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        history
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="/about"
                    >
                        news
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        policy
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="/about"
                    >
                        payment methods
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        responsibility
                    </a>
                </div>
                <div className="flex flex-col gap-5 capitalize">
                    <span className="text-[25px] flex flex-row gap-2 items-center">
                        TSpace pages <FaIntercom />
                    </span>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="#"
                    >
                        TSpace - books
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        TSpaceSoft
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="/about"
                    >
                        TSpaceGalax
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        TSpaceLang
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href="/about"
                    >
                        TSpaceBio
                    </a>
                    <a
                        className="break-words p-2 border-b-2 hover:border-indigo-500"
                        href=""
                    >
                        Fired
                    </a>
                </div>
            </div>
            <span className="p-2 text-center bg-violet-700 text-white font-medium">
                @2022TSpace.Inc
            </span>
        </div>
    );
};
export default Footer;
