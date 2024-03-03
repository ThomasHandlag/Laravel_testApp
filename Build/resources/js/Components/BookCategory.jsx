import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-react";

export default function BookCategory(book) {
    let dark = book.dark;
    const url = usePage().props.auth.user
        ? "detail.book.auth"
        : "detail.book.guest";
    const loadDetail = () => {
        Inertia.get(url, { id: book.id }, { preserveScroll: true });
    };
    return (
        <>
            <div className="gap-2 shadow-xl w-10/12 bg-white dark:bg-purple-container">
                <div className="break-words relative">
                    <img
                        src={book.image}
                        className="object-fill relative"
                        onClick={loadDetail}
                    />
                    <div className="absolute bg-opacity-20 gap-2 top-0 flex justify-between">
                        {book.discount_offer ? (
                            <div className="rounded-[50%] bg-red-700 dark:bg-red-400 p-2 top-0 text-center transition-all ease-in-out ping duration-100">
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
                            <div className="bg-slate-60 p-2 bg-slate-500 dark:bg-purple-container">
                                <p className="text-stone-200 dark:text-white">
                                    Sold out
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="p-2">
                    <div className="">
                        <p className="text-ellipsis text-left whitespace-nowrap overflow-hidden dark:text-white">
                            {book.title}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-center text-red-700 font-bold dark:text-red-400">
                            $
                            {book.discount_offer
                                ? book.price - book.price / book.discount_offer
                                : book.price}
                        </p>
                        <p className="text-slate-600 dark:text-indigo-50 line-through">
                            ${book.price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
