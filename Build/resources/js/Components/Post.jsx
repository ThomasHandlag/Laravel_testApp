import React from "react";

export default function Post (data) {
    return (
            <div
                className="flex flex-col gap-2 bg-fixed rounded-b-lg relative lg:h-[60vh] overflow-auto bg-white"
            >
                <img className="object-contain" src={data.img} />
                <div className="bg-white rounded-md">
                    <p className="text-[25px] text-zinc-500 p-1">{data.tit}</p>
                    <p className="p-2 indent-2">{data.cont}</p>
                    <p className="text-slate-400 text-sm p-2">at {data.date}</p>
                </div>
            </div>
        );
}