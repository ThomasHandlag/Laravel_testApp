import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import payment from "../../images/payment.jpg";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <Header />
            <div className="flex items-center justify-center">
                <span className="text-xl text-indigo-700">
                    Scan QR code to complete transaction
                </span>
                {props.qr == 1 ? (
                    <img scr={payment} />
                ) : (
                    <span className="text-2lx text-indigo-800 shadow-lg">
                        Current payment method is not available
                    </span>
                )}
            </div>
            <Footer />
        </>
    );
}
