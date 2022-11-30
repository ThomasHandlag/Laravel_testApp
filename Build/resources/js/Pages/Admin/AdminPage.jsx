import Post from "@/Components/Post";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { FaBook, FaJediOrder, FaMoneyBill } from "react-icons/fa/index";

export default function AdminPage(props) {
    console.log(props);
    const [prel, setPrel] = useState(props.cr_tool);
    const listPrel = [
        <Update data={props.data} sk={props.sk} />,
        <Discount dat={props} />,
        <ReportBen attr={props.attr} />,
        <MangeUser attr={props.attr} s={props.s} />,
        <ListOrder attr={props.attr} />,
        <AddNew cat={props.cat} />,
        <Poster data={props.posts} />,
        <Catalog data={props.cat} />,
    ];
    return (
        <>
            <div className="grid grid-cols-8 h-[100vh] relative">
                <div
                    className={
                        "flex flex-col bg-gradient-to-br from-emerald-300 to-sky-400 shadow-xl gap-5 col-span-1 sticky z-20 top-0 p-5"
                    }
                >
                    <Button
                        className={
                            props.cr_tool == 0
                                ? " bg-purple-600"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
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
                                ? " bg-purple-600"
                                : " hover:bg-purple-500"
                        }
                        onClick={() => {
                            Inertia.get("write.post");
                        }}
                    >
                        Write post
                    </Button>
                    <Button
                        className={
                            props.cr_tool == 7
                                ? " bg-purple-500"
                                : " hover:bg-purple-500"
                        }
                        onClick={() => {
                            Inertia.get("admin.cat");
                        }}
                    >
                        Add catalog
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
const AddNew = ({ cat }) => {
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
        cat_id: 1,
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
            <select name="cat_id" onChange={dat}>
                {cat.map((e) => (
                    <option value={e.id}>{e.catalog_name}</option>
                ))}
            </select>
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
    const [price, setP] = useState(0);
    const submit = () => {
        Inertia.get("admin.update.book", {
            num: num,
            price: price,
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
                <td colSpan={4} className="flex gap-2">
                    <TextInput
                        placeholder={"Quantity"}
                        name="quantity"
                        handleChange={(e) => {
                            setNum(e.target.value);
                        }}
                    />
                    <TextInput
                        placeholder={"Price"}
                        name="price"
                        handleChange={(e) => {
                            setP(e.target.value);
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
                            className="w-[220px] h-[160px]"
                        />
                    </td>
                    <td>{data.description}</td>
                    <td> {data.price}</td>
                    <td> {data.author}</td>
                    <td>{data.mass}</td>
                    <td>{data.type_book}</td>
                </>
            )}
            <td className="flex flex-col gap-2">
                <Button
                    className={"bg-green-500 w-max"}
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
                <span className="p-2 px-4 flex flex-row justify-center items-center gap-2">
                    ${attr.tolNum} <FaMoneyBill />
                </span>
            </div>
            <div className="flex flex-row gap-5 text-white text-[20px]">
                Current total orders:
                <span className="p-2 px-4 flex flex-row justify-center items-center gap-2">
                    {attr.orderNum} <FaJediOrder />
                </span>
            </div>
            <div className="flex flex-row gap-5 text-white text-[20px]">
                Current total books are sell:
                <span className="p-2 px-4 flex flex-row justify-center items-center gap-2">
                    {attr.bSell} <FaBook />
                </span>
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
            <div className="flex justify-center gap-4 p-5 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white">
                <span>Current Orders: {attr.length}</span>
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
                className="col-span-6 table-auto text-center h-[100vh] overflow-auto"
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
            <form className="col-span-2 bg-gradient-to-br from-teal-300 to-indigo-500 p-5 h-[100vh] flex flex-col gap-2">
                <InputLabel forInput={"date_apply"}>Date Apply:</InputLabel>
                <TextInput
                    type="date"
                    name="date_apply"
                    handleChange={handle}
                />
                <InputLabel forInput={"date_expire"}>Date Expire:</InputLabel>
                <TextInput
                    type="date"
                    name="date_expire"
                    handleChange={handle}
                />
                <InputLabel forInput={"offer"}>Offer: (Eg: 10%)</InputLabel>
                <TextInput
                    type="number"
                    name="offer"
                    handleChange={handle}
                    placeholder="Discount"
                />
                <select
                    name="cata"
                    className="capitalize rounded-md"
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
                    className="hover:bg-purple-400 shadow-lg w-max"
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
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(0);

    const [etit, editTit] = useState("");
    const [eimg, editImg] = useState();
    const [econt, editCont] = useState("");

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
                    <div className="flex flex-col gap-2" key={e.id}>
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
                        <Button
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        >
                            Edit post
                        </Button>
                    </div>
                ))}
            </div>
            {edit ? (
                <div className="p-2 flex flex-col gap-4">
                    <div className="w-full bg-purple-500 p-5">Edit post</div>
                    <textarea
                        type="text"
                        placeholder={"Title"}
                        onChange={(e) => {
                            editTit(e.target.value);
                        }}
                        defaultValue={data[index].title}
                        maxLength={200}
                    />
                    <TextInput
                        type="file"
                        placeholder={"Image"}
                        handleChange={(e) => {
                            editImg(e.target.files[0]);
                        }}
                    />
                    <textarea
                        placeholder="Content"
                        onChange={(e) => {
                            editCont(e.target.value);
                        }}
                        title="Post content"
                        defaultValue={data[index].cont}
                        maxLength={255}
                    />
                    <Button
                        className={
                            "hover:bg-gradient-to-r from-cyan-500 to-violet-600 w-max"
                        }
                        onClick={() => {
                            Inertia.get("admin.update.post", {
                                tit: etit,
                                file: eimg,
                                cont: econt,
                            });
                        }}
                    >
                        Save edit
                    </Button>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

const Catalog = ({ data }) => {
    const [name, setName] = useState("");
    const [sk, setSk] = useState("");
    return (
        <div className="flex flex-col justify-center gap-5 p-5">
            <TextInput
                type="text"
                name="catlog"
                handleChange={(e) => {
                    setName(e.target.value);
                }}
                placeholder="Catalog name"
            />
            <TextInput
                type="text"
                name="sk"
                handleChange={(e) => {
                    setSk(e.target.value);
                }}
                placeholder="Search key"
            />
            <Button
                className="hover:bg-green-500 w-max"
                onClick={() => {
                    Inertia.get("admin.add.catlog", { name: name, k_s: sk });
                }}
            >
                Add new catalog
            </Button>
            <div className="flex flex-col gap-5 border-t-2">
                <span className="text-slate-500">Current catalogs</span>
                <select className="rounded-lg border-slate-500">
                    {data.map((e) => (
                        <option value={e.id}>{e.catalog_name}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};
