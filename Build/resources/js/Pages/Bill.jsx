import React from "react";

const Bill = (props) => {
    return (
        <div className="p-5 flex flex-col justify-center items-center gap-5 text-center">
            <div className="flex flex-col gap-2 font-bold border-b-2 border-black">
                <p className="text-[30px]">TSpace-Book</p>
                <p>Store 1: 102 Trung Nu Vuong, Ba Dinh, Ha Noi city</p>
                <p>Store 2: 360 Dien Bien Phu, Thanh Khe, Da Nang city</p>
                <p>Store 3: 192 Nguyen Van Linh, Binh Thanh, Ho Chi Minh city</p>
                <p>Phone: 0998584332</p>
                <p>Website: <span className="underline">tspacebook.com</span></p>
            </div>
            {props.text.map((e) => (
                <div className="flex flex-row gap-5">
                    <p>{e.title}</p>x<p>{e.total_p}</p>
                </div>
            ))}
            <p className="border-t-2 border-black">Customer name: {props.auth.user.name}</p>
            <p>Phone: {props.text[0].phone}</p>
            <p>Email: {props.text[0].email}</p>
            <p>Seri: {props.text[0].id}</p>
            <p className="font-bold">Support email: tspacebook@gmail.com</p>
        </div>
    );
};
export default Bill;
