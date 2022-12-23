import React, { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="flex flex-col gap-5">
                <div className="p-2">
                    <TextInput
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full  border-0 placeholder-slate-400"
                        placeholder={'Name'}
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>  

                <div className="p-2">
                    <TextInput
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full  border-0 placeholder-slate-400"
                        placeholder={'Email'}
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="p-2">
                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full  border-0 placeholder-slate-400"
                        placeholder={'Password'}
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="p-2">
                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full  border-0 placeholder-slate-400"
                        placeholder={'Confirm password'}
                        handleChange={onHandleChange}
                        required
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link href={route('login')} className="hover:underline text-sm text-violet-500 hover:text-indigo-500">
                        Already registered?
                    </Link>

                    <button className="ml-4 bg-indigo-500 text-white p-2 rounded-md" processing={processing}>
                        Register
                    </button>
                </div>
            </form>
        </GuestLayout>
    );
}
