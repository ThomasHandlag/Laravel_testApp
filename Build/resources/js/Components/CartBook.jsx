import React from "react";
import { MdOutlinePayment } from "react-icons/md/index";
import { FaTrashAlt } from "react-icons/fa/index";
import { Inertia } from "@inertiajs/inertia";

export default function CartBook(attr) {

    const onPay = () =>{
        Inertia.get('buy.book', {
            id: attr.book_id,
        });
        // console.log(attr.book_id)
    }

    const onRemove = () =>{
        Inertia.get('remove.cart', {
           id: attr.cart_id,
        });
    }
    return (
        <div className="flex flex-row gap-2 justify-left items-center">
            <img className="rounded-2xl shadow-2xl w-[100px] h-[150px]" src={attr.path_img} />
            <h4 className="text-center p-2 border-x-2">{attr.title}</h4>
            <h4 className="text-cneter p-2">{attr.price}</h4>
            <div className="flex flex-col gap-2 justify-end item-center">
                <button className="shadow-lg rounded-xl p-2 bg-green-500 lg:px-5 lg:text-[20px]" onClick={onPay}>
                    <MdOutlinePayment />
                </button>
                <button className="shadow-lg rounded-xl p-2 bg-red-500 lg:px-5 lg:text-[20px]" onClick={onRemove}>
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
}
