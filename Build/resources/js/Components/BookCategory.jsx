import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";

export default function BookCategory(book) {
    const url = usePage().props.auth.user
        ? "detail.book.auth"
        : "detail.book.guest";
    const loadDetail = () => {
        Inertia.get(url, { id: book.id });
    };
    return (
        <>
            <div className="gap-2 shadow-xl w-11/12 lg:mb-10 mb-5 hover:shadow-slate-900 rounded-b-xl duration-500 bg-white">
                <div className="break-words relative">
                    <img
                        src={book.image}
                        className="object-fill relative"
                        onClick={loadDetail}
                    />
                    <div className="absolute bg-opacity-20 gap-2 top-0 flex justify-between">
                        {book.discount_offer ? (
                            <div className="rounded-[50%] bg-red-700 p-2 top-0 text-center">
                                <p className="text-white">
                                    {book.discount_offer}
                                    <small>%</small>
                                </p>
                            </div>
                        ) : (
                            ""
                        )}
                        {book.quantity > 0 ? (
                            ""
                        ) : (
                            <div className="bg-slate-60 p-2 bg-slate-500">
                                <p className="text-stone-200">Sold out</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-5">
                    <div className="">
                        <p className="text-ellipsis text-left whitespace-nowrap overflow-hidden">
                            {book.title}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-center text-red-700 font-bold">
                            $
                            {book.discount_offer
                                ? book.price - book.price / book.discount_offer
                                : book.price}
                        </p>
                        {book.discount_offer ? (
                            <p className="text-slate-600 line-through">
                                ${book.price}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
