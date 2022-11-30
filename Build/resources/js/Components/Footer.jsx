import React from "react";
import tspace from "../../images/tspace.png";
import { Link } from "@inertiajs/inertia-react";
import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillGithub,
    AiFillRedditCircle,
    AiFillPhone,
} from "react-icons/ai/index";
import { MdLocationPin } from "react-icons/md/index";

const Footer = () => {
    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-1 pt-10 bg-slate-800 h-3/6">
            <div className="lg:pl-10 flex items-center flex-col gap-10">
                <Link href={"/"}>
                    <img src={tspace} className="w-[180px] h-[60px]" />
                </Link>
                <Link className="text-cyan-400 text-center">@TSpace.com</Link>
            </div>
            <div className="text-white flex flex-row lg:gap-5 gap-2 items-center break-words justify-center">
                <div>
                    <span className="text-[25px]">
                        Address <MdLocationPin />
                    </span>
                    <ul>
                        <li className="break-words">
                            120 Tran Dai Nghia Street, Ngu Hanh Son, Da Nang
                            city
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="text-[25px]">
                        Contact <AiFillPhone />
                    </span>
                    <ul>
                        <li className="break-words">
                            Email: tspaceinc@gmail.com 
                            <br/> Phone: (84+) 24119038
                            <br/>@TSpace.Inc 2019{" "}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="text-[25px] font-bold  text-white p-2 text-center pb-4">
                    Follow us
                </div>
                <ul className="flex flex-row xl:flex-col lg:flex-col text-center lg:gap-5 gap-2 items-center justify-center">
                    <li>
                        <Link href={"https://facebook.com"}>
                            <AiFillFacebook className="text-[35px] text-blue-500 hover:text-white" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://instagram.com"}>
                            <AiFillInstagram className="text-[35px] text-blue-500 hover:text-white" />
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/ThomasHandlag/Laravel_testApp">
                            <AiFillGithub className="text-[35px] text-blue-500 hover:text-white" />
                        </a>
                    </li>
                    <li>
                        <Link href={"https://reddit.com"}>
                            <AiFillRedditCircle className="text-[35px] text-blue-500 hover:text-white" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Footer;
