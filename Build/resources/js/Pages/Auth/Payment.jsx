import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { MdOutlinePayment, MdWatchLater } from "react-icons/md/index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Inertia } from "@inertiajs/inertia";
import InputError from "@/Components/InputError";
import { AiFillDownCircle } from "react-icons/ai/index";
import { useState } from "react";

export default function Payment(props) {
    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const { data, setData } = useForm({
        name: "",
        phone: "",
        province: "",
        district: "",
        street: "",
        vertify: "",
    });
    const merge = () => {
        let books = [];
        props.books.map((e) => {
            books.push({
                id: e.id,
                quan: e.num,
                price: e.price,
                tit: e.title,
                cart_id: e.cart_id,
            });
        });
        return books;
    };
    const submit = (e) => {
        e.preventDefault();
        Inertia.post("request.buy", {
            alist: merge(),
            vertify: data.vertify,
        });
    };
    return (
        <>
            <Header active={""} auth={props} />
            <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-10 gap-4">
                <div className="col-span-3 overflow-auto lg:border-none lg:h-[90vh] h-[50vh] border-2">
                    {props.books.map((e) => (
                        <ProductList list={e} key={e.id} />
                    ))}
                </div>
                <div className="col-span-4 gap-4 items-center pb-10">
                    {props.paymethod ? (
                        <DisInforField data={data} books={merge()} />
                    ) : (
                        <form
                            className="flex flex-col items-cnter justify-center shadow-2xl rounded-xl p-2 gap-5"
                            onSubmit={submit}
                        >
                            <div className="flex flex-col gap-5">
                                <InputLabel className="p-5 text-slate-500">
                                    Contact Infor
                                    <span className="text-red-500">*</span>
                                </InputLabel>
                                <TextInput
                                    className="p-2 rounded-xl"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    handleChange={handleChange}
                                    defaultValue={data.name}
                                />
                                <InputError
                                    message={
                                        props.errors ? props.errors.name : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                                <TextInput
                                    className="p-2 rounded-xl"
                                    type="text"
                                    name="phone"
                                    handleChange={handleChange}
                                    defaultValue={data.name}
                                    placeholder="Phone number"
                                />
                                <InputError
                                    message={
                                        props.errors ? props.errors.phone : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                                <InputLabel className="border-t-2 p-5 border-slate-500">
                                    Address
                                    <span className="text-red-500">*</span>
                                </InputLabel>
                                <TextInput
                                    name="province"
                                    className="p-2 rounded-xl"
                                    placeholder={"Province"}
                                    handleChange={handleChange}
                                    defaultValue={data.province}
                                />
                                <InputError
                                    message={
                                        props.errors
                                            ? props.errors.province
                                            : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                                <TextInput
                                    name="district"
                                    className="p-2 rounded-xl"
                                    handleChange={handleChange}
                                    defaultValue={data.district}
                                    placeholder={"District capital"}
                                />
                                <InputError
                                    message={
                                        props.errors
                                            ? props.errors.district
                                            : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                                <TextInput
                                    name="street"
                                    className="p-2 rounded-xl"
                                    placeholder={"Street"}
                                    handleChange={handleChange}
                                    defaultValue={data.street}
                                />
                                <InputError
                                    message={
                                        props.errors ? props.errors.street : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                            </div>
                            <div className="flex flex-col gap-10">
                                <TextInput
                                    className="p-2 rounded-xl col-span-4"
                                    name="vertify"
                                    handleChange={handleChange}
                                    type="text"
                                    placeholder="Verification code"
                                    defaultValue={data.vertify}
                                />
                                <InputError
                                    message={
                                        props.errors
                                            ? props.errors.vertify_error
                                            : ""
                                    }
                                    className={"p-2 text-red-500"}
                                />
                                <button
                                    className="rounded-xl col-span-2 bg-slate-400 hover:bg-slate-600 hover:text-gray-50 w-max p-2 px-5"
                                    type="button"
                                    onClick={() => {
                                        Inertia.get("send.code");
                                    }}
                                >
                                    {props.errors.vertify_error
                                        ? "Resend"
                                        : "Get code"}
                                </button>
                            </div>
                            <button
                                className="p-2 pr-10 pl-10 hover:bg-red-500 text-gray-700 bg-green-400 rounded-xl w-max text-[30px]"
                                type="submit"
                            >
                                <AiFillDownCircle />
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

const ProductList = ({ list }) => {
    return (
        <div className="p-5 flex items-center justify-center flex-col gap-5">
            <img
                className="lg:w-[250px] lg:h-[350px] shadow-2xl border-2 "
                src={list.path_img}
            />
            <div className="flex flex-row rounded-xl shado w-xl border-2 border-gray-300">
                <span className="p-2 border-l-2 border-r-2 pl-4 pr-4 text-slate-700">
                    Num of books: {list.num}
                </span>
            </div>
            <div className="border-2 border-slate-400 p-2 px-5 rounded-xl shadow-md bg-green-200">
                <span className="p-2 pl-4 pr-4">Total price:</span>
                {list.num * list.price}
            </div>
        </div>
    );
};

const DisInforField = ({ data, books }) => {
    const [sl, setSl] = useState(1);
    const onSel = (e) => {
        setSl(e.target.value);
    };
    return (
        <div className="flex flex-col items-cnter justify-center shadow-2xl rounded-xl p-2 gap-5">
            <div className="flex flex-col gap-5">
                <InputLabel className="p-5 text-slate-500">
                    Contact Infor
                </InputLabel>
                <span className="p-2 rounded-xl shadow-sm border-gray-400 text-slate-700 border-2">
                    Name: {data.name}
                </span>

                <span className="p-2 rounded-xl shadow-sm border-gray-400 text-slate-700 border-2">
                    Phone: {data.phone}
                </span>

                <InputLabel className="border-t-2 p-5 border-slate-500">
                    Address
                </InputLabel>
                <span className="p-2 rounded-xl shadow-sm border-gray-400 text-slate-700 border-2">
                    Province: {data.province}
                </span>

                <span className="p-2 rounded-xl shadow-sm border-gray-400 text-slate-700 border-2">
                    District: {data.district}
                </span>
                <span className="p-2 rounded-xl shadow-sm border-gray-400 text-slate-700 border-2">
                    Street: {data.street}
                </span>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-3 justify-start items-center bg-slate-200 p-2 rounded-md">
                    <label className="">Pay when I have got product</label>
                    <input
                        className=""
                        type={"radio"}
                        name="paymethod"
                        value={1}
                        onSelect={(e) => onSel(e)}
                        defaultChecked
                    />
                </div>
                <div className="flex flex-row gap-3 justify-start items-center bg-slate-200 p-2 rounded-md">
                    <label className="">By Momo</label>
                    <input
                        className=""
                        type={"radio"}
                        name="paymethod"
                        onSelect={(e) => onSel(e)}
                        value={2}
                    />
                </div>
                <div className="flex flex-row gap-3 justify-start items-center bg-slate-200 p-2 rounded-md">
                    <label className="">E-Mobile-Banking</label>
                    <input
                        className=""
                        type={"radio"}
                        name="paymethod"
                        onSelect={(e) => onSel(e)}
                        value={3}
                    />
                </div>
            </div>
            <button
                className="bg-gray-800 p-2 text-[30px] rounded-xl shadow-md text-cyan-500 w-max px-5"
                onClick={() => {
                    Inertia.post("book.success", {
                        data: data,
                        alist: books,
                        p_m: sl,
                    });
                }}
            >
                <MdOutlinePayment />
            </button>
        </div>
    );
};
