import Post from "@/Components/Post";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";

export default function AdminPage(props) {
    const [prel, setPrel] = useState(props.cr_tool);
    const listPrel = [
        <Update data={props.data} sk={props.sk} />,
        <Discount dat={props} />,
        <ReportBen attr={props.attr} />,
        <MangeUser attr={props.attr} s={props.s} />,
        <ListOrder attr={props.attr} />,
        <AddNew />,
        <Poster data={props.posts} />,
    ];
    return (
        <>
            <div className="grid grid-cols-8 h-[100vh]">
                <div
                    className={
                        "flex flex-col bg-blue-900 shadow-xl gap-5 col-span-1 sticky z-10 top-0"
                    }
                >
                    <Button
                        className={
                            props.cr_tool == 0
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.reload");
                        }}
                    >
                        Books
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 1
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.discount");
                        }}
                    >
                        Set Discount
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 2
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.report");
                        }}
                    >
                        Report
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 3
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.users");
                        }}
                    >
                        Manage Users
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 4
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.orders");
                        }}
                    >
                        Manage Orders
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 5
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("admin.add");
                        }}
                    >
                        Add books
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 6
                                ? " bg-purple-500 text-black"
                                : ""
                        }
                        onClick={() => {
                            Inertia.get("write.post");
                        }}
                    >
                        Write post
                    </Button>
                </div>
                <div className="col-span-7">{listPrel[prel]}</div>
            </div>
        </>
    );
}
const Button = ({
    children,
    type = "Button",
    disabled = false,
    className,
    onClick,
}) => {
    return (
        <button
            className={
                "rounded-xl bg-gray-900 text-white p-2 px-5 focus:outline-none " +
                className
            }
            onClick={(e) => onClick(e)}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

const Update = ({ data, sk }) => {
    // const [sk, setSk] = useState("");
    return (
        <div className="bg-white/60 backdrop-blur-2xl w-full flex gap-5 overflow-auto h-[100vh]">
            <table
                className="table-auto text-center"
                cellPadding={5}
                cellSpacing={5}
            >
                <thead>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Poster</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Author</th>
                    <th>Mass</th>
                    <th>Type</th>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <ManageTool data={e} key={e.id} />
                    ))}
                </tbody>
            </table>
            <div className="">
                <TextInput
                    type="text"
                    handleChange={(e) => {
                        Inertia.get("s.book", {
                            s_key: e.target.value,
                        });
                    }}
                    isFocused
                    placeholder="Seach..."
                    defaultValue={sk ? sk : ""}
                />
                {/* <Button
                    className={"p-2"}
                    onClick={(e) => {
                        Inertia.get("s.book", {
                            s_key: sk,
                        });
                    }}
                >
                    Search
                </Button> */}
            </div>
        </div>
    );
};
const AddNew = () => {
    const [img, setImg] = useState();

    const [temp, setTemp] = useState();

    const { data, setData } = useForm({
        title: "",
        author: "",
        price: 0,
        des: "",
        quantity: 0,
        mass: "",
        type: "",
    });
    const dat = (e) => {
        setData(e.target.name, e.target.value);
    };
    const insert = () => {
        Inertia.post("admin.add.book", {
            data: data,
            path_img: temp,
        });
    };
    return (
        <form className="flex gap-5 flex-col p-5">
            <div className="">
                <TextInput
                    type={"file"}
                    handleChange={(e) => {
                        setImg(URL.createObjectURL(e.target.files[0]));
                        setTemp(e.target.files[0]);
                    }}
                />
                <img className="w-[100px] h-[150px]" src={img} />
            </div>
            <TextInput
                placeholder={"Title"}
                name={"title"}
                handleChange={dat}
                defaultValue={data.title}
            />
            <TextInput
                placeholder={"Author"}
                name={"author"}
                defaultValue={data.author}
                handleChange={dat}
            />
            <TextInput
                placeholder={"Description"}
                defaultValue={data.des}
                name={"des"}
                handleChange={dat}
            />
            <TextInput
                defaultValue={data.mass}
                placeholder={"Mass"}
                name={"mass"}
                handleChange={dat}
            />
            <InputLabel forInput={"quantity"}>Quantity</InputLabel>
            <TextInput
                name={"quantity"}
                defaultValue={data.quantity}
                handleChange={dat}
            />
            <TextInput
                placeholder={"Type"}
                name={"type"}
                defaultValue={data.type}
                handleChange={dat}
            />
            <InputLabel forInput={"price"}>Price</InputLabel>
            <TextInput
                name={"price"}
                defaultValue={data.price}
                handleChange={dat}
            />
            <button
                className={
                    "rounded-xl w-max bg-blue-500 p-2 px-4 hover:bg-blue-900 text-white"
                }
                onClick={insert}
            >
                Add New
            </button>
        </form>
    );
};
const ManageTool = ({ data }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const [num, setNum] = useState(0);
    const submit = () => {
        Inertia.get("admin.update.book", {
            num: num,
        });
    };
    const del = () => {
        Inertia.get("admin.del.book", {
            id: data.id,
        });
    };
    return (
        <tr>
            {isUpdate ? (
                <td colSpan={4}>
                    <TextInput
                        placeholder={"Quantity"}
                        name="quantity"
                        defaultValue={num}
                        handleChange={(e) => {
                            setNum(e.target.value);
                        }}
                    />
                    <Button className={"bg-red-500"} onClick={submit}>
                        Save
                    </Button>
                </td>
            ) : (
                <>
                    <td>{data.title}</td>
                    <td>{data.quantity}</td>
                    <td>
                        <img
                            alt="Image"
                            src={data.path_img}
                            className="w-[200px] h-[200px]"
                        />
                    </td>
                    <td>{data.description}</td>
                    <td> {data.price}</td>
                    <td> {data.author}</td>
                    <td>{data.mass}</td>
                    <td>{data.type_book}</td>
                </>
            )}
            <td>
                <Button
                    className={"bg-green-500"}
                    onClick={(e) => {
                        setIsUpdate(!isUpdate);
                    }}
                >
                    {isUpdate ? "Close" : "Update"}
                </Button>
                {isUpdate ? (
                    ""
                ) : (
                    <Button className={"bg-red-600"} onClick={del}>
                        Delete
                    </Button>
                )}
            </td>
        </tr>
    );
};
const ReportBen = ({ attr }) => {
    return (
        <div className="flex justify-center flex-col items-center bg-violet-900 h-[90vh]">
            <div className="flex flex-row gap-5 text-white text-[20px]">
                Current total proceeds:
                <span className="p-2 px-4 text-slate-300">${attr.tolNum}</span>
            </div>
            <div className="flex flex-row gap-5 text-white text-[20px]">
                Current total orders:
                <span className="p-2 px-4">{attr.orderNum}</span>
            </div>
            <div className="flex flex-row gap-5 text-white text-[20px]">
                Current total books are sell:
                <span className="p-2 px-4">{attr.bSell}</span>
            </div>
        </div>
    );
};
const MangeUser = ({ attr, s }) => {
    return (
        <table
            className="table-auto w-full text-slate-700 text-center"
            cellPadding={5}
            cellSpacing={5}
        >
            <thead>
                <tr>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Image</th>
                    <th>
                        <TextInput
                            placeholder={"Search..."}
                            type="text"
                            handleChange={(e) => {
                                Inertia.get("s.user", {
                                    s_k: e.target.value,
                                });
                            }}
                            defaultValue={s ? s : ""}
                            isFocused
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                {attr.map((e) => (
                    <UserItem attr={e} key={e.id} />
                ))}
            </tbody>
        </table>
    );
};
const UserItem = ({ attr }) => {
    return (
        <tr>
            <td>{attr.name}</td>
            <td>{attr.email}</td>
            <td>{attr.phone}</td>
            <td>{attr.gender == 1 ? "Male" : "Female"}</td>
            <td>
                <img
                    src={attr.path_img}
                    className="rounded-full w-[120px] h-[120px]"
                />
            </td>
            <td>
                <Button
                    onClick={() => {
                        Inertia.get("admin.del.user", {
                            id: attr.id,
                        });
                    }}
                    className="hover:bg-red-500"
                >
                    Ban User
                </Button>
            </td>
        </tr>
    );
};
const ListOrder = ({ attr }) => {
    return (
        <>
            <div className="flex justify-center gap-4 p-5 bg-blue-900 text-white">
                <span>
                    Current Orders: {attr.length}
                </span>
            </div>
            <table
                className="table-auto w-full text-slate-700 text-center"
                cellPadding={5}
                cellSpacing={5}
            >
                <thead>
                    <tr>
                        <th>User name</th>
                        <th>Email</th>
                        <th>Date Order</th>
                        <th>Phone</th>
                        <th>Order state</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {attr.map((e) => (
                        <OrderItem attr={e} />
                    ))}
                </tbody>
            </table>
        </>
    );
};
const OrderItem = ({ attr }) => {
    return (
        <tr>
            <td>{attr.name}</td>
            <td>{attr.email}</td>
            <td>{attr.date_order}</td>
            <td>{attr.phone}</td>
            <td>{attr.state_order == 0 ? "Waiting for process" : "Approve"}</td>
            <td>
                <div className="flex gap-4 justify-center">
                    {attr.state_order == 0 ? (
                        <Button
                            onClick={() => {
                                Inertia.get("admin.acc.order", {
                                    id: attr.id,
                                });
                            }}
                            className="hover:bg-green-500"
                        >
                            Accept Order
                        </Button>
                    ) : (
                        ""
                    )}
                    <Button
                        onClick={() => {
                            Inertia.get("admin.del.order", {
                                id: attr.id,
                            });
                        }}
                        className="hover:bg-red-500"
                    >
                        Decline Order
                    </Button>
                </div>
            </td>
        </tr>
    );
};
const Discount = ({ dat }) => {
    const { data, setData } = useForm({
        date_apply: "",
        date_expire: "",
        offer: 0,
        cata: -1,
    });
    const handle = (event) => {
        setData(event.target.name, event.target.value);
    };
    return (
        <div className="grid grid-cols-8">
            <table
                className="col-span-6 table-auto text-center"
                cellPadding={4}
                cellSpacing={4}
            >
                <thead>
                    <tr>
                        <th>Date applied</th>
                        <th>Date expired</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dat.dat.map((e) => (
                        <DiscountList
                            appl={e.date_applied}
                            ex={e.date_expired}
                            off={e.discount_offer}
                            id={e.id}
                            key={e.id}
                        />
                    ))}
                </tbody>
            </table>
            <form className="col-span-2 bg-blue-900 p-5">
                <InputLabel
                    forInput={"date_apply"}
                    className={"text-slate-200"}
                >
                    Date Apply:{" "}
                </InputLabel>
                <TextInput
                    type="date"
                    name="date_apply"
                    handleChange={handle}
                />
                <InputLabel
                    forInput={"date_expire"}
                    className={"text-slate-200"}
                >
                    Date Expire:{" "}
                </InputLabel>
                <TextInput
                    type="date"
                    name="date_expire"
                    handleChange={handle}
                />
                <InputLabel forInput={"offer"} className={"text-slate-200"}>
                    Offer: (Ex: 10%)
                </InputLabel>
                <TextInput type="number" name="offer" handleChange={handle} />
                <select
                    name="cata"
                    className="capitalize"
                    onChange={handle}
                    defaultValue={-1}
                >
                    {dat.catalog.map((e) => (
                        <option value={e.id} key={e.id}>
                            {e.catalog_name}
                        </option>
                    ))}
                    <option value={-1}>All</option>
                </select>
                <Button
                    onClick={() => {
                        Inertia.get("admin.add.offer", {
                            data: data,
                        });
                    }}
                >
                    Add new offer
                </Button>
            </form>
        </div>
    );
};
const DiscountList = ({ appl, ex, off, id }) => {
    return (
        <tr>
            <td>{appl}</td>
            <td>{ex}</td>
            <td>{off}%</td>
            <td>
                {" "}
                <Button
                    className="hover:bg-red-500"
                    onClick={() => {
                        Inertia.get("admin.del.offer", {
                            id: id,
                        });
                    }}
                >
                    Delete offer
                </Button>
            </td>
        </tr>
    );
};

const Poster = ({ data }) => {
    const [tit, setTit] = useState("");
    const [img, setImg] = useState();
    const [cont, setCont] = useState("");
    return (
        <div className="flex flex-col gap-5 p-5">
            <TextInput
                type="text"
                name="tit"
                placeholder={"Title"}
                handleChange={(e) => {
                    setTit(e.target.value);
                }}
            />
            <TextInput
                type="file"
                name="file"
                placeholder={"Image"}
                handleChange={(e) => {
                    setImg(e.target.files[0]);
                }}
            />
            <textarea
                placeholder="Content"
                onChange={(e) => {
                    setCont(e.target.value);
                }}
                title="Your content"
            />
            <Button
                className={" w-max"}
                onClick={() => {
                    Inertia.post("add.post", {
                        tit: tit,
                        file: img,
                        cont: cont,
                    });
                }}
            >
                Post
            </Button>
            <div className="grid grid-cols-4">
                {data.map((e) => (
                    <div className="flex flex-col gap-2">
                        <Post
                            tit={e.title}
                            img={e.path_img}
                            cont={e.cont}
                            date={e.date_post}
                        />
                        <Button
                            onClick={() => {
                                Inertia.get("del.post", { id: e.id });
                            }}
                        >
                            Delete this post
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
