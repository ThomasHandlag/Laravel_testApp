import React from "react";
import BookCategory from "@/Components/BookCategory";
import { usePage } from "@inertiajs/inertia-react";

const Catalog = (data) => {
    const { auth } = usePage().props.auth;
    return (
        <div className="flex flex-col lg:col-span-5 gap-5">
            <div className="p-5 shadow-md flex items-center justify-center">
                <span className="text-center capitalize text-[40px] text-slate-600">
                    {data.title}
                </span>
            </div>
            <div className="grid grid-cols-2 gap-1 md:grid-cols-2 md:gap-3 lg:grid-cols-5 lg:gap-5">
                {data.books.map((element) => (
                    // (data.slice ? data.books.slice(0, 5) : data.books).map((element) => (
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
