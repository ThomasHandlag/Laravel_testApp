import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import CartBook from "@/Components/CartBook";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/Footer";
import { MdOutlinePayments } from "react-icons/md/index";

export default function Shopping(props) {
    let list_id = [];
    props.cart.map((e) => {
        list_id.push(e.id);
    });
    return (
        <>
            <Header active="shopping" auth={props} />
            {props.auth.user ? (
                <div className="lg:p-4">
                    <div className="grid grid-rows-1 lg:grid-cols-8 lg:gap-10">
                        <div className="flex flex-col lg:col-span-2 row-span-1 p-5 justify-center items-center border-2 shadow-xl lg:gap-10 gap-4">
                            <div className="flex flex-col gap-5 justify-center items-center">
                                <img
                                    src={props.auth.user.path_img}
                                    className="rounded-full w-[150px] h-[150px] shadow-xl"
                                />
                                <span className="text-slate-700 center">
                                    {props.auth.user.name}
                                </span>
                            </div>
                            <button
                                className="text-cyan-500 bg-gray-800 hover:bg-green-500 hover:text-gray-100 p-2 text-[30px] rounded-xl px-5"
                                onClick={() => {
                                    Inertia.get("buy.group", {
                                        list_id: list_id,
                                    });
                                }}
                            >
                                <MdOutlinePayments />
                            </button>
                        </div>
                        <div className="bg-gray-300 lg:col-span-6 row-span-1 overflow-auto h-[90%] flex flex-col gap-4 p-2 rounded-md shadow-md">
                            {props.cart.length > 0 ? (
                                props.cart.map((e) => (
                                    <CartBook
                                        cart_id={e.cart_id}
                                        book_id={e.id}
                                        key={e.id}
                                        title={e.title}
                                        path_img={e.path_img}
                                        price={e.price}
                                        num={e.num}
                                    />
                                ))
                            ) : (
                                <p className="text-slate-600 p-2">
                                    You don't have any book yet
                                    <a href="/" className="text-blue-500 p-2">
                                        Shop now
                                    </a>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-rows-1 gap-3 lg:h-[48vh]">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center shadow-gray-800 w-6/12 h-4/6 justify-between gap-2 text-slate-700 flex-col">
                            <h1 className="text-cyan-900 text-center p-2 text-lg">
                                You are not sign in yet?
                            </h1>
                            <Link
                                href="login"
                                className="shadow-slate-700 rounded-lg bg-gray-800 text-white p-2"
                                type="button"
                            >
                                Sign in now
                            </Link>
                            Or
                            <Link
                                href="register"
                                className="shadow-slate-700 rounded-lg bg-gray-800 text-white p-2"
                                type="button"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}
