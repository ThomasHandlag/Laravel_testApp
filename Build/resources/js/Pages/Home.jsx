import React from "react";
import { Link, Head, usePage } from "@inertiajs/inertia-react";
import Header from "@/Components/Header";
import BookCategory from "@/Components/BookCategory";
import book1 from "../../images/book1.png";
import book5 from "../../images/book5.png";
import FilterButton from "@/Components/FilterButton";
import IntroScene from "@/Components/IntroScene";
import TextInput from "@/Components/TextInput";
import { AiOutlineSearch } from "react-icons/ai/index";

export default function Home(props) {
    return (
        <>
            <Head title="Home" />
            <Header active={"home"} auth={props.auth} />
            <IntroScene />
            <div className="lg:p-10 p-6">
                <div className="flex flex-row p-2 gap-5 lg:p-10 lg:gap-28 justify-center shadow-lg uppercase font-mono font-medium">
                    <span className="text-center">Secure payment</span>
                    <span className="text-center">Free Delivery</span>
                    <span className="text-center">24/7 Support</span>
                    <span className="text-center">Genuine</span>
                </div>
            </div>
            <div className="grid lg:grid-cols-7 gap-10 ml-4">
                <div className="lg:flex flex-wrap grow-0 gap-4 col-span-2 h-min justify-center hidden">
                    <div className="flex">
                        <button className="p-2 border-gray-300 border-r-0 border-2 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm rounded-l-2xl">
                            <AiOutlineSearch />
                        </button>
                        <TextInput
                            className="rounded-r-2xl"
                            placeholder="Search..."
                        ></TextInput>
                    </div>
                    <div className="gap-5 flex flex-wrap justify-center">
                        <FilterButton>Social</FilterButton>
                        <FilterButton>English</FilterButton>
                        <FilterButton>Comic</FilterButton>
                        <FilterButton>Science</FilterButton>
                        <FilterButton>Math</FilterButton>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-1 md:grid-cols-2 md:gap-3 lg:grid-cols-5 lg:gap-5 lg:col-span-5">
                    {props.data.map((element) => (
                        <BookCategory
                            title={element.title}
                            price={element.price}
                            key={element.id}
                            image={element.path_img}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
