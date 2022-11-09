import React from "react";
export default function IntroScene() {
    return (
        <>
            <div className="w-full bg-gradient-to-tr from-blue-700 via-indigo-900 to-violet-800 h-screen flex justify-center">
                <div className="backdrop-blur-md bg-black/50 absolute w-full h-screen inline-flex items-center justify-center flex-col gap-10">
                    <div>
                        <h1 className="text-center text-white lg:text-[70px] text-[30px] font-mono font-black ">
                            TSpace - Book{" "}
                        </h1>
                        <h2 className="text-center text-white lg:text-[30px] text[15px] font-mono font-bold">
                            Open the book, Open your mind
                        </h2>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="text-[20px] bg-indigo-400 text-white rounded-3xl px-5 py-2 hover:bg-gradient-to-r from-indigo-600 to-indigo-500 duration-700 focus:rounded-3xl">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
