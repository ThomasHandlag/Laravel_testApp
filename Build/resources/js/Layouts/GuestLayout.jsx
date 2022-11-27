import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import tspace from "../../images/tspace.png";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-tr from-slate-600 to-gray-300">
            <div>
                <Link href="/">
                    <img src={tspace} className="lg:w-[250px] lg:h-[120px]" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-slate-800 shadow-2xl overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
