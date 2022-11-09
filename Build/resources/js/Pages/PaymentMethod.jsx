import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import React from "react";

const PaymentMethod = (props) => {

    const showPaymentMethod = (val) => {

    }

    return (
        <>
            <Header active="" auth={props} />
            <div className="flex flex-col gap-10">
                <div className="flex gap-5 p-5">
                    <img className="" />
                </div>
                <input type="radio" name="paymentmethod" value={1} />
                <input type="radio" name="paymentmethod" value={2} />
                <input type="radio" name="paymentmethod" value={3} />
            </div>
            <Footer />
        </>
    );
};



export default PaymentMethod;
