import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import CartBook from "@/Components/CartBook";

export default function Shopping(props) {
    console.log(props.cart)
    return (
        <>
            <Header active="shopping" auth={props} />
            {props.auth.user ? (
                <div className="container lg:p-5">
                    <div className="grid grid-rows-1 lg:grid-cols-6">
                        <div className="lg:col-span-2 row-span-1 p-5 justify-center items-center border-2 shadow-xl">
                            <div className="flex flex-col gap-5 justify-center items-center">
                                <img
                                    src={props.auth.user.path_img}
                                    className="rounded-full w-[150px] h-[150px] shadow-xl"
                                />
                                <span className="text-slate-700 center">
                                    {props.auth.user.name}
                                </span>
                            </div>
                        </div>
                        <div className="bg-gray-300 lg:col-span-4 row-span-1">
                            {props.cart.map((e) => (
                                <CartBook
                                    cart_id={e.cart_id}
                                    book_id={e.id}
                                    key={e.id}
                                    title={e.title}
                                    path_img={e.path_img}
                                    price={e.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-rows-1 gap-3">
                    <div className="flex items-center justify-center pt-36">
                        <div className="flex items-center shadow-gray-800 w-6/12 h-4/6 justify-between gap-2">
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
        </>
    );
}
