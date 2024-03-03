import React from "react";
import BookCategory from "@/Components/BookCategory";
import { usePage } from "@inertiajs/inertia-react";

const Catalog = (data) => {
    const { auth } = usePage().props.auth;
    return (
        <div className="flex flex-col lg:p-5 md:p-5 dark:border dark:border-purple-container shadow-inner shadow-slate-500 rounded-md">
            <span className="text-center capitalize text-slate-600 dark:text-indigo-300">
                {data.title}
            </span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-5">
                {data.books.slice(0, 5).map((element) => (
                    <BookCategory
                        title={element.title}
                        price={element.price}
                        key={element.id}
                        id={element.id}
                        image={element.path_img}
                        des={element.description}
                        author={element.author}
                        category={element.category}
                        quantity={element.quantity}
                        authenticated={auth ? auth.user : null}
                        discount_offer={element.discount_offer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
