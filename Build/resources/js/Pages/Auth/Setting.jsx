import React from "react";
import Header from "@/Components/Header";
import { useState } from "react";
import Footer from "@/Components/Footer";
import { BiEdit } from "react-icons/bi/index";
import { useForm } from "@inertiajs/inertia-react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs/index";
import { Inertia } from "@inertiajs/inertia";

export default function Setting(props) {
    //toggle edit basis infor
    const [isEnableSetting, setSetting] = useState(false);
    //toggle image upload
    const [isUploadImage, setUploadImageField] = useState(false);
    //store temporary image
    const [selectedImg, setSelectedImg] = useState();
    //set preview image
    const [isPreviewImg, setIsPreview] = useState(false);
    //check the image is set or not
    const [isSelectedImg, setIsSelectedImg] = useState(false);
    //set temporary image
    const [tempImg, setTempImg] = useState();

    const enableSetting = () => {
        setSetting(!isEnableSetting);
    };
    const setEditFile = () => {
        setUploadImageField(!isUploadImage);
        setIsPreview(false);
    };
    const previewImg = () => {
        setSelectedImg(URL.createObjectURL(tempImg));
        setIsPreview(true);
    };
    const handlerChange = (e) => {
        setTempImg(e.target.files[0]);
        setIsSelectedImg(true);
    };

    const saveImg = () => {
        isSelectedImg
            ? Inertia.post("upload.user.image", {
                  id: props.auth.user.id,
                  name: props.auth.user.name,
                  file: tempImg,
              })
            : null;
        document.getElementById("file").value = null;
        setUploadImageField(!isUploadImage);
        setIsPreview(false);
    };

    // const submit = (e) => {
    //     e.prevenDefault();
    //     post(route("update.user.infor"));
    // };
    const onRemove = () => {
        Inertia.get("delete.user", { id: props.auth.user.id });
    };
    return (
        <>
            <Header auth={props} />
            <div className="w-full grid lg:grid-cols-5 grid-cols-1 p-10 gap-5">
                <div className="lg:p-5 flex flex-col gap-5 rounded-xl shadow-2xl border-x-2 border-b-2 col-span-2">
                    <img
                        className="rounded-full lg:w-[300px] lg:h-[300px] h-[100px] w-[100px] border-2 relative"
                        src={
                            isPreviewImg
                                ? selectedImg
                                : props.auth.user.path_img
                        }
                    />
                    <button
                        className="bg-transparent text-[30px] text-gray-500 lg:absolute w-max"
                        onClick={setEditFile}
                    >
                        <BiEdit />
                    </button>
                    <button
                        onClick={() =>
                            Inertia.get("update.password", {
                                email: props.auth.user.email,
                            })
                        }
                        className={
                            "bg-red-400 p-2 rounded-xl focus:outline-none text-center w-max"
                        }
                    >
                        Reset password
                    </button>
                    <div
                        className={
                            isUploadImage
                                ? "flex flex-col justify-center gap-5 items-center"
                                : "hidden"
                        }
                    >
                        <input
                            type={"file"}
                            className="rounded-xl border border-solid border-gray-300 focus:outline-none px-2 text-base py-2 text-gray-700"
                            name="file"
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                            onChange={handlerChange}
                            id={"file"}
                        />
                        <button
                            className="bg-gradient-to-tr from-cyan-400 to-green-500 hover:bg-gradient-to-tr hover:from-green-500 hover:to-cyan-400 p-2 lg:px-5 rounded-xl w-max"
                            onClick={previewImg}
                        >
                            Preview
                        </button>
                        <button
                            className="p-2 px-4 w-max bg-red-400 rounded-xl hover:bg-red-700 hover:text-white focus:outline-none focus:border-cyan-300"
                            onClick={saveImg}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <div className="border-l-2 col-span-3 flex-col">
                    <button
                        className="bg-transparent text-[30px] text-gray-500 p-2"
                        onClick={enableSetting}
                    >
                        <BiEdit />
                    </button>
                    <div className="flex flex-col lg:gap-5 gap-4 p-4">
                        {isEnableSetting ? (
                            <EnabledFields
                                list={props.auth.user}
                                onClick={enableSetting}
                            />
                        ) : (
                            <DisabledFields
                                list={props.auth.user}
                                onRemove={onRemove}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
const EnabledFields = (list) => {
    const { data, setData, post } = useForm({
        name: list.list.name,
        email: list.list.email,
        phone: list.list.phone,
        gender: list.list.gender,
    });
    const onChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("update.infor"));
        list.onClick();
    };
    return (
        <form
            onSubmit={(e) => {
                submit(e);
            }}
            className="flex flex-col lg:gap-5"
        >
            <label className="text-slate-600">Name:</label>
            <input
                className={"p-2 rounded-xl border-2"}
                defaultValue={data.name}
                name={"name"}
                type={"text"}
                onChange={onChange}
            />
            <label className="text-slate-600">Email:</label>
            <input
                className={"p-2 rounded-xl border-2"}
                defaultValue={data.email}
                name={"name"}
                type={"text"}
                onChange={onChange}
            />
            <label className="text-slate-600">Phone:</label>
            <input
                className={"p-2 rounded-xl border-2"}
                defaultValue={data.phone}
                name={"phone"}
                type={"text"}
                onChange={onChange}
            />
            <label className="text-slate-600">Gender:</label>
            <select
                className="rounded-xl border-2 p-2"
                name={"gender"}
                defaultValue={data.gender == 1 ? 1 : 0}
                onChange={onChange}
            >
                <option value={0}>Female</option>
                <option value={1}>Male</option>
            </select>
            <button
                className="p-2 px-4 w-max bg-red-400 rounded-xl"
                type={"submit"}
            >
                Save
            </button>
        </form>
    );
};
const DisabledFields = (list, onRemove) => {
    return (
        <>
            <div className="p-2 border-x-2 border-b-2 rounded-xl flex flex-row justify-center items-center">
                <label className="text-slate-600 border-r-2">Name:</label>
                <span className="text-slate-600 ">{list.list.name}</span>
            </div>
            <div className="p-2 border-x-2 border-b-2 rounded-xl flex flex-row justify-center items-center">
                <label className="text-slate-600 border-r-2">Email:</label>
                <span className="text-slate-600 ">{list.list.email}</span>
            </div>
            <div className="p-2 border-x-2 border-b-2 rounded-xl flex flex-row justify-center items-center">
                <label className="text-slate-600 border-r-2">Phone:</label>
                <span className="text-slate-600 ">{list.list.phone}</span>
            </div>

            <div className="p-2 border-x-2 border-b-2 rounded-xl flex flex-row justify-center items-center">
                <label className="text-slate-600 border-r-2">Gender:</label>
                <span className="text-slate-600 ">
                    {list.list.gender == 1 ? (
                        <BsGenderMale />
                    ) : (
                        <BsGenderFemale />
                    )}
                </span>
            </div>
            <div className="p-2 border-x-2 border-b-2 rounded-xl flex flex-row justify-center items-center">
                <button
                    className="p-2 px-5 w-max shadow-xl bg-purple-800 text-white rounded-xl hover:bg-red-600"
                    onClick={(e) => onRemove}
                >
                    Delete Account
                </button>
            </div>
        </>
    );
};
