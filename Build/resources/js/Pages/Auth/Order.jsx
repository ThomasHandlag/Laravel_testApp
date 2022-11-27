import React from "react";
import { MdRemoveShoppingCart, MdVisibility } from "react-icons/md/index";
import { TiTickOutline } from "react-icons/ti/index";
import { Inertia } from "@inertiajs/inertia";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Link } from "@inertiajs/inertia-react";
import { FaFileDownload } from "react-icons/fa";

export default function Order(props) {
    return (
        <>
            <Header active="history" auth={props} />
            <div className="w-full h-[90vh] overflow-auto">
                {props.data.length > 0 ? (
                    <table
                        className="table-auto border-collapse border-2 border-slate-300 w-full text-center text-slate-700"
                        cellSpacing={5}
                        cellPadding={5}
                    >
                        <thead>
                            <tr>
                                <th>Date order</th>
                                <th>State</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((e) => (
                                <OrderRow
                                    id={e.id}
                                    date_order={e.date_order}
                                    key={e.id}
                                    state_order={e.state_order}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="gap-2 text-slate-600 text-center">
                        <p className="text-[20px]">You don't have any order</p>
                        <Link
                            className="text-blue-500 text-[25px]"
                            href={route("home")}
                        >
                            Shop now
                        </Link>
                    </div>
                )}
                <p className="text-center text-[25px] text-slate-700">Detail</p>
                {props.detail ? <OrderDetail data={props.detail_data} /> : ""}
            </div>
            <Footer />
        </>
    );
}

const OrderRow = (infor) => {
    return (
        <tr>
            <td>{infor.date_order}</td>
            <td>
                <div className="flex justify-center">
                    {infor.state_order == 0 ? (
                        "In processing"
                    ) : (
                        <TiTickOutline className="text-green-500 text-[30px]" />
                    )}
                </div>
            </td>
            <td className="flex gap-5 justify-center">
                <button
                    className="bg-gray-700 hover:bg-gray-900 text-green-500 p-1 px-5 rounded-md shadow-lg"
                    onClick={() => {
                        Inertia.get("order.detail", {
                            id: infor.id,
                        });
                    }}
                >
                    <MdVisibility />
                </button>
                {infor.state_order == 1 ? (
                    <button
                        className="p-2 px-5 bg-gray-700 hover:bg-gray-900 text-cyan-500 rounded-lg"
                        onClick={() => {
                            Inertia.get("bill.download", { id: infor.id });
                        }}
                    >
                        <FaFileDownload />
                    </button>
                ) : (
                    <button
                        className="bg-gray-700 hover:bg-gray-900 text-red-500 p-1 px-5 rounded-md shadow-lg"
                        onClick={() => {
                            Inertia.get("cancel.order", {
                                id: infor.id,
                            });
                        }}
                    >
                        <MdRemoveShoppingCart />
                    </button>
                )}
            </td>
        </tr>
    );
};
const OrderDetail = ({ data }) => {
    function merge() {
        let tol = {
            p: 0,
            pro: 0,
        };
        data.map((e) => {
            tol.p += e.total_p;
            tol.pro += e.quan;
        });
        return tol;
    }
    return (
        <table
            className="table-auto border-collapse border-spacing-2 border-t-2 border-solid w-full text-center text-slate-700"
            cellSpacing={5}
            cellPadding={5}
        >
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Total price</th>
                    <th>Price per</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e) => (
                    <tr key={e.id}>
                        <td>
                            <button
                                className="text-blue-500"
                                onClick={() => {
                                    Inertia.get("detail.book.auth", {
                                        id: e.book_id,
                                    });
                                }}
                            >
                                {e.title}
                            </button>
                        </td>
                        <td>{e.quan}</td>
                        <td>{e.total_p}</td>
                        <td>{e.total_p / e.quan}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Total products: {merge().pro}</td>
                    <td>Total price: ${merge().p}</td>
                </tr>
            </tfoot>
        </table>
    );
};
