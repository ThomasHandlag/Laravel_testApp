import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import { Inertia } from "@inertiajs/inertia";
import React from "react";
import { useState } from "react";

export default function Authorize(props) {
    const [key, setKey] = useState("86800-56576-56433-49595");
    const onChange = (event) => {
        setKey(event.target.value);
    }
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col shadow-xl rounded-md gap-5 justify-center items-center p-2 lg:p-5 lg:w-[600px] lg:h-[500px] ">
                <p className="p-2 px-4 rounded-md text-center">
                    Lience key is the string like{" "}
                    <span className="text-slate-500">
                        xxxxx-xxxxx-xxxxx-xxxxx
                    </span>
                </p>
                <TextInput
                    className={"w-[400px]"}
                    defaultValue="86800-56576-56433-49595"
                    handleChange={onChange}
                />
                <InputError message={props.errors.liencekey_error} />
                <button
                    className="bg-gray-900 rounded-lg shadow-xl p-2 px-5 text-white"
                    type="button"
                    onClick={() => {
                        Inertia.get("admin.manif", {
                            liencekey: key,
                        });
                    }}
                >
                    Authorize
                </button>
            </div>
        </div>
    );
}
