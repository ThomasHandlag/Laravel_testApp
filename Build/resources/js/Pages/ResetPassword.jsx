import React, { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function ResetPassword(props) {
    const { data, setData, errors, reset } = useForm({
        email: props.email,
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const [acc, setAcc] = useState(false);
    const [code, setCode] = useState("");

    return (
        <GuestLayout>
            <Head title="Reset Password" />
            {acc ? (
                <div className="flex justify-center flex-col gap-5">
                    <span className="text-slate-600 font-bold">
                        Type the code we just send to your email
                    </span>
                    <TextInput
                        type="text"
                        name="vertify_code"
                        className="mt-1 block w-full"
                        handleChange={(e) => {
                            setCode(e.target.value);
                        }}
                    />
                    <div className="flex justify-between flex-row">
                        <button
                            className="p-2 px-4 bg-black rounded-lg text-cyan-500 w-max"
                            onClick={() => {
                                Inertia.get("save.password", {
                                    code: code,
                                    password: data.password,
                                    email: data.email,
                                });
                            }}
                        >
                            Confirm
                        </button>
                        <button
                            className="p-2 px-4 bg-black rounded-lg text-cyan-500 w-max"
                            onClick={() => {
                                Inertia.get("require.check");
                            }}
                        >
                            Resend
                        </button>
                    </div>
                </div>
            ) : (
                <form>
                    <div>
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            placeholder={"Email"}
                        />
                    </div>

                    <div className="mt-4">
                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            isFocused={true}
                            placeholder={"New password"}
                            handleChange={onHandleChange}
                        />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            placeholder={"Confirm password"}
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button
                            className="p-2 px-4 bg-black rounded-lg text-cyan-500"
                            onClick={() => {
                                setAcc(true);
                                Inertia.get("require.check");
                            }}
                        >
                            Next step
                        </button>
                    </div>
                </form>
            )}
        </GuestLayout>
    );
}
