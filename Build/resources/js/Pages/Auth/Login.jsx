import React, { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="flex flex-col gap-5">
                <div>
                    <TextInput
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full p-2 bg-gray-600 border-0 text-white placeholder-slate-400"
                        autoComplete="username"
                        placeholder={"Email"}
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full p-2 bg-gray-600 border-0 text-white placeholder-slate-400"
                        autoComplete="current-password"
                        placeholder={"Password"}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                        />

                        <span className="ml-2 text-sm text-gray-200">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4 flex-col gap-4">
                        <PrimaryButton className="ml-4 hover:bg-slate-400 hover:text-gray-800" processing={processing}>
                            Sign in
                        </PrimaryButton>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-300 hover:text-gray-100"
                        >
                            Forgot your password?
                        </Link>
                    )}
                    <span className="text-gray-200 text-sm">or</span>
                    <Link
                        href={route("register")}
                        className="underline text-gray-300"
                    >
                        Sign up
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
