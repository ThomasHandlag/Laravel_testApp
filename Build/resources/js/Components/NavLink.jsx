import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'inline-flex font-mono items-center px-1 pt-1 pb-2 border-b-2 border-cyan-400 lg:text-[20px] text-[15px] font-bold leading-5 text-cyan-400 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out capitalize'
                    : 'inline-flex font-mono items-center px-1 pt-1 pb-2 border-b-2 border-teal-300 lg:text-[20px] text-[15px] font-bold leading-5 text-gray-600 hover:text-teal-300 hover:border-blue-500 focus:outline-none focus:text-teal-400 focus:border-gray-300 transition duration-150 ease-in-out capitalize'
            }
        >
            {children}
        </Link>
    );
}
