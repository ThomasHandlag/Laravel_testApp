import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";

export default function Shopping(props) {
    console.log(props.auth);
    return (
        <>
            <Header active="shopping" auth={props.auth} />
            {props.auth.user ? (
                <div>Authenticated</div>
            ) : (
                <div className="grid grid-rows-1 gap-3">
                    <div className="flex items-center justify-center pt-36">
                        <div className="flex items-center shadow-gray-800 w-6/12 h-4/6">
                            <h1 className="text-cyan-900 text-center p-2 text-lg">
                                You are not sign in yet?
                            </h1>
                            <Link
                                href="login"
                                className="shadow-slate-700 rounded-lg bg-gray-800 text-white p-2"
                                type="button"
                            >
                                Sign in now
                            </Link>
                            Or
                            <Link
                                href="register"
                                className="shadow-slate-700 rounded-lg bg-gray-800 text-white p-2"
                                type="button"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
