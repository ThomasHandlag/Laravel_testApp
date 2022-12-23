import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Transition } from "@headlessui/react";
import ApplicationLogo from "./ApplicationLogo";

export default function IntroScene({ attr }) {
    //dark
    const url = usePage().props.auth.user
        ? "detail.book.auth"
        : "detail.book.guest";
    return (
        <>
            <div
                className={
                    "flex justify-center lg:flex-row inset-0"
                    // +(true ? " dark:bg-slate-800" : "")
                }
            >
                <div className="absolute inset-x-0 top-[10rem] -z-10 transform-gpu overflow-hidden sm:top-[-20rem] bg-white/40 blur-lg">
                    <ApplicationLogo />
                </div>
                <div className="relative w-full h-max inline-flex items-center justify-center flex-col gap-10">
                    <div>
                        <Transition show={true} appear={true}>
                            <Transition.Child
                                enter="transition ease-in-out duration-700 transform"
                                enterFrom="opacity-0 -translate-x-full"
                                enterTo="opacity-100 translate-x-0"
                            >
                                <h1 className="text-center text-indigo-600 lg:text-[70px] text-[30px] font-mono font-black ">
                                    TSpace - Book
                                </h1>
                            </Transition.Child>
                            <Transition.Child
                                enter="transition duration-900 transform"
                                enterFrom="opacity-0 -translate-x-full text-white/10"
                                enterTo="opacity-100 translate-x-0 text-white"
                            >
                                <h2 className="text-center text-indigo-500 lg:text-[30px] text[15px] font-mono font-bold">
                                    Open your book, Open your mind
                                </h2>
                            </Transition.Child>
                        </Transition>
                    </div>
                    <div className="flex justify-center items-end">
                        <div className="flex gap-5">
                            <Transition appear={true} show={true}>
                                <Transition.Child
                                    enter="transition duration-900 transform"
                                    enterFrom="opacity-0 -translate-x-full"
                                    enterTo="opacity-100 translate-x-0"
                                >
                                    <img
                                        src={attr[0].path_img}
                                        className="lg:w-[300px] lg:h-[450px]"
                                    />
                                </Transition.Child>
                            </Transition>
                        </div>
                        <div className="capitalize absolute flex flex-col text-center gap-10">
                            <button
                                onClick={() => {
                                    Inertia.get(url, { id: attr[0].id });
                                }}
                                className="motion-safe:animate-bounce text-[20px] bg-indigo-500 text-white rounded-3xl px-5 py-2 hover:bg-gradient-to-r from-indigo-600 to-indigo-400 duration-700 focus:rounded-3xl"
                            >
                                Buy now
                            </button>
                            <span className="ping bottom-0 text-[20px] p-2 text-white">best sale</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
