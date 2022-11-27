import Header from "@/Components/Header";
import Post from "@/Components/Post";
import Footer from "@/Components/Footer";
import React from "react";

export default function About(props) {
    return (
        <>
            <Header active="about" auth={props} />
            <div className="bg-gradient-to-tr from-slate-800 to-indigo-900 lg:h-[100vh] flex flex-col gap-10 p-10">
                <div className="flex flex-col items-center">
                    <p className="text-[30px] text-white font-mono font-bold text-center">
                        “Best practices” don't actually work.
                    </p>
                    <p className="text-white lg:w-[50vw] font-mono text-center">
                        I've written a few thousand words on why traditional
                        “semantic class names” are the reason CSS is hard to
                        maintain, but the truth is you're never going to believe
                        me until you actually try it. If you can suppress the
                        urge to retch long enough to give it a chance, I really
                        think you'll wonder how you ever worked with CSS any
                        other way.
                    </p>
                </div>
                <div className="grid lg:grid-cols-4 grid-rows-1 gap-5">
                    {props.news.map((e) => (
                        <Post
                            key={e.id}
                            img={e.path_img}
                            tit={e.title}
                            cont={e.cont}
                            date={e.date_post}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
