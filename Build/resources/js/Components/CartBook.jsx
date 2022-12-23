import React from "react";
import { MdOutlinePayment } from "react-icons/md/index";
import { FaTrashAlt } from "react-icons/fa/index";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function CartBook(attr) {
    const onPay = () => {
        Inertia.get("buy.book", {
            id: attr.book_id,
        });
    };

    const onRemove = () => {
        Inertia.get("remove.cart", {
            id: attr.cart_id,
        });
    };
    const [quantity, setQuantity] = useState(attr.num);

    return (
        <tr>
            <td>
                <img
                    className="rounded-2xl shadow-2xl w-[100px] h-[150px]"
                    src={attr.path_img}
                />
            </td>
            <td>
                <h4 className="text-center p-2 border-x-2">{attr.title}</h4>
            </td>
            <td>
                <div className="flex flex-row rounded-xl shado w-xl border-2 border-indigo-500 bg-white text-indigo-500 w-max">
                    <button
                        className="p-2 pl-5 pr-5 rounded-l-xl  hover:bg-slate-100"
                        onClick={() => {
                            setQuantity(quantity + 1);
                            Inertia.get("set.num", {
                                num: quantity + 1,
                                id: attr.cart_id,
                            });
                        }}
                    >
                        +
                    </button>
                    <span
                        className="p-2 border-l-2 border-r-2 pl-4 pr-4"
                        onChange={() => setTol(quantity * attr.price)}
                    >
                        {quantity < 1 ? 1 : quantity}
                    </span>
                    <button
                        className="p-2 pl-5 pr-5 rounded-r-xl hover:bg-slate-100"
                        onClick={() => {
                            setQuantity(quantity - 1);
                            Inertia.get("set.num", {
                                num: quantity - 1,
                                id: attr.cart_id,
                            });
                        }}
                        disabled={quantity <= 1 ? true : false}
                    >
                        -
                    </button>
                </div>
            </td>

            <td>
                <h4 className="text-cneter p-2">{attr.price * attr.num}</h4>
            </td>
            <td>
                <div className="flex flex-col gap-2 justify-end item-center w-max text-white">
                    <button
                        className="shadow-lg rounded-xl p-2 bg-indigo-600 lg:px-5 lg:text-[20px]"
                        onClick={onPay}
                    >
                        <MdOutlinePayment />
                    </button>
                    <button
                        className="shadow-lg rounded-xl p-2 bg-indigo-600 lg:px-5 lg:text-[20px]"
                        onClick={onRemove}
                    >
                        <FaTrashAlt />
                    </button>
                </div>
            </td>
        </tr>
    );
}
