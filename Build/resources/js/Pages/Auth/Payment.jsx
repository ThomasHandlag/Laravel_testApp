import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import { MdOutlinePayment } from "react-icons/md/index";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputError from "@/Components/InputError";

export default function Payment(props) {
    // console.log(props);
    const [quantity, setQuantity] = useState(1);

    const handleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const [disableNumber, setDisNumber] = useState(true);
    const { data, setData } = useForm({
        name: "",
        phone: "",
        province: "",
        district: "",
        street: "",
        vertify: "",
    });

    const submit = (e) => {
        e.preventDefault();
        Inertia.post("request.buy", {
            data: data,
            tol: quantity * props.book[0].price,
        });
    };
    return (
        <>
            <Header active={""} auth={props} />
            <div className="grid lg:grid-cols-8 grid-cols-1">
                <div className="col-span-3 p-5 flex items-center justify-center flex-col gap-5" disabled={!disableNumber}>
                    <img
                        className="lg:w-[250px] lg:h-[350px] shadow-2xl border-2 "
                        src={props.book[0].path_img}
                    />
                    <div className="flex flex-row rounded-xl shado w-xl border-2 border-gray-300">
                        <button
                            className="p-2 pl-5 pr-5 rounded-l-xl  hover:bg-blue-600"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                        <span
                            className="p-2 border-l-2 border-r-2 pl-4 pr-4"
                            onChange={() =>
                                setTol(quantity * props.books[0].price)
                            }
                        >
                            {quantity < 1 ? 1 : quantity}
                        </span>
                        <button
                            className="p-2 pl-5 pr-5 rounded-r-xl hover:bg-red-600"
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity <= 1 ? true : false}
                        >
                            -
                        </button>
                    </div>
                    <div className="border-2 border-slate-400 p-2 px-5 rounded-xl shadow-md bg-green-200">
                        <span className="p-2 pl-4 pr-4">Total price:</span>
                        {quantity * props.book[0].price}
                    </div>
                </div>
                <div className="col-span-4 gap-4 items-center pb-10">
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
                            <TextInput
                                className="p-2 rounded-xl"
                                type="text"
                                name="phone"
                                handleChange={handleChange}
                                defaultValue={data.name}
                                placeholder="Phone number"
                            />

                            <InputLabel className="border-t-2 p-5 border-slate-500">
                                Address<span className="text-red-500">*</span>
                            </InputLabel>
                            <TextInput
                                name="province"
                                className="p-2 rounded-xl"
                                placeholder={"Province"}
                                handleChange={handleChange}
                                defaultValue={data.province}
                            />

                            <TextInput
                                name="district"
                                className="p-2 rounded-xl"
                                handleChange={handleChange}
                                defaultValue={data.district}
                                placeholder={"District capital"}
                            />
                            <TextInput
                                name="street"
                                className="p-2 rounded-xl"
                                placeholder={"Street"}
                                handleChange={handleChange}
                                defaultValue={data.street}
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
                            className="p-2 pr-10 pl-10 hover:bg-red-500 text-gray-700 bg-green-400 rounded-xl w-max"
                            type="submit" 
                        >
                            Submit {/* <MdOutlinePayment /> */}
                        </button>
                    </form>
                </div>
            </div>
            <PaymentMethod active={true} />
            <Footer />
        </>
    );
}
const PaymentMethod = (data, { active }) => {
    return (
        <div className={active ? "flex flex-col gap-10 bg-slate-400" : "hidden"}>
            <div className="flex gap-5 p-5">
                <img className="" />
            </div>
            <TextInput type="radio" name="paymentmethod" value={1} />
            <TextInput type="radio" name="paymentmethod" value={2} />
            <TextInput type="radio" name="paymentmethod" value={3} />
        </div>
    );
};
